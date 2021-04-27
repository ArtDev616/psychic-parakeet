/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import JsZip from 'jszip';
import FileSaver from 'file-saver';

export type File = {
  url: string;
  fileName: string;
  fileExtension: string;
  blob?: Blob;
}

const replaceNonAlphaNumeric = (str: string) => str.replace(/[^a-z0-9]/gi, '-');

const exportToZip = async (zipName: string, files: Array<File>) => {
  const zip = JsZip();
  files.forEach((file) => {
    if (file.blob) {
      zip.file(`${replaceNonAlphaNumeric(file.fileName)}.${file.fileExtension}`, file.blob);
    }
  });
  const zipFile = await zip.generateAsync({ type: 'blob' });
  return FileSaver.saveAs(zipFile, replaceNonAlphaNumeric(zipName));
};

const getBlob = async (url: string) => {
  const response = await fetch(url);
  return response.blob();
};

export const downloadAndZipUrls = async (
  fileName: string, files: Array<File>,
): Promise<void> => {
  const processedFiles = await Promise.all(
    files.map(async (file) => {
      const blob = await getBlob(file.url);
      return {
        ...file,
        blob,
      };
    }),
  );

  await exportToZip(fileName, processedFiles);
};

export const exportToCsv = (fileName: string, rows: Array<any>): void => {
  const processRow = (row: Array<any>) => {
    let finalVal = '';
    for (let j = 0; j < row.length; j++) {
      let innerValue = row[j] === null ? '' : row[j].toString();
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString();
      }
      let result = innerValue.replace(/"/g, '""');
      if (result.search(/("|,|\n)/g) >= 0) { result = `"${result}"`; }
      if (j > 0) { finalVal += ','; }
      finalVal += result;
    }
    return `${finalVal}\n`;
  };

  let csvFile = '';
  for (let i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i]);
  }

  const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
