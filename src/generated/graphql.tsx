import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  HeaderItem: any;
  bigint: any;
  date: any;
  json: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type DeactivateAccountInput = {
  feedback?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LambdaOutput = {
  __typename?: 'LambdaOutput';
  body: Scalars['String'];
  statusCode: Scalars['Int'];
};

export type LogAmplitudeEventInput = {
  eventName: Scalars['String'];
  properties?: Maybe<Scalars['json']>;
  userId: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type SubscribeMailchimpInput = {
  email: Scalars['String'];
  status: Scalars['String'];
  tags: Array<Scalars['String']>;
};

/** columns and relationships of "accomplishment_badge_type" */
export type Accomplishment_Badge_Type = {
  __typename?: 'accomplishment_badge_type';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  groupBadges: Array<Group_Badge_Type>;
  /** An aggregated array relationship */
  groupBadges_aggregate: Group_Badge_Type_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "accomplishment_badge_type" */
export type Accomplishment_Badge_TypeGroupBadgesArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};


/** columns and relationships of "accomplishment_badge_type" */
export type Accomplishment_Badge_TypeGroupBadges_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};

/** aggregated selection of "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Aggregate = {
  __typename?: 'accomplishment_badge_type_aggregate';
  aggregate?: Maybe<Accomplishment_Badge_Type_Aggregate_Fields>;
  nodes: Array<Accomplishment_Badge_Type>;
};

/** aggregate fields of "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Aggregate_Fields = {
  __typename?: 'accomplishment_badge_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accomplishment_Badge_Type_Max_Fields>;
  min?: Maybe<Accomplishment_Badge_Type_Min_Fields>;
};


/** aggregate fields of "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accomplishment_Badge_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Accomplishment_Badge_Type_Max_Order_By>;
  min?: Maybe<Accomplishment_Badge_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Arr_Rel_Insert_Input = {
  data: Array<Accomplishment_Badge_Type_Insert_Input>;
  on_conflict?: Maybe<Accomplishment_Badge_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "accomplishment_badge_type". All fields are combined with a logical 'AND'. */
export type Accomplishment_Badge_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accomplishment_Badge_Type_Bool_Exp>>>;
  _not?: Maybe<Accomplishment_Badge_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accomplishment_Badge_Type_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  groupBadges?: Maybe<Group_Badge_Type_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "accomplishment_badge_type" */
export enum Accomplishment_Badge_Type_Constraint {
  /** unique or primary key constraint */
  AccomplishmentBadgeTypePkey = 'accomplishment_badge_type_pkey'
}

export enum Accomplishment_Badge_Type_Enum {
  EarlyUser = 'early_user',
  Merch = 'merch'
}

/** expression to compare columns of type accomplishment_badge_type_enum. All fields are combined with logical 'AND'. */
export type Accomplishment_Badge_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Accomplishment_Badge_Type_Enum>;
  _in?: Maybe<Array<Accomplishment_Badge_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Accomplishment_Badge_Type_Enum>;
  _nin?: Maybe<Array<Accomplishment_Badge_Type_Enum>>;
};

/** input type for inserting data into table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  groupBadges?: Maybe<Group_Badge_Type_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Accomplishment_Badge_Type_Max_Fields = {
  __typename?: 'accomplishment_badge_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Accomplishment_Badge_Type_Min_Fields = {
  __typename?: 'accomplishment_badge_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Mutation_Response = {
  __typename?: 'accomplishment_badge_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accomplishment_Badge_Type>;
};

/** input type for inserting object relation for remote table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Obj_Rel_Insert_Input = {
  data: Accomplishment_Badge_Type_Insert_Input;
  on_conflict?: Maybe<Accomplishment_Badge_Type_On_Conflict>;
};

/** on conflict condition type for table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_On_Conflict = {
  constraint: Accomplishment_Badge_Type_Constraint;
  update_columns: Array<Accomplishment_Badge_Type_Update_Column>;
  where?: Maybe<Accomplishment_Badge_Type_Bool_Exp>;
};

/** ordering options when selecting data from "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Order_By = {
  description?: Maybe<Order_By>;
  groupBadges_aggregate?: Maybe<Group_Badge_Type_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "accomplishment_badge_type" */
export enum Accomplishment_Badge_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "accomplishment_badge_type" */
export type Accomplishment_Badge_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "accomplishment_badge_type" */
export enum Accomplishment_Badge_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/**
 * announcements
 *
 *
 * columns and relationships of "announcement_"
 */
export type Announcement_ = {
  __typename?: 'announcement_';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  files: Array<Announcement_File>;
  /** An aggregated array relationship */
  files_aggregate: Announcement_File_Aggregate;
  /** An object relationship */
  group: Group_;
  groupId: Scalars['uuid'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  pinned_groups: Array<Group_>;
  /** An aggregated array relationship */
  pinned_groups_aggregate: Group__Aggregate;
  prismaId?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/**
 * announcements
 *
 *
 * columns and relationships of "announcement_"
 */
export type Announcement_FilesArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/**
 * announcements
 *
 *
 * columns and relationships of "announcement_"
 */
export type Announcement_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/**
 * announcements
 *
 *
 * columns and relationships of "announcement_"
 */
export type Announcement_Pinned_GroupsArgs = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};


/**
 * announcements
 *
 *
 * columns and relationships of "announcement_"
 */
export type Announcement_Pinned_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};

/** aggregated selection of "announcement_" */
export type Announcement__Aggregate = {
  __typename?: 'announcement__aggregate';
  aggregate?: Maybe<Announcement__Aggregate_Fields>;
  nodes: Array<Announcement_>;
};

/** aggregate fields of "announcement_" */
export type Announcement__Aggregate_Fields = {
  __typename?: 'announcement__aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Announcement__Max_Fields>;
  min?: Maybe<Announcement__Min_Fields>;
};


/** aggregate fields of "announcement_" */
export type Announcement__Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Announcement__Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "announcement_" */
export type Announcement__Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Announcement__Max_Order_By>;
  min?: Maybe<Announcement__Min_Order_By>;
};

/** input type for inserting array relation for remote table "announcement_" */
export type Announcement__Arr_Rel_Insert_Input = {
  data: Array<Announcement__Insert_Input>;
  on_conflict?: Maybe<Announcement__On_Conflict>;
};

/** Boolean expression to filter rows from the table "announcement_". All fields are combined with a logical 'AND'. */
export type Announcement__Bool_Exp = {
  _and?: Maybe<Array<Maybe<Announcement__Bool_Exp>>>;
  _not?: Maybe<Announcement__Bool_Exp>;
  _or?: Maybe<Array<Maybe<Announcement__Bool_Exp>>>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  files?: Maybe<Announcement_File_Bool_Exp>;
  group?: Maybe<Group__Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  pinned_groups?: Maybe<Group__Bool_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  subtitle?: Maybe<String_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "announcement_" */
export enum Announcement__Constraint {
  /** unique or primary key constraint */
  AnnouncementPkey = 'announcement__pkey',
  /** unique or primary key constraint */
  AnnouncementPrismaIdKey = 'announcement__prisma_id_key'
}

/** input type for inserting data into table "announcement_" */
export type Announcement__Insert_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  files?: Maybe<Announcement_File_Arr_Rel_Insert_Input>;
  group?: Maybe<Group__Obj_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pinned_groups?: Maybe<Group__Arr_Rel_Insert_Input>;
  prismaId?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Announcement__Max_Fields = {
  __typename?: 'announcement__max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "announcement_" */
export type Announcement__Max_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  subtitle?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Announcement__Min_Fields = {
  __typename?: 'announcement__min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "announcement_" */
export type Announcement__Min_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  subtitle?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "announcement_" */
export type Announcement__Mutation_Response = {
  __typename?: 'announcement__mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Announcement_>;
};

/** input type for inserting object relation for remote table "announcement_" */
export type Announcement__Obj_Rel_Insert_Input = {
  data: Announcement__Insert_Input;
  on_conflict?: Maybe<Announcement__On_Conflict>;
};

/** on conflict condition type for table "announcement_" */
export type Announcement__On_Conflict = {
  constraint: Announcement__Constraint;
  update_columns: Array<Announcement__Update_Column>;
  where?: Maybe<Announcement__Bool_Exp>;
};

/** ordering options when selecting data from "announcement_" */
export type Announcement__Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  files_aggregate?: Maybe<Announcement_File_Aggregate_Order_By>;
  group?: Maybe<Group__Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  pinned_groups_aggregate?: Maybe<Group__Aggregate_Order_By>;
  prismaId?: Maybe<Order_By>;
  subtitle?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "announcement_" */
export type Announcement__Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "announcement_" */
export enum Announcement__Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "announcement_" */
export type Announcement__Set_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "announcement_" */
export enum Announcement__Update_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/**
 * announcement file
 *
 *
 * columns and relationships of "announcement_file"
 */
export type Announcement_File = {
  __typename?: 'announcement_file';
  /** An object relationship */
  announcement_: Announcement_;
  announcement_id: Scalars['uuid'];
  /** An object relationship */
  file: File;
  file_id: Scalars['uuid'];
};

/** aggregated selection of "announcement_file" */
export type Announcement_File_Aggregate = {
  __typename?: 'announcement_file_aggregate';
  aggregate?: Maybe<Announcement_File_Aggregate_Fields>;
  nodes: Array<Announcement_File>;
};

/** aggregate fields of "announcement_file" */
export type Announcement_File_Aggregate_Fields = {
  __typename?: 'announcement_file_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Announcement_File_Max_Fields>;
  min?: Maybe<Announcement_File_Min_Fields>;
};


/** aggregate fields of "announcement_file" */
export type Announcement_File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Announcement_File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "announcement_file" */
export type Announcement_File_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Announcement_File_Max_Order_By>;
  min?: Maybe<Announcement_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "announcement_file" */
export type Announcement_File_Arr_Rel_Insert_Input = {
  data: Array<Announcement_File_Insert_Input>;
  on_conflict?: Maybe<Announcement_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "announcement_file". All fields are combined with a logical 'AND'. */
export type Announcement_File_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Announcement_File_Bool_Exp>>>;
  _not?: Maybe<Announcement_File_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Announcement_File_Bool_Exp>>>;
  announcement_?: Maybe<Announcement__Bool_Exp>;
  announcement_id?: Maybe<Uuid_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  file_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "announcement_file" */
export enum Announcement_File_Constraint {
  /** unique or primary key constraint */
  AnnouncementFilePkey = 'announcement_file_pkey'
}

/** input type for inserting data into table "announcement_file" */
export type Announcement_File_Insert_Input = {
  announcement_?: Maybe<Announcement__Obj_Rel_Insert_Input>;
  announcement_id?: Maybe<Scalars['uuid']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Announcement_File_Max_Fields = {
  __typename?: 'announcement_file_max_fields';
  announcement_id?: Maybe<Scalars['uuid']>;
  file_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "announcement_file" */
export type Announcement_File_Max_Order_By = {
  announcement_id?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Announcement_File_Min_Fields = {
  __typename?: 'announcement_file_min_fields';
  announcement_id?: Maybe<Scalars['uuid']>;
  file_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "announcement_file" */
export type Announcement_File_Min_Order_By = {
  announcement_id?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "announcement_file" */
export type Announcement_File_Mutation_Response = {
  __typename?: 'announcement_file_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Announcement_File>;
};

/** input type for inserting object relation for remote table "announcement_file" */
export type Announcement_File_Obj_Rel_Insert_Input = {
  data: Announcement_File_Insert_Input;
  on_conflict?: Maybe<Announcement_File_On_Conflict>;
};

/** on conflict condition type for table "announcement_file" */
export type Announcement_File_On_Conflict = {
  constraint: Announcement_File_Constraint;
  update_columns: Array<Announcement_File_Update_Column>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};

/** ordering options when selecting data from "announcement_file" */
export type Announcement_File_Order_By = {
  announcement_?: Maybe<Announcement__Order_By>;
  announcement_id?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  file_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "announcement_file" */
export type Announcement_File_Pk_Columns_Input = {
  announcement_id: Scalars['uuid'];
  file_id: Scalars['uuid'];
};

/** select columns of table "announcement_file" */
export enum Announcement_File_Select_Column {
  /** column name */
  AnnouncementId = 'announcement_id',
  /** column name */
  FileId = 'file_id'
}

/** input type for updating data in table "announcement_file" */
export type Announcement_File_Set_Input = {
  announcement_id?: Maybe<Scalars['uuid']>;
  file_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "announcement_file" */
export enum Announcement_File_Update_Column {
  /** column name */
  AnnouncementId = 'announcement_id',
  /** column name */
  FileId = 'file_id'
}


/** columns and relationships of "blacklist" */
export type Blacklist = {
  __typename?: 'blacklist';
  /** An object relationship */
  blockUser: User_;
  blockUserId: Scalars['uuid'];
  createdAt: Scalars['timestamp'];
  /** An object relationship */
  user: User_;
  userId: Scalars['uuid'];
};

/** aggregated selection of "blacklist" */
export type Blacklist_Aggregate = {
  __typename?: 'blacklist_aggregate';
  aggregate?: Maybe<Blacklist_Aggregate_Fields>;
  nodes: Array<Blacklist>;
};

/** aggregate fields of "blacklist" */
export type Blacklist_Aggregate_Fields = {
  __typename?: 'blacklist_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Blacklist_Max_Fields>;
  min?: Maybe<Blacklist_Min_Fields>;
};


/** aggregate fields of "blacklist" */
export type Blacklist_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Blacklist_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blacklist" */
export type Blacklist_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Blacklist_Max_Order_By>;
  min?: Maybe<Blacklist_Min_Order_By>;
};

/** input type for inserting array relation for remote table "blacklist" */
export type Blacklist_Arr_Rel_Insert_Input = {
  data: Array<Blacklist_Insert_Input>;
  on_conflict?: Maybe<Blacklist_On_Conflict>;
};

/** Boolean expression to filter rows from the table "blacklist". All fields are combined with a logical 'AND'. */
export type Blacklist_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Blacklist_Bool_Exp>>>;
  _not?: Maybe<Blacklist_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Blacklist_Bool_Exp>>>;
  blockUser?: Maybe<User__Bool_Exp>;
  blockUserId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  user?: Maybe<User__Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "blacklist" */
export enum Blacklist_Constraint {
  /** unique or primary key constraint */
  BlacklistPkey = 'blacklist_pkey'
}

/** input type for inserting data into table "blacklist" */
export type Blacklist_Insert_Input = {
  blockUser?: Maybe<User__Obj_Rel_Insert_Input>;
  blockUserId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  user?: Maybe<User__Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Blacklist_Max_Fields = {
  __typename?: 'blacklist_max_fields';
  blockUserId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "blacklist" */
export type Blacklist_Max_Order_By = {
  blockUserId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Blacklist_Min_Fields = {
  __typename?: 'blacklist_min_fields';
  blockUserId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "blacklist" */
export type Blacklist_Min_Order_By = {
  blockUserId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "blacklist" */
export type Blacklist_Mutation_Response = {
  __typename?: 'blacklist_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Blacklist>;
};

/** input type for inserting object relation for remote table "blacklist" */
export type Blacklist_Obj_Rel_Insert_Input = {
  data: Blacklist_Insert_Input;
  on_conflict?: Maybe<Blacklist_On_Conflict>;
};

/** on conflict condition type for table "blacklist" */
export type Blacklist_On_Conflict = {
  constraint: Blacklist_Constraint;
  update_columns: Array<Blacklist_Update_Column>;
  where?: Maybe<Blacklist_Bool_Exp>;
};

/** ordering options when selecting data from "blacklist" */
export type Blacklist_Order_By = {
  blockUser?: Maybe<User__Order_By>;
  blockUserId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  user?: Maybe<User__Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "blacklist" */
export type Blacklist_Pk_Columns_Input = {
  blockUserId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "blacklist" */
export enum Blacklist_Select_Column {
  /** column name */
  BlockUserId = 'blockUserId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "blacklist" */
export type Blacklist_Set_Input = {
  blockUserId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "blacklist" */
export enum Blacklist_Update_Column {
  /** column name */
  BlockUserId = 'blockUserId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  UserId = 'userId'
}

/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type Challenge = {
  __typename?: 'challenge';
  /** An array relationship */
  challengeChannels: Array<Challenge_Channel>;
  /** An aggregated array relationship */
  challengeChannels_aggregate: Challenge_Channel_Aggregate;
  /** An object relationship */
  challengeGroup?: Maybe<Challenge_Group>;
  challengeGroupId: Scalars['uuid'];
  /** An object relationship */
  challenge_file?: Maybe<Challenge_File>;
  /** An array relationship */
  challenge_points: Array<Challenge_Points>;
  /** An aggregated array relationship */
  challenge_points_aggregate: Challenge_Points_Aggregate;
  /** An array relationship */
  challenge_series_challenges: Array<Challenge_Series_Challenges>;
  /** An aggregated array relationship */
  challenge_series_challenges_aggregate: Challenge_Series_Challenges_Aggregate;
  createChannel: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  entries: Array<Challenge_Entry>;
  /** An aggregated array relationship */
  entries_aggregate: Challenge_Entry_Aggregate;
  /** An array relationship */
  files: Array<Challenge_File>;
  /** An aggregated array relationship */
  files_aggregate: Challenge_File_Aggregate;
  id: Scalars['uuid'];
  prismaChallengeGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaWinnerId?: Maybe<Scalars['String']>;
  prize?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeChallengeChannelsArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeChallengeChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeChallenge_PointsArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeChallenge_Points_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeChallenge_Series_ChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeChallenge_Series_Challenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeEntriesArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeEntries_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeFilesArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};


/**
 * challenges
 *
 *
 * columns and relationships of "challenge"
 */
export type ChallengeFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};

/** aggregated selection of "challenge" */
export type Challenge_Aggregate = {
  __typename?: 'challenge_aggregate';
  aggregate?: Maybe<Challenge_Aggregate_Fields>;
  nodes: Array<Challenge>;
};

/** aggregate fields of "challenge" */
export type Challenge_Aggregate_Fields = {
  __typename?: 'challenge_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Max_Fields>;
  min?: Maybe<Challenge_Min_Fields>;
};


/** aggregate fields of "challenge" */
export type Challenge_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge" */
export type Challenge_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Max_Order_By>;
  min?: Maybe<Challenge_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge" */
export type Challenge_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Insert_Input>;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge". All fields are combined with a logical 'AND'. */
export type Challenge_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  _not?: Maybe<Challenge_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  challengeChannels?: Maybe<Challenge_Channel_Bool_Exp>;
  challengeGroup?: Maybe<Challenge_Group_Bool_Exp>;
  challengeGroupId?: Maybe<Uuid_Comparison_Exp>;
  challenge_file?: Maybe<Challenge_File_Bool_Exp>;
  challenge_points?: Maybe<Challenge_Points_Bool_Exp>;
  challenge_series_challenges?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
  createChannel?: Maybe<Boolean_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  endAt?: Maybe<Timestamptz_Comparison_Exp>;
  entries?: Maybe<Challenge_Entry_Bool_Exp>;
  files?: Maybe<Challenge_File_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  prismaChallengeGroupId?: Maybe<String_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaWinnerId?: Maybe<String_Comparison_Exp>;
  prize?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "challenge_channel" */
export type Challenge_Channel = {
  __typename?: 'challenge_channel';
  /** An object relationship */
  challenge: Challenge;
  challengeId: Scalars['uuid'];
  /** An object relationship */
  channel: Channel;
  channelId: Scalars['uuid'];
};

/** aggregated selection of "challenge_channel" */
export type Challenge_Channel_Aggregate = {
  __typename?: 'challenge_channel_aggregate';
  aggregate?: Maybe<Challenge_Channel_Aggregate_Fields>;
  nodes: Array<Challenge_Channel>;
};

/** aggregate fields of "challenge_channel" */
export type Challenge_Channel_Aggregate_Fields = {
  __typename?: 'challenge_channel_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Channel_Max_Fields>;
  min?: Maybe<Challenge_Channel_Min_Fields>;
};


/** aggregate fields of "challenge_channel" */
export type Challenge_Channel_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Channel_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_channel" */
export type Challenge_Channel_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Channel_Max_Order_By>;
  min?: Maybe<Challenge_Channel_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_channel" */
export type Challenge_Channel_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Channel_Insert_Input>;
  on_conflict?: Maybe<Challenge_Channel_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_channel". All fields are combined with a logical 'AND'. */
export type Challenge_Channel_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Channel_Bool_Exp>>>;
  _not?: Maybe<Challenge_Channel_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Channel_Bool_Exp>>>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challengeId?: Maybe<Uuid_Comparison_Exp>;
  channel?: Maybe<Channel_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "challenge_channel" */
export enum Challenge_Channel_Constraint {
  /** unique or primary key constraint */
  ChallengeChannelPkey = 'challenge_channel_pkey'
}

/** input type for inserting data into table "challenge_channel" */
export type Challenge_Channel_Insert_Input = {
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challengeId?: Maybe<Scalars['uuid']>;
  channel?: Maybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Challenge_Channel_Max_Fields = {
  __typename?: 'challenge_channel_max_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  channelId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_channel" */
export type Challenge_Channel_Max_Order_By = {
  challengeId?: Maybe<Order_By>;
  channelId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Channel_Min_Fields = {
  __typename?: 'challenge_channel_min_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  channelId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_channel" */
export type Challenge_Channel_Min_Order_By = {
  challengeId?: Maybe<Order_By>;
  channelId?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_channel" */
export type Challenge_Channel_Mutation_Response = {
  __typename?: 'challenge_channel_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Channel>;
};

/** input type for inserting object relation for remote table "challenge_channel" */
export type Challenge_Channel_Obj_Rel_Insert_Input = {
  data: Challenge_Channel_Insert_Input;
  on_conflict?: Maybe<Challenge_Channel_On_Conflict>;
};

/** on conflict condition type for table "challenge_channel" */
export type Challenge_Channel_On_Conflict = {
  constraint: Challenge_Channel_Constraint;
  update_columns: Array<Challenge_Channel_Update_Column>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_channel" */
export type Challenge_Channel_Order_By = {
  challenge?: Maybe<Challenge_Order_By>;
  challengeId?: Maybe<Order_By>;
  channel?: Maybe<Channel_Order_By>;
  channelId?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge_channel" */
export type Challenge_Channel_Pk_Columns_Input = {
  channelId: Scalars['uuid'];
};

/** select columns of table "challenge_channel" */
export enum Challenge_Channel_Select_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  ChannelId = 'channelId'
}

/** input type for updating data in table "challenge_channel" */
export type Challenge_Channel_Set_Input = {
  challengeId?: Maybe<Scalars['uuid']>;
  channelId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "challenge_channel" */
export enum Challenge_Channel_Update_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  ChannelId = 'channelId'
}

/** unique or primary key constraints on table "challenge" */
export enum Challenge_Constraint {
  /** unique or primary key constraint */
  ChallengePkey = 'challenge_pkey',
  /** unique or primary key constraint */
  ChallengePrismaIdKey = 'challenge_prisma_id_key'
}

/**
 * challenge entry
 *
 *
 * columns and relationships of "challenge_entry"
 */
export type Challenge_Entry = {
  __typename?: 'challenge_entry';
  /** An object relationship */
  challenge?: Maybe<Challenge>;
  challengeId: Scalars['uuid'];
  /** An array relationship */
  comments: Array<Challenge_Entry_Comment>;
  /** An aggregated array relationship */
  comments_aggregate: Challenge_Entry_Comment_Aggregate;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  files: Array<Challenge_Entry_File>;
  /** An aggregated array relationship */
  files_aggregate: Challenge_Entry_File_Aggregate;
  id: Scalars['uuid'];
  prismaChallengeId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  /** An array relationship */
  reactions: Array<Challenge_Entry_Reaction>;
  /** An aggregated array relationship */
  reactions_aggregate: Challenge_Entry_Reaction_Aggregate;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};


/**
 * challenge entry
 *
 *
 * columns and relationships of "challenge_entry"
 */
export type Challenge_EntryCommentsArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Comment_Order_By>>;
  where?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
};


/**
 * challenge entry
 *
 *
 * columns and relationships of "challenge_entry"
 */
export type Challenge_EntryComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Comment_Order_By>>;
  where?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
};


/**
 * challenge entry
 *
 *
 * columns and relationships of "challenge_entry"
 */
export type Challenge_EntryFilesArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_File_Order_By>>;
  where?: Maybe<Challenge_Entry_File_Bool_Exp>;
};


/**
 * challenge entry
 *
 *
 * columns and relationships of "challenge_entry"
 */
export type Challenge_EntryFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_File_Order_By>>;
  where?: Maybe<Challenge_Entry_File_Bool_Exp>;
};


/**
 * challenge entry
 *
 *
 * columns and relationships of "challenge_entry"
 */
export type Challenge_EntryReactionsArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Reaction_Order_By>>;
  where?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
};


/**
 * challenge entry
 *
 *
 * columns and relationships of "challenge_entry"
 */
export type Challenge_EntryReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Reaction_Order_By>>;
  where?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
};

/** aggregated selection of "challenge_entry" */
export type Challenge_Entry_Aggregate = {
  __typename?: 'challenge_entry_aggregate';
  aggregate?: Maybe<Challenge_Entry_Aggregate_Fields>;
  nodes: Array<Challenge_Entry>;
};

/** aggregate fields of "challenge_entry" */
export type Challenge_Entry_Aggregate_Fields = {
  __typename?: 'challenge_entry_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Entry_Max_Fields>;
  min?: Maybe<Challenge_Entry_Min_Fields>;
};


/** aggregate fields of "challenge_entry" */
export type Challenge_Entry_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Entry_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_entry" */
export type Challenge_Entry_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Entry_Max_Order_By>;
  min?: Maybe<Challenge_Entry_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_entry" */
export type Challenge_Entry_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Entry_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_entry". All fields are combined with a logical 'AND'. */
export type Challenge_Entry_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Entry_Bool_Exp>>>;
  _not?: Maybe<Challenge_Entry_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Entry_Bool_Exp>>>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challengeId?: Maybe<Uuid_Comparison_Exp>;
  comments?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
  completedAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  files?: Maybe<Challenge_Entry_File_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  prismaChallengeId?: Maybe<String_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  reactions?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/**
 * challenge entry comment
 *
 *
 * columns and relationships of "challenge_entry_comment"
 */
export type Challenge_Entry_Comment = {
  __typename?: 'challenge_entry_comment';
  challengeEntryId: Scalars['uuid'];
  /** An object relationship */
  comment?: Maybe<Comment>;
  commentId: Scalars['uuid'];
  /** An object relationship */
  entry?: Maybe<Challenge_Entry>;
};

/** aggregated selection of "challenge_entry_comment" */
export type Challenge_Entry_Comment_Aggregate = {
  __typename?: 'challenge_entry_comment_aggregate';
  aggregate?: Maybe<Challenge_Entry_Comment_Aggregate_Fields>;
  nodes: Array<Challenge_Entry_Comment>;
};

/** aggregate fields of "challenge_entry_comment" */
export type Challenge_Entry_Comment_Aggregate_Fields = {
  __typename?: 'challenge_entry_comment_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Entry_Comment_Max_Fields>;
  min?: Maybe<Challenge_Entry_Comment_Min_Fields>;
};


/** aggregate fields of "challenge_entry_comment" */
export type Challenge_Entry_Comment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Entry_Comment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Entry_Comment_Max_Order_By>;
  min?: Maybe<Challenge_Entry_Comment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Entry_Comment_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_Comment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_entry_comment". All fields are combined with a logical 'AND'. */
export type Challenge_Entry_Comment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Entry_Comment_Bool_Exp>>>;
  _not?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Entry_Comment_Bool_Exp>>>;
  challengeEntryId?: Maybe<Uuid_Comparison_Exp>;
  comment?: Maybe<Comment_Bool_Exp>;
  commentId?: Maybe<Uuid_Comparison_Exp>;
  entry?: Maybe<Challenge_Entry_Bool_Exp>;
};

/** unique or primary key constraints on table "challenge_entry_comment" */
export enum Challenge_Entry_Comment_Constraint {
  /** unique or primary key constraint */
  ChallengeEntryCommentPkey = 'challenge_entry_comment_pkey'
}

/** input type for inserting data into table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Insert_Input = {
  challengeEntryId?: Maybe<Scalars['uuid']>;
  comment?: Maybe<Comment_Obj_Rel_Insert_Input>;
  commentId?: Maybe<Scalars['uuid']>;
  entry?: Maybe<Challenge_Entry_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Challenge_Entry_Comment_Max_Fields = {
  __typename?: 'challenge_entry_comment_max_fields';
  challengeEntryId?: Maybe<Scalars['uuid']>;
  commentId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Max_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  commentId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Entry_Comment_Min_Fields = {
  __typename?: 'challenge_entry_comment_min_fields';
  challengeEntryId?: Maybe<Scalars['uuid']>;
  commentId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Min_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  commentId?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Mutation_Response = {
  __typename?: 'challenge_entry_comment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Entry_Comment>;
};

/** input type for inserting object relation for remote table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Obj_Rel_Insert_Input = {
  data: Challenge_Entry_Comment_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_Comment_On_Conflict>;
};

/** on conflict condition type for table "challenge_entry_comment" */
export type Challenge_Entry_Comment_On_Conflict = {
  constraint: Challenge_Entry_Comment_Constraint;
  update_columns: Array<Challenge_Entry_Comment_Update_Column>;
  where?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_entry_comment" */
export type Challenge_Entry_Comment_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  comment?: Maybe<Comment_Order_By>;
  commentId?: Maybe<Order_By>;
  entry?: Maybe<Challenge_Entry_Order_By>;
};

/** primary key columns input for table: "challenge_entry_comment" */
export type Challenge_Entry_Comment_Pk_Columns_Input = {
  challengeEntryId: Scalars['uuid'];
  commentId: Scalars['uuid'];
};

/** select columns of table "challenge_entry_comment" */
export enum Challenge_Entry_Comment_Select_Column {
  /** column name */
  ChallengeEntryId = 'challengeEntryId',
  /** column name */
  CommentId = 'commentId'
}

/** input type for updating data in table "challenge_entry_comment" */
export type Challenge_Entry_Comment_Set_Input = {
  challengeEntryId?: Maybe<Scalars['uuid']>;
  commentId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "challenge_entry_comment" */
export enum Challenge_Entry_Comment_Update_Column {
  /** column name */
  ChallengeEntryId = 'challengeEntryId',
  /** column name */
  CommentId = 'commentId'
}

/** unique or primary key constraints on table "challenge_entry" */
export enum Challenge_Entry_Constraint {
  /** unique or primary key constraint */
  ChallengeEntryPkey = 'challenge_entry_pkey',
  /** unique or primary key constraint */
  ChallengeEntryPrismaIdKey = 'challenge_entry_prisma_id_key'
}

/**
 * challenge entry file
 *
 *
 * columns and relationships of "challenge_entry_file"
 */
export type Challenge_Entry_File = {
  __typename?: 'challenge_entry_file';
  challengeEntryId: Scalars['uuid'];
  /** An object relationship */
  entry?: Maybe<Challenge_Entry>;
  /** An object relationship */
  file?: Maybe<File>;
  fileId: Scalars['uuid'];
};

/** aggregated selection of "challenge_entry_file" */
export type Challenge_Entry_File_Aggregate = {
  __typename?: 'challenge_entry_file_aggregate';
  aggregate?: Maybe<Challenge_Entry_File_Aggregate_Fields>;
  nodes: Array<Challenge_Entry_File>;
};

/** aggregate fields of "challenge_entry_file" */
export type Challenge_Entry_File_Aggregate_Fields = {
  __typename?: 'challenge_entry_file_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Entry_File_Max_Fields>;
  min?: Maybe<Challenge_Entry_File_Min_Fields>;
};


/** aggregate fields of "challenge_entry_file" */
export type Challenge_Entry_File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Entry_File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_entry_file" */
export type Challenge_Entry_File_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Entry_File_Max_Order_By>;
  min?: Maybe<Challenge_Entry_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_entry_file" */
export type Challenge_Entry_File_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Entry_File_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_entry_file". All fields are combined with a logical 'AND'. */
export type Challenge_Entry_File_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Entry_File_Bool_Exp>>>;
  _not?: Maybe<Challenge_Entry_File_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Entry_File_Bool_Exp>>>;
  challengeEntryId?: Maybe<Uuid_Comparison_Exp>;
  entry?: Maybe<Challenge_Entry_Bool_Exp>;
  file?: Maybe<File_Bool_Exp>;
  fileId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "challenge_entry_file" */
export enum Challenge_Entry_File_Constraint {
  /** unique or primary key constraint */
  ChallengeEntryFilePkey = 'challenge_entry_file_pkey'
}

/** input type for inserting data into table "challenge_entry_file" */
export type Challenge_Entry_File_Insert_Input = {
  challengeEntryId?: Maybe<Scalars['uuid']>;
  entry?: Maybe<Challenge_Entry_Obj_Rel_Insert_Input>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Challenge_Entry_File_Max_Fields = {
  __typename?: 'challenge_entry_file_max_fields';
  challengeEntryId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_entry_file" */
export type Challenge_Entry_File_Max_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Entry_File_Min_Fields = {
  __typename?: 'challenge_entry_file_min_fields';
  challengeEntryId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_entry_file" */
export type Challenge_Entry_File_Min_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_entry_file" */
export type Challenge_Entry_File_Mutation_Response = {
  __typename?: 'challenge_entry_file_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Entry_File>;
};

/** input type for inserting object relation for remote table "challenge_entry_file" */
export type Challenge_Entry_File_Obj_Rel_Insert_Input = {
  data: Challenge_Entry_File_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_File_On_Conflict>;
};

/** on conflict condition type for table "challenge_entry_file" */
export type Challenge_Entry_File_On_Conflict = {
  constraint: Challenge_Entry_File_Constraint;
  update_columns: Array<Challenge_Entry_File_Update_Column>;
  where?: Maybe<Challenge_Entry_File_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_entry_file" */
export type Challenge_Entry_File_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  entry?: Maybe<Challenge_Entry_Order_By>;
  file?: Maybe<File_Order_By>;
  fileId?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge_entry_file" */
export type Challenge_Entry_File_Pk_Columns_Input = {
  challengeEntryId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};

/** select columns of table "challenge_entry_file" */
export enum Challenge_Entry_File_Select_Column {
  /** column name */
  ChallengeEntryId = 'challengeEntryId',
  /** column name */
  FileId = 'fileId'
}

/** input type for updating data in table "challenge_entry_file" */
export type Challenge_Entry_File_Set_Input = {
  challengeEntryId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "challenge_entry_file" */
export enum Challenge_Entry_File_Update_Column {
  /** column name */
  ChallengeEntryId = 'challengeEntryId',
  /** column name */
  FileId = 'fileId'
}

/** input type for inserting data into table "challenge_entry" */
export type Challenge_Entry_Insert_Input = {
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challengeId?: Maybe<Scalars['uuid']>;
  comments?: Maybe<Challenge_Entry_Comment_Arr_Rel_Insert_Input>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  files?: Maybe<Challenge_Entry_File_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  reactions?: Maybe<Challenge_Entry_Reaction_Arr_Rel_Insert_Input>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Challenge_Entry_Max_Fields = {
  __typename?: 'challenge_entry_max_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_entry" */
export type Challenge_Entry_Max_Order_By = {
  challengeId?: Maybe<Order_By>;
  completedAt?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaChallengeId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Entry_Min_Fields = {
  __typename?: 'challenge_entry_min_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_entry" */
export type Challenge_Entry_Min_Order_By = {
  challengeId?: Maybe<Order_By>;
  completedAt?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaChallengeId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_entry" */
export type Challenge_Entry_Mutation_Response = {
  __typename?: 'challenge_entry_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Entry>;
};

/** input type for inserting object relation for remote table "challenge_entry" */
export type Challenge_Entry_Obj_Rel_Insert_Input = {
  data: Challenge_Entry_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_On_Conflict>;
};

/** on conflict condition type for table "challenge_entry" */
export type Challenge_Entry_On_Conflict = {
  constraint: Challenge_Entry_Constraint;
  update_columns: Array<Challenge_Entry_Update_Column>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_entry" */
export type Challenge_Entry_Order_By = {
  challenge?: Maybe<Challenge_Order_By>;
  challengeId?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Challenge_Entry_Comment_Aggregate_Order_By>;
  completedAt?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  files_aggregate?: Maybe<Challenge_Entry_File_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  prismaChallengeId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  reactions_aggregate?: Maybe<Challenge_Entry_Reaction_Aggregate_Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "challenge_entry" */
export type Challenge_Entry_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/**
 * challenge entry reaction
 *
 *
 * columns and relationships of "challenge_entry_reaction"
 */
export type Challenge_Entry_Reaction = {
  __typename?: 'challenge_entry_reaction';
  challengeEntryId: Scalars['uuid'];
  /** An object relationship */
  entry?: Maybe<Challenge_Entry>;
  /** An object relationship */
  reaction?: Maybe<Reaction>;
  reactionId: Scalars['uuid'];
};

/** aggregated selection of "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Aggregate = {
  __typename?: 'challenge_entry_reaction_aggregate';
  aggregate?: Maybe<Challenge_Entry_Reaction_Aggregate_Fields>;
  nodes: Array<Challenge_Entry_Reaction>;
};

/** aggregate fields of "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Aggregate_Fields = {
  __typename?: 'challenge_entry_reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Entry_Reaction_Max_Fields>;
  min?: Maybe<Challenge_Entry_Reaction_Min_Fields>;
};


/** aggregate fields of "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Entry_Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Entry_Reaction_Max_Order_By>;
  min?: Maybe<Challenge_Entry_Reaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Entry_Reaction_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_Reaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_entry_reaction". All fields are combined with a logical 'AND'. */
export type Challenge_Entry_Reaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Entry_Reaction_Bool_Exp>>>;
  _not?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Entry_Reaction_Bool_Exp>>>;
  challengeEntryId?: Maybe<Uuid_Comparison_Exp>;
  entry?: Maybe<Challenge_Entry_Bool_Exp>;
  reaction?: Maybe<Reaction_Bool_Exp>;
  reactionId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "challenge_entry_reaction" */
export enum Challenge_Entry_Reaction_Constraint {
  /** unique or primary key constraint */
  ChallengeEntryReactionPkey = 'challenge_entry_reaction_pkey'
}

/** input type for inserting data into table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Insert_Input = {
  challengeEntryId?: Maybe<Scalars['uuid']>;
  entry?: Maybe<Challenge_Entry_Obj_Rel_Insert_Input>;
  reaction?: Maybe<Reaction_Obj_Rel_Insert_Input>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Challenge_Entry_Reaction_Max_Fields = {
  __typename?: 'challenge_entry_reaction_max_fields';
  challengeEntryId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Max_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Entry_Reaction_Min_Fields = {
  __typename?: 'challenge_entry_reaction_min_fields';
  challengeEntryId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Min_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Mutation_Response = {
  __typename?: 'challenge_entry_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Entry_Reaction>;
};

/** input type for inserting object relation for remote table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Obj_Rel_Insert_Input = {
  data: Challenge_Entry_Reaction_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_Reaction_On_Conflict>;
};

/** on conflict condition type for table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_On_Conflict = {
  constraint: Challenge_Entry_Reaction_Constraint;
  update_columns: Array<Challenge_Entry_Reaction_Update_Column>;
  where?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Order_By = {
  challengeEntryId?: Maybe<Order_By>;
  entry?: Maybe<Challenge_Entry_Order_By>;
  reaction?: Maybe<Reaction_Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Pk_Columns_Input = {
  challengeEntryId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};

/** select columns of table "challenge_entry_reaction" */
export enum Challenge_Entry_Reaction_Select_Column {
  /** column name */
  ChallengeEntryId = 'challengeEntryId',
  /** column name */
  ReactionId = 'reactionId'
}

/** input type for updating data in table "challenge_entry_reaction" */
export type Challenge_Entry_Reaction_Set_Input = {
  challengeEntryId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "challenge_entry_reaction" */
export enum Challenge_Entry_Reaction_Update_Column {
  /** column name */
  ChallengeEntryId = 'challengeEntryId',
  /** column name */
  ReactionId = 'reactionId'
}

/** select columns of table "challenge_entry" */
export enum Challenge_Entry_Select_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaChallengeId = 'prismaChallengeId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "challenge_entry" */
export type Challenge_Entry_Set_Input = {
  challengeId?: Maybe<Scalars['uuid']>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "challenge_entry" */
export enum Challenge_Entry_Update_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaChallengeId = 'prismaChallengeId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/**
 * file for challenge
 *
 *
 * columns and relationships of "challenge_file"
 */
export type Challenge_File = {
  __typename?: 'challenge_file';
  /** An object relationship */
  challenge: Challenge;
  challengeId: Scalars['uuid'];
  /** An object relationship */
  file: File;
  fileId: Scalars['uuid'];
};

/** aggregated selection of "challenge_file" */
export type Challenge_File_Aggregate = {
  __typename?: 'challenge_file_aggregate';
  aggregate?: Maybe<Challenge_File_Aggregate_Fields>;
  nodes: Array<Challenge_File>;
};

/** aggregate fields of "challenge_file" */
export type Challenge_File_Aggregate_Fields = {
  __typename?: 'challenge_file_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_File_Max_Fields>;
  min?: Maybe<Challenge_File_Min_Fields>;
};


/** aggregate fields of "challenge_file" */
export type Challenge_File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_file" */
export type Challenge_File_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_File_Max_Order_By>;
  min?: Maybe<Challenge_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_file" */
export type Challenge_File_Arr_Rel_Insert_Input = {
  data: Array<Challenge_File_Insert_Input>;
  on_conflict?: Maybe<Challenge_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_file". All fields are combined with a logical 'AND'. */
export type Challenge_File_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_File_Bool_Exp>>>;
  _not?: Maybe<Challenge_File_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_File_Bool_Exp>>>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challengeId?: Maybe<Uuid_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  fileId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "challenge_file" */
export enum Challenge_File_Constraint {
  /** unique or primary key constraint */
  ChallengeFileChallengeIdKey = 'challenge_file_challenge_id_key',
  /** unique or primary key constraint */
  ChallengeFilePkey = 'challenge_file_pkey'
}

/** input type for inserting data into table "challenge_file" */
export type Challenge_File_Insert_Input = {
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challengeId?: Maybe<Scalars['uuid']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Challenge_File_Max_Fields = {
  __typename?: 'challenge_file_max_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_file" */
export type Challenge_File_Max_Order_By = {
  challengeId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_File_Min_Fields = {
  __typename?: 'challenge_file_min_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_file" */
export type Challenge_File_Min_Order_By = {
  challengeId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_file" */
export type Challenge_File_Mutation_Response = {
  __typename?: 'challenge_file_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_File>;
};

/** input type for inserting object relation for remote table "challenge_file" */
export type Challenge_File_Obj_Rel_Insert_Input = {
  data: Challenge_File_Insert_Input;
  on_conflict?: Maybe<Challenge_File_On_Conflict>;
};

/** on conflict condition type for table "challenge_file" */
export type Challenge_File_On_Conflict = {
  constraint: Challenge_File_Constraint;
  update_columns: Array<Challenge_File_Update_Column>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_file" */
export type Challenge_File_Order_By = {
  challenge?: Maybe<Challenge_Order_By>;
  challengeId?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  fileId?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge_file" */
export type Challenge_File_Pk_Columns_Input = {
  challengeId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};

/** select columns of table "challenge_file" */
export enum Challenge_File_Select_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  FileId = 'fileId'
}

/** input type for updating data in table "challenge_file" */
export type Challenge_File_Set_Input = {
  challengeId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "challenge_file" */
export enum Challenge_File_Update_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  FileId = 'fileId'
}

/**
 * challenge group metadata on group
 *
 *
 * columns and relationships of "challenge_group"
 */
export type Challenge_Group = {
  __typename?: 'challenge_group';
  /** An array relationship */
  challenge_series: Array<Challenge_Series>;
  /** An aggregated array relationship */
  challenge_series_aggregate: Challenge_Series_Aggregate;
  /** An array relationship */
  challenges: Array<Challenge>;
  /** An aggregated array relationship */
  challenges_aggregate: Challenge_Aggregate;
  createdAt: Scalars['timestamptz'];
  groupId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  group_?: Maybe<Group_>;
  id: Scalars['uuid'];
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/**
 * challenge group metadata on group
 *
 *
 * columns and relationships of "challenge_group"
 */
export type Challenge_GroupChallenge_SeriesArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Order_By>>;
  where?: Maybe<Challenge_Series_Bool_Exp>;
};


/**
 * challenge group metadata on group
 *
 *
 * columns and relationships of "challenge_group"
 */
export type Challenge_GroupChallenge_Series_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Order_By>>;
  where?: Maybe<Challenge_Series_Bool_Exp>;
};


/**
 * challenge group metadata on group
 *
 *
 * columns and relationships of "challenge_group"
 */
export type Challenge_GroupChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


/**
 * challenge group metadata on group
 *
 *
 * columns and relationships of "challenge_group"
 */
export type Challenge_GroupChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};

/** aggregated selection of "challenge_group" */
export type Challenge_Group_Aggregate = {
  __typename?: 'challenge_group_aggregate';
  aggregate?: Maybe<Challenge_Group_Aggregate_Fields>;
  nodes: Array<Challenge_Group>;
};

/** aggregate fields of "challenge_group" */
export type Challenge_Group_Aggregate_Fields = {
  __typename?: 'challenge_group_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Group_Max_Fields>;
  min?: Maybe<Challenge_Group_Min_Fields>;
};


/** aggregate fields of "challenge_group" */
export type Challenge_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_group" */
export type Challenge_Group_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Group_Max_Order_By>;
  min?: Maybe<Challenge_Group_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_group" */
export type Challenge_Group_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Group_Insert_Input>;
  on_conflict?: Maybe<Challenge_Group_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_group". All fields are combined with a logical 'AND'. */
export type Challenge_Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Group_Bool_Exp>>>;
  _not?: Maybe<Challenge_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Group_Bool_Exp>>>;
  challenge_series?: Maybe<Challenge_Series_Bool_Exp>;
  challenges?: Maybe<Challenge_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  group_?: Maybe<Group__Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  prismaGroupId?: Maybe<String_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "challenge_group" */
export enum Challenge_Group_Constraint {
  /** unique or primary key constraint */
  ChallengeGroupGroupIdKey = 'challenge_group_group_id_key',
  /** unique or primary key constraint */
  ChallengeGroupPkey = 'challenge_group_pkey',
  /** unique or primary key constraint */
  ChallengeGroupPrismaGroupIdKey = 'challenge_group_prisma_group_id_key',
  /** unique or primary key constraint */
  ChallengeGroupPrismaIdKey = 'challenge_group_prisma_id_key'
}

/** input type for inserting data into table "challenge_group" */
export type Challenge_Group_Insert_Input = {
  challenge_series?: Maybe<Challenge_Series_Arr_Rel_Insert_Input>;
  challenges?: Maybe<Challenge_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  group_?: Maybe<Group__Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Challenge_Group_Max_Fields = {
  __typename?: 'challenge_group_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "challenge_group" */
export type Challenge_Group_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Group_Min_Fields = {
  __typename?: 'challenge_group_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "challenge_group" */
export type Challenge_Group_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_group" */
export type Challenge_Group_Mutation_Response = {
  __typename?: 'challenge_group_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Group>;
};

/** input type for inserting object relation for remote table "challenge_group" */
export type Challenge_Group_Obj_Rel_Insert_Input = {
  data: Challenge_Group_Insert_Input;
  on_conflict?: Maybe<Challenge_Group_On_Conflict>;
};

/** on conflict condition type for table "challenge_group" */
export type Challenge_Group_On_Conflict = {
  constraint: Challenge_Group_Constraint;
  update_columns: Array<Challenge_Group_Update_Column>;
  where?: Maybe<Challenge_Group_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_group" */
export type Challenge_Group_Order_By = {
  challenge_series_aggregate?: Maybe<Challenge_Series_Aggregate_Order_By>;
  challenges_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  group_?: Maybe<Group__Order_By>;
  id?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge_group" */
export type Challenge_Group_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "challenge_group" */
export enum Challenge_Group_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaGroupId = 'prismaGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "challenge_group" */
export type Challenge_Group_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "challenge_group" */
export enum Challenge_Group_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaGroupId = 'prismaGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for inserting data into table "challenge" */
export type Challenge_Insert_Input = {
  challengeChannels?: Maybe<Challenge_Channel_Arr_Rel_Insert_Input>;
  challengeGroup?: Maybe<Challenge_Group_Obj_Rel_Insert_Input>;
  challengeGroupId?: Maybe<Scalars['uuid']>;
  challenge_file?: Maybe<Challenge_File_Obj_Rel_Insert_Input>;
  challenge_points?: Maybe<Challenge_Points_Arr_Rel_Insert_Input>;
  challenge_series_challenges?: Maybe<Challenge_Series_Challenges_Arr_Rel_Insert_Input>;
  createChannel?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  entries?: Maybe<Challenge_Entry_Arr_Rel_Insert_Input>;
  files?: Maybe<Challenge_File_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaWinnerId?: Maybe<Scalars['String']>;
  prize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Challenge_Max_Fields = {
  __typename?: 'challenge_max_fields';
  challengeGroupId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaWinnerId?: Maybe<Scalars['String']>;
  prize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "challenge" */
export type Challenge_Max_Order_By = {
  challengeGroupId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaChallengeGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaWinnerId?: Maybe<Order_By>;
  prize?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Min_Fields = {
  __typename?: 'challenge_min_fields';
  challengeGroupId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaWinnerId?: Maybe<Scalars['String']>;
  prize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "challenge" */
export type Challenge_Min_Order_By = {
  challengeGroupId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaChallengeGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaWinnerId?: Maybe<Order_By>;
  prize?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge" */
export type Challenge_Mutation_Response = {
  __typename?: 'challenge_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge>;
};

/** input type for inserting object relation for remote table "challenge" */
export type Challenge_Obj_Rel_Insert_Input = {
  data: Challenge_Insert_Input;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};

/** on conflict condition type for table "challenge" */
export type Challenge_On_Conflict = {
  constraint: Challenge_Constraint;
  update_columns: Array<Challenge_Update_Column>;
  where?: Maybe<Challenge_Bool_Exp>;
};

/** ordering options when selecting data from "challenge" */
export type Challenge_Order_By = {
  challengeChannels_aggregate?: Maybe<Challenge_Channel_Aggregate_Order_By>;
  challengeGroup?: Maybe<Challenge_Group_Order_By>;
  challengeGroupId?: Maybe<Order_By>;
  challenge_file?: Maybe<Challenge_File_Order_By>;
  challenge_points_aggregate?: Maybe<Challenge_Points_Aggregate_Order_By>;
  challenge_series_challenges_aggregate?: Maybe<Challenge_Series_Challenges_Aggregate_Order_By>;
  createChannel?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  entries_aggregate?: Maybe<Challenge_Entry_Aggregate_Order_By>;
  files_aggregate?: Maybe<Challenge_File_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  prismaChallengeGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaWinnerId?: Maybe<Order_By>;
  prize?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge" */
export type Challenge_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "challenge_points" */
export type Challenge_Points = {
  __typename?: 'challenge_points';
  /** An object relationship */
  challenge: Challenge;
  challenge_id: Scalars['uuid'];
  id: Scalars['uuid'];
  total_points: Scalars['Int'];
  /** An object relationship */
  user_: User_;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "challenge_points" */
export type Challenge_Points_Aggregate = {
  __typename?: 'challenge_points_aggregate';
  aggregate?: Maybe<Challenge_Points_Aggregate_Fields>;
  nodes: Array<Challenge_Points>;
};

/** aggregate fields of "challenge_points" */
export type Challenge_Points_Aggregate_Fields = {
  __typename?: 'challenge_points_aggregate_fields';
  avg?: Maybe<Challenge_Points_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Points_Max_Fields>;
  min?: Maybe<Challenge_Points_Min_Fields>;
  stddev?: Maybe<Challenge_Points_Stddev_Fields>;
  stddev_pop?: Maybe<Challenge_Points_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Challenge_Points_Stddev_Samp_Fields>;
  sum?: Maybe<Challenge_Points_Sum_Fields>;
  var_pop?: Maybe<Challenge_Points_Var_Pop_Fields>;
  var_samp?: Maybe<Challenge_Points_Var_Samp_Fields>;
  variance?: Maybe<Challenge_Points_Variance_Fields>;
};


/** aggregate fields of "challenge_points" */
export type Challenge_Points_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Points_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_points" */
export type Challenge_Points_Aggregate_Order_By = {
  avg?: Maybe<Challenge_Points_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Points_Max_Order_By>;
  min?: Maybe<Challenge_Points_Min_Order_By>;
  stddev?: Maybe<Challenge_Points_Stddev_Order_By>;
  stddev_pop?: Maybe<Challenge_Points_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Challenge_Points_Stddev_Samp_Order_By>;
  sum?: Maybe<Challenge_Points_Sum_Order_By>;
  var_pop?: Maybe<Challenge_Points_Var_Pop_Order_By>;
  var_samp?: Maybe<Challenge_Points_Var_Samp_Order_By>;
  variance?: Maybe<Challenge_Points_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_points" */
export type Challenge_Points_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Points_Insert_Input>;
  on_conflict?: Maybe<Challenge_Points_On_Conflict>;
};

/** aggregate avg on columns */
export type Challenge_Points_Avg_Fields = {
  __typename?: 'challenge_points_avg_fields';
  total_points?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "challenge_points" */
export type Challenge_Points_Avg_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "challenge_points". All fields are combined with a logical 'AND'. */
export type Challenge_Points_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Points_Bool_Exp>>>;
  _not?: Maybe<Challenge_Points_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Points_Bool_Exp>>>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challenge_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  total_points?: Maybe<Int_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "challenge_points" */
export enum Challenge_Points_Constraint {
  /** unique or primary key constraint */
  ChallengePointsPkey = 'challenge_points_pkey',
  /** unique or primary key constraint */
  ChallengePointsUserIdChallengeIdKey = 'challenge_points_user_id_challenge_id_key'
}

/** input type for incrementing integer column in table "challenge_points" */
export type Challenge_Points_Inc_Input = {
  total_points?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "challenge_points" */
export type Challenge_Points_Insert_Input = {
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challenge_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  total_points?: Maybe<Scalars['Int']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Challenge_Points_Max_Fields = {
  __typename?: 'challenge_points_max_fields';
  challenge_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  total_points?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_points" */
export type Challenge_Points_Max_Order_By = {
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_points?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Points_Min_Fields = {
  __typename?: 'challenge_points_min_fields';
  challenge_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  total_points?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_points" */
export type Challenge_Points_Min_Order_By = {
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_points?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_points" */
export type Challenge_Points_Mutation_Response = {
  __typename?: 'challenge_points_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Points>;
};

/** input type for inserting object relation for remote table "challenge_points" */
export type Challenge_Points_Obj_Rel_Insert_Input = {
  data: Challenge_Points_Insert_Input;
  on_conflict?: Maybe<Challenge_Points_On_Conflict>;
};

/** on conflict condition type for table "challenge_points" */
export type Challenge_Points_On_Conflict = {
  constraint: Challenge_Points_Constraint;
  update_columns: Array<Challenge_Points_Update_Column>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_points" */
export type Challenge_Points_Order_By = {
  challenge?: Maybe<Challenge_Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_points?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge_points" */
export type Challenge_Points_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "challenge_points" */
export enum Challenge_Points_Select_Column {
  /** column name */
  ChallengeId = 'challenge_id',
  /** column name */
  Id = 'id',
  /** column name */
  TotalPoints = 'total_points',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "challenge_points" */
export type Challenge_Points_Set_Input = {
  challenge_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  total_points?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Challenge_Points_Stddev_Fields = {
  __typename?: 'challenge_points_stddev_fields';
  total_points?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "challenge_points" */
export type Challenge_Points_Stddev_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Challenge_Points_Stddev_Pop_Fields = {
  __typename?: 'challenge_points_stddev_pop_fields';
  total_points?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "challenge_points" */
export type Challenge_Points_Stddev_Pop_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Challenge_Points_Stddev_Samp_Fields = {
  __typename?: 'challenge_points_stddev_samp_fields';
  total_points?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "challenge_points" */
export type Challenge_Points_Stddev_Samp_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Challenge_Points_Sum_Fields = {
  __typename?: 'challenge_points_sum_fields';
  total_points?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "challenge_points" */
export type Challenge_Points_Sum_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** update columns of table "challenge_points" */
export enum Challenge_Points_Update_Column {
  /** column name */
  ChallengeId = 'challenge_id',
  /** column name */
  Id = 'id',
  /** column name */
  TotalPoints = 'total_points',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Challenge_Points_Var_Pop_Fields = {
  __typename?: 'challenge_points_var_pop_fields';
  total_points?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "challenge_points" */
export type Challenge_Points_Var_Pop_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Challenge_Points_Var_Samp_Fields = {
  __typename?: 'challenge_points_var_samp_fields';
  total_points?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "challenge_points" */
export type Challenge_Points_Var_Samp_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Challenge_Points_Variance_Fields = {
  __typename?: 'challenge_points_variance_fields';
  total_points?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "challenge_points" */
export type Challenge_Points_Variance_Order_By = {
  total_points?: Maybe<Order_By>;
};

/** select columns of table "challenge" */
export enum Challenge_Select_Column {
  /** column name */
  ChallengeGroupId = 'challengeGroupId',
  /** column name */
  CreateChannel = 'createChannel',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaChallengeGroupId = 'prismaChallengeGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaWinnerId = 'prismaWinnerId',
  /** column name */
  Prize = 'prize',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/**
 * It relates a group to a series of challenges. Compared to challenge_group, a series has a many-to-one relationship with challenge. There's a create challenge series screen in the group settings (prev: global feed).
 *
 *
 * columns and relationships of "challenge_series"
 */
export type Challenge_Series = {
  __typename?: 'challenge_series';
  challengeGroupId: Scalars['uuid'];
  /** An object relationship */
  challenge_group: Challenge_Group;
  /** An array relationship */
  challenges: Array<Challenge_Series_Challenges>;
  /** An aggregated array relationship */
  challenges_aggregate: Challenge_Series_Challenges_Aggregate;
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  prismaId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/**
 * It relates a group to a series of challenges. Compared to challenge_group, a series has a many-to-one relationship with challenge. There's a create challenge series screen in the group settings (prev: global feed).
 *
 *
 * columns and relationships of "challenge_series"
 */
export type Challenge_SeriesChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};


/**
 * It relates a group to a series of challenges. Compared to challenge_group, a series has a many-to-one relationship with challenge. There's a create challenge series screen in the group settings (prev: global feed).
 *
 *
 * columns and relationships of "challenge_series"
 */
export type Challenge_SeriesChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};

/** aggregated selection of "challenge_series" */
export type Challenge_Series_Aggregate = {
  __typename?: 'challenge_series_aggregate';
  aggregate?: Maybe<Challenge_Series_Aggregate_Fields>;
  nodes: Array<Challenge_Series>;
};

/** aggregate fields of "challenge_series" */
export type Challenge_Series_Aggregate_Fields = {
  __typename?: 'challenge_series_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Series_Max_Fields>;
  min?: Maybe<Challenge_Series_Min_Fields>;
};


/** aggregate fields of "challenge_series" */
export type Challenge_Series_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Series_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_series" */
export type Challenge_Series_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Series_Max_Order_By>;
  min?: Maybe<Challenge_Series_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_series" */
export type Challenge_Series_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Series_Insert_Input>;
  on_conflict?: Maybe<Challenge_Series_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_series". All fields are combined with a logical 'AND'. */
export type Challenge_Series_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Series_Bool_Exp>>>;
  _not?: Maybe<Challenge_Series_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Series_Bool_Exp>>>;
  challengeGroupId?: Maybe<Uuid_Comparison_Exp>;
  challenge_group?: Maybe<Challenge_Group_Bool_Exp>;
  challenges?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/**
 * challenges in series
 *
 *
 * columns and relationships of "challenge_series_challenges"
 */
export type Challenge_Series_Challenges = {
  __typename?: 'challenge_series_challenges';
  /** An object relationship */
  challenge: Challenge;
  challengeId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
  /** An object relationship */
  challenge_series: Challenge_Series;
};

/** aggregated selection of "challenge_series_challenges" */
export type Challenge_Series_Challenges_Aggregate = {
  __typename?: 'challenge_series_challenges_aggregate';
  aggregate?: Maybe<Challenge_Series_Challenges_Aggregate_Fields>;
  nodes: Array<Challenge_Series_Challenges>;
};

/** aggregate fields of "challenge_series_challenges" */
export type Challenge_Series_Challenges_Aggregate_Fields = {
  __typename?: 'challenge_series_challenges_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Series_Challenges_Max_Fields>;
  min?: Maybe<Challenge_Series_Challenges_Min_Fields>;
};


/** aggregate fields of "challenge_series_challenges" */
export type Challenge_Series_Challenges_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Series_Challenges_Max_Order_By>;
  min?: Maybe<Challenge_Series_Challenges_Min_Order_By>;
};

/** input type for inserting array relation for remote table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Series_Challenges_Insert_Input>;
  on_conflict?: Maybe<Challenge_Series_Challenges_On_Conflict>;
};

/** Boolean expression to filter rows from the table "challenge_series_challenges". All fields are combined with a logical 'AND'. */
export type Challenge_Series_Challenges_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Series_Challenges_Bool_Exp>>>;
  _not?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Series_Challenges_Bool_Exp>>>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challengeId?: Maybe<Uuid_Comparison_Exp>;
  challengeSeriesId?: Maybe<Uuid_Comparison_Exp>;
  challenge_series?: Maybe<Challenge_Series_Bool_Exp>;
};

/** unique or primary key constraints on table "challenge_series_challenges" */
export enum Challenge_Series_Challenges_Constraint {
  /** unique or primary key constraint */
  ChallengeSeriesChallengesPkey = 'challenge_series_challenges_pkey'
}

/** input type for inserting data into table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Insert_Input = {
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challengeId?: Maybe<Scalars['uuid']>;
  challengeSeriesId?: Maybe<Scalars['uuid']>;
  challenge_series?: Maybe<Challenge_Series_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Challenge_Series_Challenges_Max_Fields = {
  __typename?: 'challenge_series_challenges_max_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  challengeSeriesId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Max_Order_By = {
  challengeId?: Maybe<Order_By>;
  challengeSeriesId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Series_Challenges_Min_Fields = {
  __typename?: 'challenge_series_challenges_min_fields';
  challengeId?: Maybe<Scalars['uuid']>;
  challengeSeriesId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Min_Order_By = {
  challengeId?: Maybe<Order_By>;
  challengeSeriesId?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Mutation_Response = {
  __typename?: 'challenge_series_challenges_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Series_Challenges>;
};

/** input type for inserting object relation for remote table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Obj_Rel_Insert_Input = {
  data: Challenge_Series_Challenges_Insert_Input;
  on_conflict?: Maybe<Challenge_Series_Challenges_On_Conflict>;
};

/** on conflict condition type for table "challenge_series_challenges" */
export type Challenge_Series_Challenges_On_Conflict = {
  constraint: Challenge_Series_Challenges_Constraint;
  update_columns: Array<Challenge_Series_Challenges_Update_Column>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_series_challenges" */
export type Challenge_Series_Challenges_Order_By = {
  challenge?: Maybe<Challenge_Order_By>;
  challengeId?: Maybe<Order_By>;
  challengeSeriesId?: Maybe<Order_By>;
  challenge_series?: Maybe<Challenge_Series_Order_By>;
};

/** primary key columns input for table: "challenge_series_challenges" */
export type Challenge_Series_Challenges_Pk_Columns_Input = {
  challengeId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
};

/** select columns of table "challenge_series_challenges" */
export enum Challenge_Series_Challenges_Select_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  ChallengeSeriesId = 'challengeSeriesId'
}

/** input type for updating data in table "challenge_series_challenges" */
export type Challenge_Series_Challenges_Set_Input = {
  challengeId?: Maybe<Scalars['uuid']>;
  challengeSeriesId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "challenge_series_challenges" */
export enum Challenge_Series_Challenges_Update_Column {
  /** column name */
  ChallengeId = 'challengeId',
  /** column name */
  ChallengeSeriesId = 'challengeSeriesId'
}

/** unique or primary key constraints on table "challenge_series" */
export enum Challenge_Series_Constraint {
  /** unique or primary key constraint */
  ChallengeSeriesPkey = 'challenge_series_pkey',
  /** unique or primary key constraint */
  ChallengeSeriesPrismaIdKey = 'challenge_series_prisma_id_key'
}

/** input type for inserting data into table "challenge_series" */
export type Challenge_Series_Insert_Input = {
  challengeGroupId?: Maybe<Scalars['uuid']>;
  challenge_group?: Maybe<Challenge_Group_Obj_Rel_Insert_Input>;
  challenges?: Maybe<Challenge_Series_Challenges_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Challenge_Series_Max_Fields = {
  __typename?: 'challenge_series_max_fields';
  challengeGroupId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "challenge_series" */
export type Challenge_Series_Max_Order_By = {
  challengeGroupId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Challenge_Series_Min_Fields = {
  __typename?: 'challenge_series_min_fields';
  challengeGroupId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "challenge_series" */
export type Challenge_Series_Min_Order_By = {
  challengeGroupId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "challenge_series" */
export type Challenge_Series_Mutation_Response = {
  __typename?: 'challenge_series_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Challenge_Series>;
};

/** input type for inserting object relation for remote table "challenge_series" */
export type Challenge_Series_Obj_Rel_Insert_Input = {
  data: Challenge_Series_Insert_Input;
  on_conflict?: Maybe<Challenge_Series_On_Conflict>;
};

/** on conflict condition type for table "challenge_series" */
export type Challenge_Series_On_Conflict = {
  constraint: Challenge_Series_Constraint;
  update_columns: Array<Challenge_Series_Update_Column>;
  where?: Maybe<Challenge_Series_Bool_Exp>;
};

/** ordering options when selecting data from "challenge_series" */
export type Challenge_Series_Order_By = {
  challengeGroupId?: Maybe<Order_By>;
  challenge_group?: Maybe<Challenge_Group_Order_By>;
  challenges_aggregate?: Maybe<Challenge_Series_Challenges_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "challenge_series" */
export type Challenge_Series_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "challenge_series" */
export enum Challenge_Series_Select_Column {
  /** column name */
  ChallengeGroupId = 'challengeGroupId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "challenge_series" */
export type Challenge_Series_Set_Input = {
  challengeGroupId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "challenge_series" */
export enum Challenge_Series_Update_Column {
  /** column name */
  ChallengeGroupId = 'challengeGroupId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "challenge" */
export type Challenge_Set_Input = {
  challengeGroupId?: Maybe<Scalars['uuid']>;
  createChannel?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaChallengeGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaWinnerId?: Maybe<Scalars['String']>;
  prize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "challenge" */
export enum Challenge_Update_Column {
  /** column name */
  ChallengeGroupId = 'challengeGroupId',
  /** column name */
  CreateChannel = 'createChannel',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaChallengeGroupId = 'prismaChallengeGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaWinnerId = 'prismaWinnerId',
  /** column name */
  Prize = 'prize',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type Channel = {
  __typename?: 'channel';
  /** An array relationship */
  challenge_channels: Array<Challenge_Channel>;
  /** An aggregated array relationship */
  challenge_channels_aggregate: Challenge_Channel_Aggregate;
  /** An object relationship */
  channelFile?: Maybe<Channel_File>;
  /** An object relationship */
  channel_type: Channel_Type;
  createdAt: Scalars['timestamptz'];
  default: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  events: Array<Event_>;
  /** An aggregated array relationship */
  events_aggregate: Event__Aggregate;
  /** An array relationship */
  files: Array<Channel_File>;
  /** An aggregated array relationship */
  files_aggregate: Channel_File_Aggregate;
  groupId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  group_?: Maybe<Group_>;
  id: Scalars['uuid'];
  lastHighlightTimestamp?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "channel_last_post_at" */
  lastPostAt?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "channel_total_member_count" */
  memberCount?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  members: Array<Channel_Member>;
  /** An aggregated array relationship */
  members_aggregate: Channel_Member_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  owner?: Maybe<User_>;
  ownerId?: Maybe<Scalars['uuid']>;
  /** A computed field, executes function "channel_total_post_count" */
  postCount?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  posts: Array<Channel_Post>;
  /** An aggregated array relationship */
  posts_aggregate: Channel_Post_Aggregate;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaOwnerId?: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  totalPosts?: Maybe<Scalars['Int']>;
  type: Channel_Type_Enum;
  uniqDmId?: Maybe<Scalars['String']>;
  uniqHasuraDmId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelChallenge_ChannelsArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelChallenge_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelEventsArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelFilesArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelMembersArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelPostsArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/**
 * chatrooms
 *
 *
 * columns and relationships of "channel"
 */
export type ChannelPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};

/** aggregated selection of "channel" */
export type Channel_Aggregate = {
  __typename?: 'channel_aggregate';
  aggregate?: Maybe<Channel_Aggregate_Fields>;
  nodes: Array<Channel>;
};

/** aggregate fields of "channel" */
export type Channel_Aggregate_Fields = {
  __typename?: 'channel_aggregate_fields';
  avg?: Maybe<Channel_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Max_Fields>;
  min?: Maybe<Channel_Min_Fields>;
  stddev?: Maybe<Channel_Stddev_Fields>;
  stddev_pop?: Maybe<Channel_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Channel_Stddev_Samp_Fields>;
  sum?: Maybe<Channel_Sum_Fields>;
  var_pop?: Maybe<Channel_Var_Pop_Fields>;
  var_samp?: Maybe<Channel_Var_Samp_Fields>;
  variance?: Maybe<Channel_Variance_Fields>;
};


/** aggregate fields of "channel" */
export type Channel_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel" */
export type Channel_Aggregate_Order_By = {
  avg?: Maybe<Channel_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Max_Order_By>;
  min?: Maybe<Channel_Min_Order_By>;
  stddev?: Maybe<Channel_Stddev_Order_By>;
  stddev_pop?: Maybe<Channel_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Channel_Stddev_Samp_Order_By>;
  sum?: Maybe<Channel_Sum_Order_By>;
  var_pop?: Maybe<Channel_Var_Pop_Order_By>;
  var_samp?: Maybe<Channel_Var_Samp_Order_By>;
  variance?: Maybe<Channel_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "channel" */
export type Channel_Arr_Rel_Insert_Input = {
  data: Array<Channel_Insert_Input>;
  on_conflict?: Maybe<Channel_On_Conflict>;
};

/** aggregate avg on columns */
export type Channel_Avg_Fields = {
  __typename?: 'channel_avg_fields';
  totalPosts?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "channel" */
export type Channel_Avg_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "channel". All fields are combined with a logical 'AND'. */
export type Channel_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Bool_Exp>>>;
  _not?: Maybe<Channel_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Bool_Exp>>>;
  challenge_channels?: Maybe<Challenge_Channel_Bool_Exp>;
  channelFile?: Maybe<Channel_File_Bool_Exp>;
  channel_type?: Maybe<Channel_Type_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  default?: Maybe<Boolean_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  events?: Maybe<Event__Bool_Exp>;
  files?: Maybe<Channel_File_Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  group_?: Maybe<Group__Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastHighlightTimestamp?: Maybe<Timestamptz_Comparison_Exp>;
  members?: Maybe<Channel_Member_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<User__Bool_Exp>;
  ownerId?: Maybe<Uuid_Comparison_Exp>;
  posts?: Maybe<Channel_Post_Bool_Exp>;
  prismaGroupId?: Maybe<String_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaOwnerId?: Maybe<String_Comparison_Exp>;
  private?: Maybe<Boolean_Comparison_Exp>;
  totalPosts?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<Channel_Type_Enum_Comparison_Exp>;
  uniqDmId?: Maybe<String_Comparison_Exp>;
  uniqHasuraDmId?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel" */
export enum Channel_Constraint {
  /** unique or primary key constraint */
  ChannelPkey = 'channel_pkey',
  /** unique or primary key constraint */
  ChannelPrismaIdKey = 'channel_prisma_id_key',
  /** unique or primary key constraint */
  ChannelUniqDmIdKey = 'channel_uniq_dm_id_key',
  /** unique or primary key constraint */
  ChannelUniqHasuraDmIdKey = 'channel_uniq_hasura_dm_id_key'
}

/**
 * file for channel
 *
 *
 * columns and relationships of "channel_file"
 */
export type Channel_File = {
  __typename?: 'channel_file';
  /** An object relationship */
  channel?: Maybe<Channel>;
  channelId: Scalars['uuid'];
  /** An object relationship */
  file?: Maybe<File>;
  fileId: Scalars['uuid'];
};

/** aggregated selection of "channel_file" */
export type Channel_File_Aggregate = {
  __typename?: 'channel_file_aggregate';
  aggregate?: Maybe<Channel_File_Aggregate_Fields>;
  nodes: Array<Channel_File>;
};

/** aggregate fields of "channel_file" */
export type Channel_File_Aggregate_Fields = {
  __typename?: 'channel_file_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_File_Max_Fields>;
  min?: Maybe<Channel_File_Min_Fields>;
};


/** aggregate fields of "channel_file" */
export type Channel_File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_file" */
export type Channel_File_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_File_Max_Order_By>;
  min?: Maybe<Channel_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_file" */
export type Channel_File_Arr_Rel_Insert_Input = {
  data: Array<Channel_File_Insert_Input>;
  on_conflict?: Maybe<Channel_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_file". All fields are combined with a logical 'AND'. */
export type Channel_File_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_File_Bool_Exp>>>;
  _not?: Maybe<Channel_File_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_File_Bool_Exp>>>;
  channel?: Maybe<Channel_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  fileId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_file" */
export enum Channel_File_Constraint {
  /** unique or primary key constraint */
  ChannelFileChannelIdKey = 'channel_file_channel_id_key',
  /** unique or primary key constraint */
  ChannelFilePkey = 'channel_file_pkey'
}

/** input type for inserting data into table "channel_file" */
export type Channel_File_Insert_Input = {
  channel?: Maybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: Maybe<Scalars['uuid']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Channel_File_Max_Fields = {
  __typename?: 'channel_file_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "channel_file" */
export type Channel_File_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_File_Min_Fields = {
  __typename?: 'channel_file_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "channel_file" */
export type Channel_File_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_file" */
export type Channel_File_Mutation_Response = {
  __typename?: 'channel_file_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_File>;
};

/** input type for inserting object relation for remote table "channel_file" */
export type Channel_File_Obj_Rel_Insert_Input = {
  data: Channel_File_Insert_Input;
  on_conflict?: Maybe<Channel_File_On_Conflict>;
};

/** on conflict condition type for table "channel_file" */
export type Channel_File_On_Conflict = {
  constraint: Channel_File_Constraint;
  update_columns: Array<Channel_File_Update_Column>;
  where?: Maybe<Channel_File_Bool_Exp>;
};

/** ordering options when selecting data from "channel_file" */
export type Channel_File_Order_By = {
  channel?: Maybe<Channel_Order_By>;
  channelId?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  fileId?: Maybe<Order_By>;
};

/** primary key columns input for table: "channel_file" */
export type Channel_File_Pk_Columns_Input = {
  channelId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};

/** select columns of table "channel_file" */
export enum Channel_File_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  FileId = 'fileId'
}

/** input type for updating data in table "channel_file" */
export type Channel_File_Set_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "channel_file" */
export enum Channel_File_Update_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  FileId = 'fileId'
}

/** input type for incrementing integer column in table "channel" */
export type Channel_Inc_Input = {
  totalPosts?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "channel" */
export type Channel_Insert_Input = {
  challenge_channels?: Maybe<Challenge_Channel_Arr_Rel_Insert_Input>;
  channelFile?: Maybe<Channel_File_Obj_Rel_Insert_Input>;
  channel_type?: Maybe<Channel_Type_Obj_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  events?: Maybe<Event__Arr_Rel_Insert_Input>;
  files?: Maybe<Channel_File_Arr_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  group_?: Maybe<Group__Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  lastHighlightTimestamp?: Maybe<Scalars['timestamptz']>;
  members?: Maybe<Channel_Member_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User__Obj_Rel_Insert_Input>;
  ownerId?: Maybe<Scalars['uuid']>;
  posts?: Maybe<Channel_Post_Arr_Rel_Insert_Input>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaOwnerId?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  totalPosts?: Maybe<Scalars['Int']>;
  type?: Maybe<Channel_Type_Enum>;
  uniqDmId?: Maybe<Scalars['String']>;
  uniqHasuraDmId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Channel_Max_Fields = {
  __typename?: 'channel_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastHighlightTimestamp?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['uuid']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaOwnerId?: Maybe<Scalars['String']>;
  totalPosts?: Maybe<Scalars['Int']>;
  uniqDmId?: Maybe<Scalars['String']>;
  uniqHasuraDmId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "channel" */
export type Channel_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastHighlightTimestamp?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ownerId?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaOwnerId?: Maybe<Order_By>;
  totalPosts?: Maybe<Order_By>;
  uniqDmId?: Maybe<Order_By>;
  uniqHasuraDmId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/**
 * Additional metadata tacked onto the user as a member of the channel.
 *
 *
 * columns and relationships of "channel_member"
 */
export type Channel_Member = {
  __typename?: 'channel_member';
  /** An object relationship */
  channel?: Maybe<Channel>;
  channelId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  lastNotifiedAt?: Maybe<Scalars['timestamptz']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  lastViewedAt?: Maybe<Scalars['timestamptz']>;
  notificationControl?: Maybe<Scalars['jsonb']>;
  /** A computed field, executes function "channel_member_total_post_count" */
  postCount?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  posts: Array<Channel_Post>;
  /** An aggregated array relationship */
  posts_aggregate: Channel_Post_Aggregate;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};


/**
 * Additional metadata tacked onto the user as a member of the channel.
 *
 *
 * columns and relationships of "channel_member"
 */
export type Channel_MemberNotificationControlArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * Additional metadata tacked onto the user as a member of the channel.
 *
 *
 * columns and relationships of "channel_member"
 */
export type Channel_MemberPostsArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/**
 * Additional metadata tacked onto the user as a member of the channel.
 *
 *
 * columns and relationships of "channel_member"
 */
export type Channel_MemberPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};

/** aggregated selection of "channel_member" */
export type Channel_Member_Aggregate = {
  __typename?: 'channel_member_aggregate';
  aggregate?: Maybe<Channel_Member_Aggregate_Fields>;
  nodes: Array<Channel_Member>;
};

/** aggregate fields of "channel_member" */
export type Channel_Member_Aggregate_Fields = {
  __typename?: 'channel_member_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Member_Max_Fields>;
  min?: Maybe<Channel_Member_Min_Fields>;
};


/** aggregate fields of "channel_member" */
export type Channel_Member_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Member_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_member" */
export type Channel_Member_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Member_Max_Order_By>;
  min?: Maybe<Channel_Member_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Channel_Member_Append_Input = {
  notificationControl?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "channel_member" */
export type Channel_Member_Arr_Rel_Insert_Input = {
  data: Array<Channel_Member_Insert_Input>;
  on_conflict?: Maybe<Channel_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_member". All fields are combined with a logical 'AND'. */
export type Channel_Member_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Member_Bool_Exp>>>;
  _not?: Maybe<Channel_Member_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Member_Bool_Exp>>>;
  channel?: Maybe<Channel_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastNotifiedAt?: Maybe<Timestamptz_Comparison_Exp>;
  lastTypedAt?: Maybe<Timestamptz_Comparison_Exp>;
  lastViewedAt?: Maybe<Timestamptz_Comparison_Exp>;
  notificationControl?: Maybe<Jsonb_Comparison_Exp>;
  posts?: Maybe<Channel_Post_Bool_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/** unique or primary key constraints on table "channel_member" */
export enum Channel_Member_Constraint {
  /** unique or primary key constraint */
  ChannelMemberChannelIdPrismaUserIdKey = 'channel_member_channel_id_prisma_user_id_key',
  /** unique or primary key constraint */
  ChannelMemberChannelIdUserIdKey = 'channel_member_channel_id_user_id_key',
  /** unique or primary key constraint */
  ChannelMemberPkey = 'channel_member_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Channel_Member_Delete_At_Path_Input = {
  notificationControl?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Channel_Member_Delete_Elem_Input = {
  notificationControl?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Channel_Member_Delete_Key_Input = {
  notificationControl?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "channel_member" */
export type Channel_Member_Insert_Input = {
  channel?: Maybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastNotifiedAt?: Maybe<Scalars['timestamptz']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  lastViewedAt?: Maybe<Scalars['timestamptz']>;
  notificationControl?: Maybe<Scalars['jsonb']>;
  posts?: Maybe<Channel_Post_Arr_Rel_Insert_Input>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Channel_Member_Max_Fields = {
  __typename?: 'channel_member_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastNotifiedAt?: Maybe<Scalars['timestamptz']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  lastViewedAt?: Maybe<Scalars['timestamptz']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "channel_member" */
export type Channel_Member_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastNotifiedAt?: Maybe<Order_By>;
  lastTypedAt?: Maybe<Order_By>;
  lastViewedAt?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Member_Min_Fields = {
  __typename?: 'channel_member_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastNotifiedAt?: Maybe<Scalars['timestamptz']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  lastViewedAt?: Maybe<Scalars['timestamptz']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "channel_member" */
export type Channel_Member_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastNotifiedAt?: Maybe<Order_By>;
  lastTypedAt?: Maybe<Order_By>;
  lastViewedAt?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_member" */
export type Channel_Member_Mutation_Response = {
  __typename?: 'channel_member_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_Member>;
};

/** input type for inserting object relation for remote table "channel_member" */
export type Channel_Member_Obj_Rel_Insert_Input = {
  data: Channel_Member_Insert_Input;
  on_conflict?: Maybe<Channel_Member_On_Conflict>;
};

/** on conflict condition type for table "channel_member" */
export type Channel_Member_On_Conflict = {
  constraint: Channel_Member_Constraint;
  update_columns: Array<Channel_Member_Update_Column>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};

/** ordering options when selecting data from "channel_member" */
export type Channel_Member_Order_By = {
  channel?: Maybe<Channel_Order_By>;
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastNotifiedAt?: Maybe<Order_By>;
  lastTypedAt?: Maybe<Order_By>;
  lastViewedAt?: Maybe<Order_By>;
  notificationControl?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Channel_Post_Aggregate_Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "channel_member" */
export type Channel_Member_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Channel_Member_Prepend_Input = {
  notificationControl?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "channel_member" */
export enum Channel_Member_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  LastNotifiedAt = 'lastNotifiedAt',
  /** column name */
  LastTypedAt = 'lastTypedAt',
  /** column name */
  LastViewedAt = 'lastViewedAt',
  /** column name */
  NotificationControl = 'notificationControl',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "channel_member" */
export type Channel_Member_Set_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastNotifiedAt?: Maybe<Scalars['timestamptz']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  lastViewedAt?: Maybe<Scalars['timestamptz']>;
  notificationControl?: Maybe<Scalars['jsonb']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "channel_member_typing" */
export type Channel_Member_Typing = {
  __typename?: 'channel_member_typing';
  channelId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<User_>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "channel_member_typing" */
export type Channel_Member_Typing_Aggregate = {
  __typename?: 'channel_member_typing_aggregate';
  aggregate?: Maybe<Channel_Member_Typing_Aggregate_Fields>;
  nodes: Array<Channel_Member_Typing>;
};

/** aggregate fields of "channel_member_typing" */
export type Channel_Member_Typing_Aggregate_Fields = {
  __typename?: 'channel_member_typing_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Member_Typing_Max_Fields>;
  min?: Maybe<Channel_Member_Typing_Min_Fields>;
};


/** aggregate fields of "channel_member_typing" */
export type Channel_Member_Typing_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Member_Typing_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_member_typing" */
export type Channel_Member_Typing_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Member_Typing_Max_Order_By>;
  min?: Maybe<Channel_Member_Typing_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_member_typing" */
export type Channel_Member_Typing_Arr_Rel_Insert_Input = {
  data: Array<Channel_Member_Typing_Insert_Input>;
};

/** Boolean expression to filter rows from the table "channel_member_typing". All fields are combined with a logical 'AND'. */
export type Channel_Member_Typing_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Member_Typing_Bool_Exp>>>;
  _not?: Maybe<Channel_Member_Typing_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Member_Typing_Bool_Exp>>>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastTypedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User__Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "channel_member_typing" */
export type Channel_Member_Typing_Insert_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User__Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Channel_Member_Typing_Max_Fields = {
  __typename?: 'channel_member_typing_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "channel_member_typing" */
export type Channel_Member_Typing_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastTypedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Member_Typing_Min_Fields = {
  __typename?: 'channel_member_typing_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "channel_member_typing" */
export type Channel_Member_Typing_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastTypedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_member_typing" */
export type Channel_Member_Typing_Mutation_Response = {
  __typename?: 'channel_member_typing_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_Member_Typing>;
};

/** input type for inserting object relation for remote table "channel_member_typing" */
export type Channel_Member_Typing_Obj_Rel_Insert_Input = {
  data: Channel_Member_Typing_Insert_Input;
};

/** ordering options when selecting data from "channel_member_typing" */
export type Channel_Member_Typing_Order_By = {
  channelId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastTypedAt?: Maybe<Order_By>;
  user?: Maybe<User__Order_By>;
  userId?: Maybe<Order_By>;
};

/** select columns of table "channel_member_typing" */
export enum Channel_Member_Typing_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  Id = 'id',
  /** column name */
  LastTypedAt = 'lastTypedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "channel_member_typing" */
export type Channel_Member_Typing_Set_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastTypedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "channel_member" */
export enum Channel_Member_Update_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  LastNotifiedAt = 'lastNotifiedAt',
  /** column name */
  LastTypedAt = 'lastTypedAt',
  /** column name */
  LastViewedAt = 'lastViewedAt',
  /** column name */
  NotificationControl = 'notificationControl',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate min on columns */
export type Channel_Min_Fields = {
  __typename?: 'channel_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastHighlightTimestamp?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['uuid']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaOwnerId?: Maybe<Scalars['String']>;
  totalPosts?: Maybe<Scalars['Int']>;
  uniqDmId?: Maybe<Scalars['String']>;
  uniqHasuraDmId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "channel" */
export type Channel_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastHighlightTimestamp?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ownerId?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaOwnerId?: Maybe<Order_By>;
  totalPosts?: Maybe<Order_By>;
  uniqDmId?: Maybe<Order_By>;
  uniqHasuraDmId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel" */
export type Channel_Mutation_Response = {
  __typename?: 'channel_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel>;
};

/** input type for inserting object relation for remote table "channel" */
export type Channel_Obj_Rel_Insert_Input = {
  data: Channel_Insert_Input;
  on_conflict?: Maybe<Channel_On_Conflict>;
};

/** on conflict condition type for table "channel" */
export type Channel_On_Conflict = {
  constraint: Channel_Constraint;
  update_columns: Array<Channel_Update_Column>;
  where?: Maybe<Channel_Bool_Exp>;
};

/** ordering options when selecting data from "channel" */
export type Channel_Order_By = {
  challenge_channels_aggregate?: Maybe<Challenge_Channel_Aggregate_Order_By>;
  channelFile?: Maybe<Channel_File_Order_By>;
  channel_type?: Maybe<Channel_Type_Order_By>;
  createdAt?: Maybe<Order_By>;
  default?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  events_aggregate?: Maybe<Event__Aggregate_Order_By>;
  files_aggregate?: Maybe<Channel_File_Aggregate_Order_By>;
  groupId?: Maybe<Order_By>;
  group_?: Maybe<Group__Order_By>;
  id?: Maybe<Order_By>;
  lastHighlightTimestamp?: Maybe<Order_By>;
  members_aggregate?: Maybe<Channel_Member_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<User__Order_By>;
  ownerId?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Channel_Post_Aggregate_Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaOwnerId?: Maybe<Order_By>;
  private?: Maybe<Order_By>;
  totalPosts?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uniqDmId?: Maybe<Order_By>;
  uniqHasuraDmId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "channel" */
export type Channel_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/**
 * The messages in channels.
 *
 *
 * columns and relationships of "channel_post"
 */
export type Channel_Post = {
  __typename?: 'channel_post';
  /** An object relationship */
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  channel_post_type: Channel_Post_Type;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  editedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  event?: Maybe<Event_>;
  eventId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  files: Array<Channel_Post_File>;
  /** An aggregated array relationship */
  files_aggregate: Channel_Post_File_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  member?: Maybe<Channel_Member>;
  memberId: Scalars['uuid'];
  mentionUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  /** An object relationship */
  parentPost?: Maybe<Channel_Post>;
  /** The direct parent of this post. */
  parentPostId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  poll?: Maybe<Poll>;
  pollId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  /** An array relationship */
  reactions: Array<Channel_Post_Reaction>;
  /** An aggregated array relationship */
  reactions_aggregate: Channel_Post_Reaction_Aggregate;
  /** An object relationship */
  rootPost?: Maybe<Channel_Post>;
  /** For replies and threads; only connect back to the post table */
  rootPostId?: Maybe<Scalars['uuid']>;
  type: Channel_Post_Type_Enum;
  updatedAt: Scalars['timestamptz'];
};


/**
 * The messages in channels.
 *
 *
 * columns and relationships of "channel_post"
 */
export type Channel_PostFilesArgs = {
  distinct_on?: Maybe<Array<Channel_Post_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_File_Order_By>>;
  where?: Maybe<Channel_Post_File_Bool_Exp>;
};


/**
 * The messages in channels.
 *
 *
 * columns and relationships of "channel_post"
 */
export type Channel_PostFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_File_Order_By>>;
  where?: Maybe<Channel_Post_File_Bool_Exp>;
};


/**
 * The messages in channels.
 *
 *
 * columns and relationships of "channel_post"
 */
export type Channel_PostReactionsArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Reaction_Order_By>>;
  where?: Maybe<Channel_Post_Reaction_Bool_Exp>;
};


/**
 * The messages in channels.
 *
 *
 * columns and relationships of "channel_post"
 */
export type Channel_PostReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Reaction_Order_By>>;
  where?: Maybe<Channel_Post_Reaction_Bool_Exp>;
};

/** aggregated selection of "channel_post" */
export type Channel_Post_Aggregate = {
  __typename?: 'channel_post_aggregate';
  aggregate?: Maybe<Channel_Post_Aggregate_Fields>;
  nodes: Array<Channel_Post>;
};

/** aggregate fields of "channel_post" */
export type Channel_Post_Aggregate_Fields = {
  __typename?: 'channel_post_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Post_Max_Fields>;
  min?: Maybe<Channel_Post_Min_Fields>;
};


/** aggregate fields of "channel_post" */
export type Channel_Post_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Post_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_post" */
export type Channel_Post_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Post_Max_Order_By>;
  min?: Maybe<Channel_Post_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_post" */
export type Channel_Post_Arr_Rel_Insert_Input = {
  data: Array<Channel_Post_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_post". All fields are combined with a logical 'AND'. */
export type Channel_Post_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Post_Bool_Exp>>>;
  _not?: Maybe<Channel_Post_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Post_Bool_Exp>>>;
  channel?: Maybe<Channel_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  channel_post_type?: Maybe<Channel_Post_Type_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  editedAt?: Maybe<Timestamptz_Comparison_Exp>;
  event?: Maybe<Event__Bool_Exp>;
  eventId?: Maybe<Uuid_Comparison_Exp>;
  files?: Maybe<Channel_Post_File_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  member?: Maybe<Channel_Member_Bool_Exp>;
  memberId?: Maybe<Uuid_Comparison_Exp>;
  mentionUserId?: Maybe<String_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  parentPost?: Maybe<Channel_Post_Bool_Exp>;
  parentPostId?: Maybe<Uuid_Comparison_Exp>;
  poll?: Maybe<Poll_Bool_Exp>;
  pollId?: Maybe<Uuid_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  reactions?: Maybe<Channel_Post_Reaction_Bool_Exp>;
  rootPost?: Maybe<Channel_Post_Bool_Exp>;
  rootPostId?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<Channel_Post_Type_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_post" */
export enum Channel_Post_Constraint {
  /** unique or primary key constraint */
  ChannelPostPkey = 'channel_post_pkey',
  /** unique or primary key constraint */
  ChannelPostPrismaIdKey = 'channel_post_prisma_id_key'
}

/**
 * channel images or videos
 *
 *
 * columns and relationships of "channel_post_file"
 */
export type Channel_Post_File = {
  __typename?: 'channel_post_file';
  channelPostId: Scalars['uuid'];
  /** An object relationship */
  file?: Maybe<File>;
  fileId: Scalars['uuid'];
  /** An object relationship */
  post?: Maybe<Channel_Post>;
};

/** aggregated selection of "channel_post_file" */
export type Channel_Post_File_Aggregate = {
  __typename?: 'channel_post_file_aggregate';
  aggregate?: Maybe<Channel_Post_File_Aggregate_Fields>;
  nodes: Array<Channel_Post_File>;
};

/** aggregate fields of "channel_post_file" */
export type Channel_Post_File_Aggregate_Fields = {
  __typename?: 'channel_post_file_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Post_File_Max_Fields>;
  min?: Maybe<Channel_Post_File_Min_Fields>;
};


/** aggregate fields of "channel_post_file" */
export type Channel_Post_File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Post_File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_post_file" */
export type Channel_Post_File_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Post_File_Max_Order_By>;
  min?: Maybe<Channel_Post_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_post_file" */
export type Channel_Post_File_Arr_Rel_Insert_Input = {
  data: Array<Channel_Post_File_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_post_file". All fields are combined with a logical 'AND'. */
export type Channel_Post_File_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Post_File_Bool_Exp>>>;
  _not?: Maybe<Channel_Post_File_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Post_File_Bool_Exp>>>;
  channelPostId?: Maybe<Uuid_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  fileId?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Channel_Post_Bool_Exp>;
};

/** unique or primary key constraints on table "channel_post_file" */
export enum Channel_Post_File_Constraint {
  /** unique or primary key constraint */
  ChannelPostFilePkey = 'channel_post_file_pkey'
}

/** input type for inserting data into table "channel_post_file" */
export type Channel_Post_File_Insert_Input = {
  channelPostId?: Maybe<Scalars['uuid']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  fileId?: Maybe<Scalars['uuid']>;
  post?: Maybe<Channel_Post_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Channel_Post_File_Max_Fields = {
  __typename?: 'channel_post_file_max_fields';
  channelPostId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "channel_post_file" */
export type Channel_Post_File_Max_Order_By = {
  channelPostId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Post_File_Min_Fields = {
  __typename?: 'channel_post_file_min_fields';
  channelPostId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "channel_post_file" */
export type Channel_Post_File_Min_Order_By = {
  channelPostId?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_post_file" */
export type Channel_Post_File_Mutation_Response = {
  __typename?: 'channel_post_file_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_Post_File>;
};

/** input type for inserting object relation for remote table "channel_post_file" */
export type Channel_Post_File_Obj_Rel_Insert_Input = {
  data: Channel_Post_File_Insert_Input;
  on_conflict?: Maybe<Channel_Post_File_On_Conflict>;
};

/** on conflict condition type for table "channel_post_file" */
export type Channel_Post_File_On_Conflict = {
  constraint: Channel_Post_File_Constraint;
  update_columns: Array<Channel_Post_File_Update_Column>;
  where?: Maybe<Channel_Post_File_Bool_Exp>;
};

/** ordering options when selecting data from "channel_post_file" */
export type Channel_Post_File_Order_By = {
  channelPostId?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  fileId?: Maybe<Order_By>;
  post?: Maybe<Channel_Post_Order_By>;
};

/** primary key columns input for table: "channel_post_file" */
export type Channel_Post_File_Pk_Columns_Input = {
  channelPostId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};

/** select columns of table "channel_post_file" */
export enum Channel_Post_File_Select_Column {
  /** column name */
  ChannelPostId = 'channelPostId',
  /** column name */
  FileId = 'fileId'
}

/** input type for updating data in table "channel_post_file" */
export type Channel_Post_File_Set_Input = {
  channelPostId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "channel_post_file" */
export enum Channel_Post_File_Update_Column {
  /** column name */
  ChannelPostId = 'channelPostId',
  /** column name */
  FileId = 'fileId'
}

/** input type for inserting data into table "channel_post" */
export type Channel_Post_Insert_Input = {
  channel?: Maybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: Maybe<Scalars['uuid']>;
  channel_post_type?: Maybe<Channel_Post_Type_Obj_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  editedAt?: Maybe<Scalars['timestamptz']>;
  event?: Maybe<Event__Obj_Rel_Insert_Input>;
  eventId?: Maybe<Scalars['uuid']>;
  files?: Maybe<Channel_Post_File_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  member?: Maybe<Channel_Member_Obj_Rel_Insert_Input>;
  memberId?: Maybe<Scalars['uuid']>;
  mentionUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  parentPost?: Maybe<Channel_Post_Obj_Rel_Insert_Input>;
  parentPostId?: Maybe<Scalars['uuid']>;
  poll?: Maybe<Poll_Obj_Rel_Insert_Input>;
  pollId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  reactions?: Maybe<Channel_Post_Reaction_Arr_Rel_Insert_Input>;
  rootPost?: Maybe<Channel_Post_Obj_Rel_Insert_Input>;
  rootPostId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Channel_Post_Type_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Channel_Post_Max_Fields = {
  __typename?: 'channel_post_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  editedAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  memberId?: Maybe<Scalars['uuid']>;
  mentionUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  parentPostId?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  rootPostId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "channel_post" */
export type Channel_Post_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  editedAt?: Maybe<Order_By>;
  eventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  memberId?: Maybe<Order_By>;
  mentionUserId?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  parentPostId?: Maybe<Order_By>;
  pollId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  rootPostId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Post_Min_Fields = {
  __typename?: 'channel_post_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  editedAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  memberId?: Maybe<Scalars['uuid']>;
  mentionUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  parentPostId?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  rootPostId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "channel_post" */
export type Channel_Post_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  editedAt?: Maybe<Order_By>;
  eventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  memberId?: Maybe<Order_By>;
  mentionUserId?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  parentPostId?: Maybe<Order_By>;
  pollId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  rootPostId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_post" */
export type Channel_Post_Mutation_Response = {
  __typename?: 'channel_post_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_Post>;
};

/** input type for inserting object relation for remote table "channel_post" */
export type Channel_Post_Obj_Rel_Insert_Input = {
  data: Channel_Post_Insert_Input;
  on_conflict?: Maybe<Channel_Post_On_Conflict>;
};

/** on conflict condition type for table "channel_post" */
export type Channel_Post_On_Conflict = {
  constraint: Channel_Post_Constraint;
  update_columns: Array<Channel_Post_Update_Column>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};

/** ordering options when selecting data from "channel_post" */
export type Channel_Post_Order_By = {
  channel?: Maybe<Channel_Order_By>;
  channelId?: Maybe<Order_By>;
  channel_post_type?: Maybe<Channel_Post_Type_Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  editedAt?: Maybe<Order_By>;
  event?: Maybe<Event__Order_By>;
  eventId?: Maybe<Order_By>;
  files_aggregate?: Maybe<Channel_Post_File_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  member?: Maybe<Channel_Member_Order_By>;
  memberId?: Maybe<Order_By>;
  mentionUserId?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  parentPost?: Maybe<Channel_Post_Order_By>;
  parentPostId?: Maybe<Order_By>;
  poll?: Maybe<Poll_Order_By>;
  pollId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  reactions_aggregate?: Maybe<Channel_Post_Reaction_Aggregate_Order_By>;
  rootPost?: Maybe<Channel_Post_Order_By>;
  rootPostId?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "channel_post" */
export type Channel_Post_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/**
 * channel post reactions
 *
 *
 * columns and relationships of "channel_post_reaction"
 */
export type Channel_Post_Reaction = {
  __typename?: 'channel_post_reaction';
  channelPostId: Scalars['uuid'];
  /** An object relationship */
  post?: Maybe<Channel_Post>;
  /** An object relationship */
  reaction?: Maybe<Reaction>;
  reactionId: Scalars['uuid'];
};

/** aggregated selection of "channel_post_reaction" */
export type Channel_Post_Reaction_Aggregate = {
  __typename?: 'channel_post_reaction_aggregate';
  aggregate?: Maybe<Channel_Post_Reaction_Aggregate_Fields>;
  nodes: Array<Channel_Post_Reaction>;
};

/** aggregate fields of "channel_post_reaction" */
export type Channel_Post_Reaction_Aggregate_Fields = {
  __typename?: 'channel_post_reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Post_Reaction_Max_Fields>;
  min?: Maybe<Channel_Post_Reaction_Min_Fields>;
};


/** aggregate fields of "channel_post_reaction" */
export type Channel_Post_Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Post_Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_post_reaction" */
export type Channel_Post_Reaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Post_Reaction_Max_Order_By>;
  min?: Maybe<Channel_Post_Reaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_post_reaction" */
export type Channel_Post_Reaction_Arr_Rel_Insert_Input = {
  data: Array<Channel_Post_Reaction_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_Reaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_post_reaction". All fields are combined with a logical 'AND'. */
export type Channel_Post_Reaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Post_Reaction_Bool_Exp>>>;
  _not?: Maybe<Channel_Post_Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Post_Reaction_Bool_Exp>>>;
  channelPostId?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Channel_Post_Bool_Exp>;
  reaction?: Maybe<Reaction_Bool_Exp>;
  reactionId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_post_reaction" */
export enum Channel_Post_Reaction_Constraint {
  /** unique or primary key constraint */
  ChannelPostReactionPkey = 'channel_post_reaction_pkey'
}

/** input type for inserting data into table "channel_post_reaction" */
export type Channel_Post_Reaction_Insert_Input = {
  channelPostId?: Maybe<Scalars['uuid']>;
  post?: Maybe<Channel_Post_Obj_Rel_Insert_Input>;
  reaction?: Maybe<Reaction_Obj_Rel_Insert_Input>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Channel_Post_Reaction_Max_Fields = {
  __typename?: 'channel_post_reaction_max_fields';
  channelPostId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "channel_post_reaction" */
export type Channel_Post_Reaction_Max_Order_By = {
  channelPostId?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Post_Reaction_Min_Fields = {
  __typename?: 'channel_post_reaction_min_fields';
  channelPostId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "channel_post_reaction" */
export type Channel_Post_Reaction_Min_Order_By = {
  channelPostId?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_post_reaction" */
export type Channel_Post_Reaction_Mutation_Response = {
  __typename?: 'channel_post_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_Post_Reaction>;
};

/** input type for inserting object relation for remote table "channel_post_reaction" */
export type Channel_Post_Reaction_Obj_Rel_Insert_Input = {
  data: Channel_Post_Reaction_Insert_Input;
  on_conflict?: Maybe<Channel_Post_Reaction_On_Conflict>;
};

/** on conflict condition type for table "channel_post_reaction" */
export type Channel_Post_Reaction_On_Conflict = {
  constraint: Channel_Post_Reaction_Constraint;
  update_columns: Array<Channel_Post_Reaction_Update_Column>;
  where?: Maybe<Channel_Post_Reaction_Bool_Exp>;
};

/** ordering options when selecting data from "channel_post_reaction" */
export type Channel_Post_Reaction_Order_By = {
  channelPostId?: Maybe<Order_By>;
  post?: Maybe<Channel_Post_Order_By>;
  reaction?: Maybe<Reaction_Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** primary key columns input for table: "channel_post_reaction" */
export type Channel_Post_Reaction_Pk_Columns_Input = {
  channelPostId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};

/** select columns of table "channel_post_reaction" */
export enum Channel_Post_Reaction_Select_Column {
  /** column name */
  ChannelPostId = 'channelPostId',
  /** column name */
  ReactionId = 'reactionId'
}

/** input type for updating data in table "channel_post_reaction" */
export type Channel_Post_Reaction_Set_Input = {
  channelPostId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "channel_post_reaction" */
export enum Channel_Post_Reaction_Update_Column {
  /** column name */
  ChannelPostId = 'channelPostId',
  /** column name */
  ReactionId = 'reactionId'
}

/** select columns of table "channel_post" */
export enum Channel_Post_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  EditedAt = 'editedAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  MentionUserId = 'mentionUserId',
  /** column name */
  Message = 'message',
  /** column name */
  ParentPostId = 'parentPostId',
  /** column name */
  PollId = 'pollId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  RootPostId = 'rootPostId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "channel_post" */
export type Channel_Post_Set_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  editedAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  memberId?: Maybe<Scalars['uuid']>;
  mentionUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  parentPostId?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  rootPostId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Channel_Post_Type_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/**
 * channel post types
 *
 *
 * columns and relationships of "channel_post_type"
 */
export type Channel_Post_Type = {
  __typename?: 'channel_post_type';
  /** An array relationship */
  channelPosts: Array<Channel_Post>;
  /** An aggregated array relationship */
  channelPosts_aggregate: Channel_Post_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


/**
 * channel post types
 *
 *
 * columns and relationships of "channel_post_type"
 */
export type Channel_Post_TypeChannelPostsArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/**
 * channel post types
 *
 *
 * columns and relationships of "channel_post_type"
 */
export type Channel_Post_TypeChannelPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};

/** aggregated selection of "channel_post_type" */
export type Channel_Post_Type_Aggregate = {
  __typename?: 'channel_post_type_aggregate';
  aggregate?: Maybe<Channel_Post_Type_Aggregate_Fields>;
  nodes: Array<Channel_Post_Type>;
};

/** aggregate fields of "channel_post_type" */
export type Channel_Post_Type_Aggregate_Fields = {
  __typename?: 'channel_post_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Post_Type_Max_Fields>;
  min?: Maybe<Channel_Post_Type_Min_Fields>;
};


/** aggregate fields of "channel_post_type" */
export type Channel_Post_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Post_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_post_type" */
export type Channel_Post_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Post_Type_Max_Order_By>;
  min?: Maybe<Channel_Post_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_post_type" */
export type Channel_Post_Type_Arr_Rel_Insert_Input = {
  data: Array<Channel_Post_Type_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_post_type". All fields are combined with a logical 'AND'. */
export type Channel_Post_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Post_Type_Bool_Exp>>>;
  _not?: Maybe<Channel_Post_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Post_Type_Bool_Exp>>>;
  channelPosts?: Maybe<Channel_Post_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_post_type" */
export enum Channel_Post_Type_Constraint {
  /** unique or primary key constraint */
  ChannelPostTypePkey = 'channel_post_type_pkey'
}

export enum Channel_Post_Type_Enum {
  Admin = 'admin',
  Message = 'message',
  Poll = 'poll',
  Reply = 'reply',
  System = 'system',
  Trail = 'trail'
}

/** expression to compare columns of type channel_post_type_enum. All fields are combined with logical 'AND'. */
export type Channel_Post_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Channel_Post_Type_Enum>;
  _in?: Maybe<Array<Channel_Post_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Channel_Post_Type_Enum>;
  _nin?: Maybe<Array<Channel_Post_Type_Enum>>;
};

/** input type for inserting data into table "channel_post_type" */
export type Channel_Post_Type_Insert_Input = {
  channelPosts?: Maybe<Channel_Post_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Channel_Post_Type_Max_Fields = {
  __typename?: 'channel_post_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "channel_post_type" */
export type Channel_Post_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Post_Type_Min_Fields = {
  __typename?: 'channel_post_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "channel_post_type" */
export type Channel_Post_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_post_type" */
export type Channel_Post_Type_Mutation_Response = {
  __typename?: 'channel_post_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_Post_Type>;
};

/** input type for inserting object relation for remote table "channel_post_type" */
export type Channel_Post_Type_Obj_Rel_Insert_Input = {
  data: Channel_Post_Type_Insert_Input;
  on_conflict?: Maybe<Channel_Post_Type_On_Conflict>;
};

/** on conflict condition type for table "channel_post_type" */
export type Channel_Post_Type_On_Conflict = {
  constraint: Channel_Post_Type_Constraint;
  update_columns: Array<Channel_Post_Type_Update_Column>;
  where?: Maybe<Channel_Post_Type_Bool_Exp>;
};

/** ordering options when selecting data from "channel_post_type" */
export type Channel_Post_Type_Order_By = {
  channelPosts_aggregate?: Maybe<Channel_Post_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "channel_post_type" */
export type Channel_Post_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "channel_post_type" */
export enum Channel_Post_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "channel_post_type" */
export type Channel_Post_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "channel_post_type" */
export enum Channel_Post_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** update columns of table "channel_post" */
export enum Channel_Post_Update_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  EditedAt = 'editedAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  MentionUserId = 'mentionUserId',
  /** column name */
  Message = 'message',
  /** column name */
  ParentPostId = 'parentPostId',
  /** column name */
  PollId = 'pollId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  RootPostId = 'rootPostId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select columns of table "channel" */
export enum Channel_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Default = 'default',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  LastHighlightTimestamp = 'lastHighlightTimestamp',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  PrismaGroupId = 'prismaGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaOwnerId = 'prismaOwnerId',
  /** column name */
  Private = 'private',
  /** column name */
  TotalPosts = 'totalPosts',
  /** column name */
  Type = 'type',
  /** column name */
  UniqDmId = 'uniqDmId',
  /** column name */
  UniqHasuraDmId = 'uniqHasuraDmId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "channel" */
export type Channel_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastHighlightTimestamp?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['uuid']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaOwnerId?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  totalPosts?: Maybe<Scalars['Int']>;
  type?: Maybe<Channel_Type_Enum>;
  uniqDmId?: Maybe<Scalars['String']>;
  uniqHasuraDmId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Channel_Stddev_Fields = {
  __typename?: 'channel_stddev_fields';
  totalPosts?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "channel" */
export type Channel_Stddev_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Channel_Stddev_Pop_Fields = {
  __typename?: 'channel_stddev_pop_fields';
  totalPosts?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "channel" */
export type Channel_Stddev_Pop_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Channel_Stddev_Samp_Fields = {
  __typename?: 'channel_stddev_samp_fields';
  totalPosts?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "channel" */
export type Channel_Stddev_Samp_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Channel_Sum_Fields = {
  __typename?: 'channel_sum_fields';
  totalPosts?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "channel" */
export type Channel_Sum_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/**
 * channel types
 *
 *
 * columns and relationships of "channel_type"
 */
export type Channel_Type = {
  __typename?: 'channel_type';
  /** An array relationship */
  channels: Array<Channel>;
  /** An aggregated array relationship */
  channels_aggregate: Channel_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


/**
 * channel types
 *
 *
 * columns and relationships of "channel_type"
 */
export type Channel_TypeChannelsArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/**
 * channel types
 *
 *
 * columns and relationships of "channel_type"
 */
export type Channel_TypeChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};

/** aggregated selection of "channel_type" */
export type Channel_Type_Aggregate = {
  __typename?: 'channel_type_aggregate';
  aggregate?: Maybe<Channel_Type_Aggregate_Fields>;
  nodes: Array<Channel_Type>;
};

/** aggregate fields of "channel_type" */
export type Channel_Type_Aggregate_Fields = {
  __typename?: 'channel_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Type_Max_Fields>;
  min?: Maybe<Channel_Type_Min_Fields>;
};


/** aggregate fields of "channel_type" */
export type Channel_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel_type" */
export type Channel_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Type_Max_Order_By>;
  min?: Maybe<Channel_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_type" */
export type Channel_Type_Arr_Rel_Insert_Input = {
  data: Array<Channel_Type_Insert_Input>;
  on_conflict?: Maybe<Channel_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_type". All fields are combined with a logical 'AND'. */
export type Channel_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Type_Bool_Exp>>>;
  _not?: Maybe<Channel_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Type_Bool_Exp>>>;
  channels?: Maybe<Channel_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_type" */
export enum Channel_Type_Constraint {
  /** unique or primary key constraint */
  ChannelTypePkey = 'channel_type_pkey'
}

export enum Channel_Type_Enum {
  City = 'city',
  Direct = 'direct',
  Group = 'group',
  World = 'world'
}

/** expression to compare columns of type channel_type_enum. All fields are combined with logical 'AND'. */
export type Channel_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Channel_Type_Enum>;
  _in?: Maybe<Array<Channel_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Channel_Type_Enum>;
  _nin?: Maybe<Array<Channel_Type_Enum>>;
};

/** input type for inserting data into table "channel_type" */
export type Channel_Type_Insert_Input = {
  channels?: Maybe<Channel_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Channel_Type_Max_Fields = {
  __typename?: 'channel_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "channel_type" */
export type Channel_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Type_Min_Fields = {
  __typename?: 'channel_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "channel_type" */
export type Channel_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "channel_type" */
export type Channel_Type_Mutation_Response = {
  __typename?: 'channel_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel_Type>;
};

/** input type for inserting object relation for remote table "channel_type" */
export type Channel_Type_Obj_Rel_Insert_Input = {
  data: Channel_Type_Insert_Input;
  on_conflict?: Maybe<Channel_Type_On_Conflict>;
};

/** on conflict condition type for table "channel_type" */
export type Channel_Type_On_Conflict = {
  constraint: Channel_Type_Constraint;
  update_columns: Array<Channel_Type_Update_Column>;
  where?: Maybe<Channel_Type_Bool_Exp>;
};

/** ordering options when selecting data from "channel_type" */
export type Channel_Type_Order_By = {
  channels_aggregate?: Maybe<Channel_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "channel_type" */
export type Channel_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "channel_type" */
export enum Channel_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "channel_type" */
export type Channel_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "channel_type" */
export enum Channel_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** update columns of table "channel" */
export enum Channel_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Default = 'default',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  LastHighlightTimestamp = 'lastHighlightTimestamp',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  PrismaGroupId = 'prismaGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaOwnerId = 'prismaOwnerId',
  /** column name */
  Private = 'private',
  /** column name */
  TotalPosts = 'totalPosts',
  /** column name */
  Type = 'type',
  /** column name */
  UniqDmId = 'uniqDmId',
  /** column name */
  UniqHasuraDmId = 'uniqHasuraDmId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Channel_Var_Pop_Fields = {
  __typename?: 'channel_var_pop_fields';
  totalPosts?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "channel" */
export type Channel_Var_Pop_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Channel_Var_Samp_Fields = {
  __typename?: 'channel_var_samp_fields';
  totalPosts?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "channel" */
export type Channel_Var_Samp_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Channel_Variance_Fields = {
  __typename?: 'channel_variance_fields';
  totalPosts?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "channel" */
export type Channel_Variance_Order_By = {
  totalPosts?: Maybe<Order_By>;
};

/**
 * comments in app
 *
 *
 * columns and relationships of "comment"
 */
export type Comment = {
  __typename?: 'comment';
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  message: Scalars['String'];
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};

/** aggregated selection of "comment" */
export type Comment_Aggregate = {
  __typename?: 'comment_aggregate';
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "comment" */
export type Comment_Aggregate_Fields = {
  __typename?: 'comment_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
};


/** aggregate fields of "comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment" */
export type Comment_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Comment_Max_Order_By>;
  min?: Maybe<Comment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comment_Bool_Exp>>>;
  _not?: Maybe<Comment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey',
  /** unique or primary key constraint */
  CommentPrismaIdKey = 'comment_prisma_id_key'
}

/** input type for inserting data into table "comment" */
export type Comment_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Comment_Max_Fields = {
  __typename?: 'comment_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "comment" */
export type Comment_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Min_Fields = {
  __typename?: 'comment_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "comment" */
export type Comment_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "comment" */
export type Comment_Mutation_Response = {
  __typename?: 'comment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment>;
};

/** input type for inserting object relation for remote table "comment" */
export type Comment_Obj_Rel_Insert_Input = {
  data: Comment_Insert_Input;
  on_conflict?: Maybe<Comment_On_Conflict>;
};

/** on conflict condition type for table "comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns: Array<Comment_Update_Column>;
  where?: Maybe<Comment_Bool_Exp>;
};

/** ordering options when selecting data from "comment" */
export type Comment_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "comment" */
export type Comment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comment" */
export enum Comment_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "comment" */
export type Comment_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "comment" */
export enum Comment_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** fields of action: "deactivate_account" */
export type Deactivate_Account = {
  __typename?: 'deactivate_account';
  /** the time at which this action was created */
  created_at?: Maybe<Scalars['timestamptz']>;
  /** errors related to the invocation */
  errors?: Maybe<Scalars['json']>;
  /** the unique id of an action */
  id?: Maybe<Scalars['uuid']>;
  /** the output fields of this action */
  output?: Maybe<LambdaOutput>;
};

/**
 * meetups
 *
 *
 * columns and relationships of "event_"
 */
export type Event_ = {
  __typename?: 'event_';
  /** An object relationship */
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  channel_posts: Array<Channel_Post>;
  /** An aggregated array relationship */
  channel_posts_aggregate: Channel_Post_Aggregate;
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  file: File;
  fileId: Scalars['uuid'];
  googlePlaceId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  group_?: Maybe<Group_>;
  id: Scalars['uuid'];
  location: Scalars['String'];
  name: Scalars['String'];
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  /** An array relationship */
  rsvps: Array<Event_Rsvp>;
  /** An aggregated array relationship */
  rsvps_aggregate: Event_Rsvp_Aggregate;
  time: Scalars['timestamptz'];
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};


/**
 * meetups
 *
 *
 * columns and relationships of "event_"
 */
export type Event_Channel_PostsArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/**
 * meetups
 *
 *
 * columns and relationships of "event_"
 */
export type Event_Channel_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/**
 * meetups
 *
 *
 * columns and relationships of "event_"
 */
export type Event_RsvpsArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};


/**
 * meetups
 *
 *
 * columns and relationships of "event_"
 */
export type Event_Rsvps_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};

/** aggregated selection of "event_" */
export type Event__Aggregate = {
  __typename?: 'event__aggregate';
  aggregate?: Maybe<Event__Aggregate_Fields>;
  nodes: Array<Event_>;
};

/** aggregate fields of "event_" */
export type Event__Aggregate_Fields = {
  __typename?: 'event__aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Event__Max_Fields>;
  min?: Maybe<Event__Min_Fields>;
};


/** aggregate fields of "event_" */
export type Event__Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Event__Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_" */
export type Event__Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Event__Max_Order_By>;
  min?: Maybe<Event__Min_Order_By>;
};

/** input type for inserting array relation for remote table "event_" */
export type Event__Arr_Rel_Insert_Input = {
  data: Array<Event__Insert_Input>;
  on_conflict?: Maybe<Event__On_Conflict>;
};

/** Boolean expression to filter rows from the table "event_". All fields are combined with a logical 'AND'. */
export type Event__Bool_Exp = {
  _and?: Maybe<Array<Maybe<Event__Bool_Exp>>>;
  _not?: Maybe<Event__Bool_Exp>;
  _or?: Maybe<Array<Maybe<Event__Bool_Exp>>>;
  channel?: Maybe<Channel_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  channel_posts?: Maybe<Channel_Post_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  fileId?: Maybe<Uuid_Comparison_Exp>;
  googlePlaceId?: Maybe<String_Comparison_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  group_?: Maybe<Group__Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  prismaGroupId?: Maybe<String_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  rsvps?: Maybe<Event_Rsvp_Bool_Exp>;
  time?: Maybe<Timestamptz_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/** unique or primary key constraints on table "event_" */
export enum Event__Constraint {
  /** unique or primary key constraint */
  EventPkey = 'event__pkey'
}

/** input type for inserting data into table "event_" */
export type Event__Insert_Input = {
  channel?: Maybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: Maybe<Scalars['uuid']>;
  channel_posts?: Maybe<Channel_Post_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  fileId?: Maybe<Scalars['uuid']>;
  googlePlaceId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  group_?: Maybe<Group__Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  rsvps?: Maybe<Event_Rsvp_Arr_Rel_Insert_Input>;
  time?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Event__Max_Fields = {
  __typename?: 'event__max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['uuid']>;
  googlePlaceId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "event_" */
export type Event__Max_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
  googlePlaceId?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Event__Min_Fields = {
  __typename?: 'event__min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['uuid']>;
  googlePlaceId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "event_" */
export type Event__Min_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fileId?: Maybe<Order_By>;
  googlePlaceId?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "event_" */
export type Event__Mutation_Response = {
  __typename?: 'event__mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Event_>;
};

/** input type for inserting object relation for remote table "event_" */
export type Event__Obj_Rel_Insert_Input = {
  data: Event__Insert_Input;
  on_conflict?: Maybe<Event__On_Conflict>;
};

/** on conflict condition type for table "event_" */
export type Event__On_Conflict = {
  constraint: Event__Constraint;
  update_columns: Array<Event__Update_Column>;
  where?: Maybe<Event__Bool_Exp>;
};

/** ordering options when selecting data from "event_" */
export type Event__Order_By = {
  channel?: Maybe<Channel_Order_By>;
  channelId?: Maybe<Order_By>;
  channel_posts_aggregate?: Maybe<Channel_Post_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  fileId?: Maybe<Order_By>;
  googlePlaceId?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  group_?: Maybe<Group__Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prismaGroupId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  rsvps_aggregate?: Maybe<Event_Rsvp_Aggregate_Order_By>;
  time?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "event_" */
export type Event__Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "event_" */
export enum Event__Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'fileId',
  /** column name */
  GooglePlaceId = 'googlePlaceId',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PrismaGroupId = 'prismaGroupId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Time = 'time',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "event_" */
export type Event__Set_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['uuid']>;
  googlePlaceId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prismaGroupId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "event_" */
export enum Event__Update_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'fileId',
  /** column name */
  GooglePlaceId = 'googlePlaceId',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PrismaGroupId = 'prismaGroupId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Time = 'time',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/**
 * User rsvp for event
 *
 *
 * columns and relationships of "event_rsvp"
 */
export type Event_Rsvp = {
  __typename?: 'event_rsvp';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  event: Event_;
  eventId: Scalars['uuid'];
  id: Scalars['uuid'];
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};

/** aggregated selection of "event_rsvp" */
export type Event_Rsvp_Aggregate = {
  __typename?: 'event_rsvp_aggregate';
  aggregate?: Maybe<Event_Rsvp_Aggregate_Fields>;
  nodes: Array<Event_Rsvp>;
};

/** aggregate fields of "event_rsvp" */
export type Event_Rsvp_Aggregate_Fields = {
  __typename?: 'event_rsvp_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Event_Rsvp_Max_Fields>;
  min?: Maybe<Event_Rsvp_Min_Fields>;
};


/** aggregate fields of "event_rsvp" */
export type Event_Rsvp_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Event_Rsvp_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_rsvp" */
export type Event_Rsvp_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Event_Rsvp_Max_Order_By>;
  min?: Maybe<Event_Rsvp_Min_Order_By>;
};

/** input type for inserting array relation for remote table "event_rsvp" */
export type Event_Rsvp_Arr_Rel_Insert_Input = {
  data: Array<Event_Rsvp_Insert_Input>;
  on_conflict?: Maybe<Event_Rsvp_On_Conflict>;
};

/** Boolean expression to filter rows from the table "event_rsvp". All fields are combined with a logical 'AND'. */
export type Event_Rsvp_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Event_Rsvp_Bool_Exp>>>;
  _not?: Maybe<Event_Rsvp_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Event_Rsvp_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  event?: Maybe<Event__Bool_Exp>;
  eventId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/** unique or primary key constraints on table "event_rsvp" */
export enum Event_Rsvp_Constraint {
  /** unique or primary key constraint */
  EventRsvpEventIdUserIdKey = 'event_rsvp_event_id_user_id_key',
  /** unique or primary key constraint */
  EventRsvpPkey = 'event_rsvp_pkey'
}

/** input type for inserting data into table "event_rsvp" */
export type Event_Rsvp_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  event?: Maybe<Event__Obj_Rel_Insert_Input>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Event_Rsvp_Max_Fields = {
  __typename?: 'event_rsvp_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "event_rsvp" */
export type Event_Rsvp_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  eventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Rsvp_Min_Fields = {
  __typename?: 'event_rsvp_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "event_rsvp" */
export type Event_Rsvp_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  eventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "event_rsvp" */
export type Event_Rsvp_Mutation_Response = {
  __typename?: 'event_rsvp_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Event_Rsvp>;
};

/** input type for inserting object relation for remote table "event_rsvp" */
export type Event_Rsvp_Obj_Rel_Insert_Input = {
  data: Event_Rsvp_Insert_Input;
  on_conflict?: Maybe<Event_Rsvp_On_Conflict>;
};

/** on conflict condition type for table "event_rsvp" */
export type Event_Rsvp_On_Conflict = {
  constraint: Event_Rsvp_Constraint;
  update_columns: Array<Event_Rsvp_Update_Column>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};

/** ordering options when selecting data from "event_rsvp" */
export type Event_Rsvp_Order_By = {
  createdAt?: Maybe<Order_By>;
  event?: Maybe<Event__Order_By>;
  eventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "event_rsvp" */
export type Event_Rsvp_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "event_rsvp" */
export enum Event_Rsvp_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "event_rsvp" */
export type Event_Rsvp_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "event_rsvp" */
export enum Event_Rsvp_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/**
 * Feature toggles, app version checking
 *
 *
 * columns and relationships of "feature_gate"
 */
export type Feature_Gate = {
  __typename?: 'feature_gate';
  active: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  feature: Scalars['String'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** aggregated selection of "feature_gate" */
export type Feature_Gate_Aggregate = {
  __typename?: 'feature_gate_aggregate';
  aggregate?: Maybe<Feature_Gate_Aggregate_Fields>;
  nodes: Array<Feature_Gate>;
};

/** aggregate fields of "feature_gate" */
export type Feature_Gate_Aggregate_Fields = {
  __typename?: 'feature_gate_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Feature_Gate_Max_Fields>;
  min?: Maybe<Feature_Gate_Min_Fields>;
};


/** aggregate fields of "feature_gate" */
export type Feature_Gate_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Feature_Gate_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "feature_gate" */
export type Feature_Gate_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Feature_Gate_Max_Order_By>;
  min?: Maybe<Feature_Gate_Min_Order_By>;
};

/** input type for inserting array relation for remote table "feature_gate" */
export type Feature_Gate_Arr_Rel_Insert_Input = {
  data: Array<Feature_Gate_Insert_Input>;
  on_conflict?: Maybe<Feature_Gate_On_Conflict>;
};

/** Boolean expression to filter rows from the table "feature_gate". All fields are combined with a logical 'AND'. */
export type Feature_Gate_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feature_Gate_Bool_Exp>>>;
  _not?: Maybe<Feature_Gate_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feature_Gate_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  feature?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_gate" */
export enum Feature_Gate_Constraint {
  /** unique or primary key constraint */
  FeatureGateFeatureKey = 'feature_gate_feature_key',
  /** unique or primary key constraint */
  FeatureGatePkey = 'feature_gate_pkey'
}

/** input type for inserting data into table "feature_gate" */
export type Feature_Gate_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  feature?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Feature_Gate_Max_Fields = {
  __typename?: 'feature_gate_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  feature?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "feature_gate" */
export type Feature_Gate_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  feature?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Feature_Gate_Min_Fields = {
  __typename?: 'feature_gate_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  feature?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "feature_gate" */
export type Feature_Gate_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  feature?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "feature_gate" */
export type Feature_Gate_Mutation_Response = {
  __typename?: 'feature_gate_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Feature_Gate>;
};

/** input type for inserting object relation for remote table "feature_gate" */
export type Feature_Gate_Obj_Rel_Insert_Input = {
  data: Feature_Gate_Insert_Input;
  on_conflict?: Maybe<Feature_Gate_On_Conflict>;
};

/** on conflict condition type for table "feature_gate" */
export type Feature_Gate_On_Conflict = {
  constraint: Feature_Gate_Constraint;
  update_columns: Array<Feature_Gate_Update_Column>;
  where?: Maybe<Feature_Gate_Bool_Exp>;
};

/** ordering options when selecting data from "feature_gate" */
export type Feature_Gate_Order_By = {
  active?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  feature?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "feature_gate" */
export type Feature_Gate_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "feature_gate" */
export enum Feature_Gate_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feature = 'feature',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "feature_gate" */
export type Feature_Gate_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  feature?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "feature_gate" */
export enum Feature_Gate_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feature = 'feature',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type File = {
  __typename?: 'file';
  /** An array relationship */
  announcementFiles: Array<Announcement_File>;
  /** An aggregated array relationship */
  announcementFiles_aggregate: Announcement_File_Aggregate;
  /** An array relationship */
  challengeFiles: Array<Challenge_File>;
  /** An aggregated array relationship */
  challengeFiles_aggregate: Challenge_File_Aggregate;
  /** An array relationship */
  channelFiles: Array<Channel_File>;
  /** An aggregated array relationship */
  channelFiles_aggregate: Channel_File_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  events: Array<Event_>;
  /** An aggregated array relationship */
  events_aggregate: Event__Aggregate;
  extension?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  mimeType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  previewPath?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  width?: Maybe<Scalars['Int']>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileAnnouncementFilesArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileAnnouncementFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileChallengeFilesArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileChallengeFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileChannelFilesArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileChannelFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileEventsArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/**
 * media files in app
 *
 *
 * columns and relationships of "file"
 */
export type FileEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};

/** aggregated selection of "file" */
export type File_Aggregate = {
  __typename?: 'file_aggregate';
  aggregate?: Maybe<File_Aggregate_Fields>;
  nodes: Array<File>;
};

/** aggregate fields of "file" */
export type File_Aggregate_Fields = {
  __typename?: 'file_aggregate_fields';
  avg?: Maybe<File_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<File_Max_Fields>;
  min?: Maybe<File_Min_Fields>;
  stddev?: Maybe<File_Stddev_Fields>;
  stddev_pop?: Maybe<File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Stddev_Samp_Fields>;
  sum?: Maybe<File_Sum_Fields>;
  var_pop?: Maybe<File_Var_Pop_Fields>;
  var_samp?: Maybe<File_Var_Samp_Fields>;
  variance?: Maybe<File_Variance_Fields>;
};


/** aggregate fields of "file" */
export type File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "file" */
export type File_Aggregate_Order_By = {
  avg?: Maybe<File_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<File_Max_Order_By>;
  min?: Maybe<File_Min_Order_By>;
  stddev?: Maybe<File_Stddev_Order_By>;
  stddev_pop?: Maybe<File_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<File_Stddev_Samp_Order_By>;
  sum?: Maybe<File_Sum_Order_By>;
  var_pop?: Maybe<File_Var_Pop_Order_By>;
  var_samp?: Maybe<File_Var_Samp_Order_By>;
  variance?: Maybe<File_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "file" */
export type File_Arr_Rel_Insert_Input = {
  data: Array<File_Insert_Input>;
  on_conflict?: Maybe<File_On_Conflict>;
};

/** aggregate avg on columns */
export type File_Avg_Fields = {
  __typename?: 'file_avg_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "file" */
export type File_Avg_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type File_Bool_Exp = {
  _and?: Maybe<Array<Maybe<File_Bool_Exp>>>;
  _not?: Maybe<File_Bool_Exp>;
  _or?: Maybe<Array<Maybe<File_Bool_Exp>>>;
  announcementFiles?: Maybe<Announcement_File_Bool_Exp>;
  challengeFiles?: Maybe<Challenge_File_Bool_Exp>;
  channelFiles?: Maybe<Channel_File_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  events?: Maybe<Event__Bool_Exp>;
  extension?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mimeType?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  path?: Maybe<String_Comparison_Exp>;
  previewPath?: Maybe<String_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  size?: Maybe<Int_Comparison_Exp>;
  thumbnailPath?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  width?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "file" */
export enum File_Constraint {
  /** unique or primary key constraint */
  FilePkey = 'file_pkey',
  /** unique or primary key constraint */
  FilePrismaIdKey = 'file_prisma_id_key'
}

/** input type for incrementing integer column in table "file" */
export type File_Inc_Input = {
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "file" */
export type File_Insert_Input = {
  announcementFiles?: Maybe<Announcement_File_Arr_Rel_Insert_Input>;
  challengeFiles?: Maybe<Challenge_File_Arr_Rel_Insert_Input>;
  channelFiles?: Maybe<Channel_File_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  events?: Maybe<Event__Arr_Rel_Insert_Input>;
  extension?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  previewPath?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type File_Max_Fields = {
  __typename?: 'file_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  extension?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  previewPath?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "file" */
export type File_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  extension?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mimeType?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  previewPath?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  thumbnailPath?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type File_Min_Fields = {
  __typename?: 'file_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  extension?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  previewPath?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "file" */
export type File_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  extension?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mimeType?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  previewPath?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  thumbnailPath?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** response of any mutation on the table "file" */
export type File_Mutation_Response = {
  __typename?: 'file_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<File>;
};

/** input type for inserting object relation for remote table "file" */
export type File_Obj_Rel_Insert_Input = {
  data: File_Insert_Input;
  on_conflict?: Maybe<File_On_Conflict>;
};

/** on conflict condition type for table "file" */
export type File_On_Conflict = {
  constraint: File_Constraint;
  update_columns: Array<File_Update_Column>;
  where?: Maybe<File_Bool_Exp>;
};

/** ordering options when selecting data from "file" */
export type File_Order_By = {
  announcementFiles_aggregate?: Maybe<Announcement_File_Aggregate_Order_By>;
  challengeFiles_aggregate?: Maybe<Challenge_File_Aggregate_Order_By>;
  channelFiles_aggregate?: Maybe<Channel_File_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  events_aggregate?: Maybe<Event__Aggregate_Order_By>;
  extension?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mimeType?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  previewPath?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  thumbnailPath?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** primary key columns input for table: "file" */
export type File_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file" */
export enum File_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Extension = 'extension',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  PreviewPath = 'previewPath',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  Size = 'size',
  /** column name */
  ThumbnailPath = 'thumbnailPath',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "file" */
export type File_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  extension?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  previewPath?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type File_Stddev_Fields = {
  __typename?: 'file_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "file" */
export type File_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type File_Stddev_Pop_Fields = {
  __typename?: 'file_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "file" */
export type File_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type File_Stddev_Samp_Fields = {
  __typename?: 'file_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "file" */
export type File_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type File_Sum_Fields = {
  __typename?: 'file_sum_fields';
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "file" */
export type File_Sum_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** update columns of table "file" */
export enum File_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Extension = 'extension',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  PreviewPath = 'previewPath',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  Size = 'size',
  /** column name */
  ThumbnailPath = 'thumbnailPath',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Width = 'width'
}

/** aggregate var_pop on columns */
export type File_Var_Pop_Fields = {
  __typename?: 'file_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "file" */
export type File_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type File_Var_Samp_Fields = {
  __typename?: 'file_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "file" */
export type File_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type File_Variance_Fields = {
  __typename?: 'file_variance_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "file" */
export type File_Variance_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/**
 * app-wide notification controls per user
 *
 *
 * columns and relationships of "global_notification_control"
 */
export type Global_Notification_Control = {
  __typename?: 'global_notification_control';
  announcements: Global_Notification_Type_Enum;
  challenges: Global_Notification_Type_Enum;
  chats: Global_Notification_Type_Enum;
  userId: Scalars['uuid'];
};

/** aggregated selection of "global_notification_control" */
export type Global_Notification_Control_Aggregate = {
  __typename?: 'global_notification_control_aggregate';
  aggregate?: Maybe<Global_Notification_Control_Aggregate_Fields>;
  nodes: Array<Global_Notification_Control>;
};

/** aggregate fields of "global_notification_control" */
export type Global_Notification_Control_Aggregate_Fields = {
  __typename?: 'global_notification_control_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Global_Notification_Control_Max_Fields>;
  min?: Maybe<Global_Notification_Control_Min_Fields>;
};


/** aggregate fields of "global_notification_control" */
export type Global_Notification_Control_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Global_Notification_Control_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "global_notification_control" */
export type Global_Notification_Control_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Global_Notification_Control_Max_Order_By>;
  min?: Maybe<Global_Notification_Control_Min_Order_By>;
};

/** input type for inserting array relation for remote table "global_notification_control" */
export type Global_Notification_Control_Arr_Rel_Insert_Input = {
  data: Array<Global_Notification_Control_Insert_Input>;
  on_conflict?: Maybe<Global_Notification_Control_On_Conflict>;
};

/** Boolean expression to filter rows from the table "global_notification_control". All fields are combined with a logical 'AND'. */
export type Global_Notification_Control_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Global_Notification_Control_Bool_Exp>>>;
  _not?: Maybe<Global_Notification_Control_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Global_Notification_Control_Bool_Exp>>>;
  announcements?: Maybe<Global_Notification_Type_Enum_Comparison_Exp>;
  challenges?: Maybe<Global_Notification_Type_Enum_Comparison_Exp>;
  chats?: Maybe<Global_Notification_Type_Enum_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "global_notification_control" */
export enum Global_Notification_Control_Constraint {
  /** unique or primary key constraint */
  GlobalNotificationControlPkey = 'global_notification_control_pkey',
  /** unique or primary key constraint */
  GlobalNotificationControlUserIdKey = 'global_notification_control_user_id_key'
}

/** input type for inserting data into table "global_notification_control" */
export type Global_Notification_Control_Insert_Input = {
  announcements?: Maybe<Global_Notification_Type_Enum>;
  challenges?: Maybe<Global_Notification_Type_Enum>;
  chats?: Maybe<Global_Notification_Type_Enum>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Global_Notification_Control_Max_Fields = {
  __typename?: 'global_notification_control_max_fields';
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "global_notification_control" */
export type Global_Notification_Control_Max_Order_By = {
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Global_Notification_Control_Min_Fields = {
  __typename?: 'global_notification_control_min_fields';
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "global_notification_control" */
export type Global_Notification_Control_Min_Order_By = {
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "global_notification_control" */
export type Global_Notification_Control_Mutation_Response = {
  __typename?: 'global_notification_control_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Global_Notification_Control>;
};

/** input type for inserting object relation for remote table "global_notification_control" */
export type Global_Notification_Control_Obj_Rel_Insert_Input = {
  data: Global_Notification_Control_Insert_Input;
  on_conflict?: Maybe<Global_Notification_Control_On_Conflict>;
};

/** on conflict condition type for table "global_notification_control" */
export type Global_Notification_Control_On_Conflict = {
  constraint: Global_Notification_Control_Constraint;
  update_columns: Array<Global_Notification_Control_Update_Column>;
  where?: Maybe<Global_Notification_Control_Bool_Exp>;
};

/** ordering options when selecting data from "global_notification_control" */
export type Global_Notification_Control_Order_By = {
  announcements?: Maybe<Order_By>;
  challenges?: Maybe<Order_By>;
  chats?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "global_notification_control" */
export type Global_Notification_Control_Pk_Columns_Input = {
  userId: Scalars['uuid'];
};

/** select columns of table "global_notification_control" */
export enum Global_Notification_Control_Select_Column {
  /** column name */
  Announcements = 'announcements',
  /** column name */
  Challenges = 'challenges',
  /** column name */
  Chats = 'chats',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "global_notification_control" */
export type Global_Notification_Control_Set_Input = {
  announcements?: Maybe<Global_Notification_Type_Enum>;
  challenges?: Maybe<Global_Notification_Type_Enum>;
  chats?: Maybe<Global_Notification_Type_Enum>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "global_notification_control" */
export enum Global_Notification_Control_Update_Column {
  /** column name */
  Announcements = 'announcements',
  /** column name */
  Challenges = 'challenges',
  /** column name */
  Chats = 'chats',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "global_notification_type" */
export type Global_Notification_Type = {
  __typename?: 'global_notification_type';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "global_notification_type" */
export type Global_Notification_Type_Aggregate = {
  __typename?: 'global_notification_type_aggregate';
  aggregate?: Maybe<Global_Notification_Type_Aggregate_Fields>;
  nodes: Array<Global_Notification_Type>;
};

/** aggregate fields of "global_notification_type" */
export type Global_Notification_Type_Aggregate_Fields = {
  __typename?: 'global_notification_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Global_Notification_Type_Max_Fields>;
  min?: Maybe<Global_Notification_Type_Min_Fields>;
};


/** aggregate fields of "global_notification_type" */
export type Global_Notification_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Global_Notification_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "global_notification_type" */
export type Global_Notification_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Global_Notification_Type_Max_Order_By>;
  min?: Maybe<Global_Notification_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "global_notification_type" */
export type Global_Notification_Type_Arr_Rel_Insert_Input = {
  data: Array<Global_Notification_Type_Insert_Input>;
  on_conflict?: Maybe<Global_Notification_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "global_notification_type". All fields are combined with a logical 'AND'. */
export type Global_Notification_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Global_Notification_Type_Bool_Exp>>>;
  _not?: Maybe<Global_Notification_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Global_Notification_Type_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "global_notification_type" */
export enum Global_Notification_Type_Constraint {
  /** unique or primary key constraint */
  GlobalNotificationTypePkey = 'global_notification_type_pkey'
}

export enum Global_Notification_Type_Enum {
  All = 'all',
  Muted = 'muted'
}

/** expression to compare columns of type global_notification_type_enum. All fields are combined with logical 'AND'. */
export type Global_Notification_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Global_Notification_Type_Enum>;
  _in?: Maybe<Array<Global_Notification_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Global_Notification_Type_Enum>;
  _nin?: Maybe<Array<Global_Notification_Type_Enum>>;
};

/** input type for inserting data into table "global_notification_type" */
export type Global_Notification_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Global_Notification_Type_Max_Fields = {
  __typename?: 'global_notification_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "global_notification_type" */
export type Global_Notification_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Global_Notification_Type_Min_Fields = {
  __typename?: 'global_notification_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "global_notification_type" */
export type Global_Notification_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "global_notification_type" */
export type Global_Notification_Type_Mutation_Response = {
  __typename?: 'global_notification_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Global_Notification_Type>;
};

/** input type for inserting object relation for remote table "global_notification_type" */
export type Global_Notification_Type_Obj_Rel_Insert_Input = {
  data: Global_Notification_Type_Insert_Input;
  on_conflict?: Maybe<Global_Notification_Type_On_Conflict>;
};

/** on conflict condition type for table "global_notification_type" */
export type Global_Notification_Type_On_Conflict = {
  constraint: Global_Notification_Type_Constraint;
  update_columns: Array<Global_Notification_Type_Update_Column>;
  where?: Maybe<Global_Notification_Type_Bool_Exp>;
};

/** ordering options when selecting data from "global_notification_type" */
export type Global_Notification_Type_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "global_notification_type" */
export type Global_Notification_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "global_notification_type" */
export enum Global_Notification_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "global_notification_type" */
export type Global_Notification_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "global_notification_type" */
export enum Global_Notification_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_ = {
  __typename?: 'group_';
  alphaName?: Maybe<Scalars['String']>;
  /** An array relationship */
  announcements: Array<Announcement_>;
  /** An aggregated array relationship */
  announcements_aggregate: Announcement__Aggregate;
  /** An object relationship */
  challengeGroup?: Maybe<Challenge_Group>;
  /** An array relationship */
  channels: Array<Channel>;
  /** An aggregated array relationship */
  channels_aggregate: Channel_Aggregate;
  createdAt: Scalars['timestamptz'];
  defaultChannelId?: Maybe<Scalars['uuid']>;
  demonym?: Maybe<Scalars['String']>;
  demonymPlural?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  events: Array<Event_>;
  /** An aggregated array relationship */
  events_aggregate: Event__Aggregate;
  /** An array relationship */
  groupBadgeTypes: Array<Group_Badge_Type>;
  /** An aggregated array relationship */
  groupBadgeTypes_aggregate: Group_Badge_Type_Aggregate;
  /** An array relationship */
  hangouts: Array<Hangout>;
  /** An aggregated array relationship */
  hangouts_aggregate: Hangout_Aggregate;
  id: Scalars['uuid'];
  imageUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  joinRequests: Array<Group_Join_Request>;
  /** An aggregated array relationship */
  joinRequests_aggregate: Group_Join_Request_Aggregate;
  joinTitle?: Maybe<Group_Join_Title_Enum>;
  lastYoutubeCheckAt?: Maybe<Scalars['timestamptz']>;
  leaderPrismaId?: Maybe<Scalars['String']>;
  leaderUserId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  leader_?: Maybe<User_>;
  name: Scalars['String'];
  /** An object relationship */
  pinnedAnnouncement?: Maybe<Announcement_>;
  pinnedAnnouncementId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaSecret?: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  /** An array relationship */
  roles: Array<Group_Role>;
  /** An aggregated array relationship */
  roles_aggregate: Group_Role_Aggregate;
  secret: Scalars['uuid'];
  shortName?: Maybe<Scalars['String']>;
  tiltThreshold: Scalars['Int'];
  tilted: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
  userCount: Scalars['Int'];
  /** An array relationship */
  users: Array<User_Group>;
  /** An aggregated array relationship */
  users_aggregate: User_Group_Aggregate;
  /** An object relationship */
  worldchat?: Maybe<Channel>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_AnnouncementsArgs = {
  distinct_on?: Maybe<Array<Announcement__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement__Order_By>>;
  where?: Maybe<Announcement__Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_Announcements_AggregateArgs = {
  distinct_on?: Maybe<Array<Announcement__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement__Order_By>>;
  where?: Maybe<Announcement__Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_ChannelsArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_EventsArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_Events_AggregateArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_GroupBadgeTypesArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_GroupBadgeTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_HangoutsArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_Hangouts_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_JoinRequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_JoinRequests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_RolesArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_UsersArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/**
 * groups in app
 *
 *
 * columns and relationships of "group_"
 */
export type Group_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};

/** aggregated selection of "group_" */
export type Group__Aggregate = {
  __typename?: 'group__aggregate';
  aggregate?: Maybe<Group__Aggregate_Fields>;
  nodes: Array<Group_>;
};

/** aggregate fields of "group_" */
export type Group__Aggregate_Fields = {
  __typename?: 'group__aggregate_fields';
  avg?: Maybe<Group__Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group__Max_Fields>;
  min?: Maybe<Group__Min_Fields>;
  stddev?: Maybe<Group__Stddev_Fields>;
  stddev_pop?: Maybe<Group__Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group__Stddev_Samp_Fields>;
  sum?: Maybe<Group__Sum_Fields>;
  var_pop?: Maybe<Group__Var_Pop_Fields>;
  var_samp?: Maybe<Group__Var_Samp_Fields>;
  variance?: Maybe<Group__Variance_Fields>;
};


/** aggregate fields of "group_" */
export type Group__Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group__Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_" */
export type Group__Aggregate_Order_By = {
  avg?: Maybe<Group__Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Group__Max_Order_By>;
  min?: Maybe<Group__Min_Order_By>;
  stddev?: Maybe<Group__Stddev_Order_By>;
  stddev_pop?: Maybe<Group__Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Group__Stddev_Samp_Order_By>;
  sum?: Maybe<Group__Sum_Order_By>;
  var_pop?: Maybe<Group__Var_Pop_Order_By>;
  var_samp?: Maybe<Group__Var_Samp_Order_By>;
  variance?: Maybe<Group__Variance_Order_By>;
};

/** input type for inserting array relation for remote table "group_" */
export type Group__Arr_Rel_Insert_Input = {
  data: Array<Group__Insert_Input>;
  on_conflict?: Maybe<Group__On_Conflict>;
};

/** aggregate avg on columns */
export type Group__Avg_Fields = {
  __typename?: 'group__avg_fields';
  tiltThreshold?: Maybe<Scalars['Float']>;
  userCount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_" */
export type Group__Avg_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_". All fields are combined with a logical 'AND'. */
export type Group__Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group__Bool_Exp>>>;
  _not?: Maybe<Group__Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group__Bool_Exp>>>;
  alphaName?: Maybe<String_Comparison_Exp>;
  announcements?: Maybe<Announcement__Bool_Exp>;
  challengeGroup?: Maybe<Challenge_Group_Bool_Exp>;
  channels?: Maybe<Channel_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  defaultChannelId?: Maybe<Uuid_Comparison_Exp>;
  demonym?: Maybe<String_Comparison_Exp>;
  demonymPlural?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  events?: Maybe<Event__Bool_Exp>;
  groupBadgeTypes?: Maybe<Group_Badge_Type_Bool_Exp>;
  hangouts?: Maybe<Hangout_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  imageUrl?: Maybe<String_Comparison_Exp>;
  joinRequests?: Maybe<Group_Join_Request_Bool_Exp>;
  joinTitle?: Maybe<Group_Join_Title_Enum_Comparison_Exp>;
  lastYoutubeCheckAt?: Maybe<Timestamptz_Comparison_Exp>;
  leaderPrismaId?: Maybe<String_Comparison_Exp>;
  leaderUserId?: Maybe<Uuid_Comparison_Exp>;
  leader_?: Maybe<User__Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  pinnedAnnouncement?: Maybe<Announcement__Bool_Exp>;
  pinnedAnnouncementId?: Maybe<Uuid_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaSecret?: Maybe<String_Comparison_Exp>;
  private?: Maybe<Boolean_Comparison_Exp>;
  roles?: Maybe<Group_Role_Bool_Exp>;
  secret?: Maybe<Uuid_Comparison_Exp>;
  shortName?: Maybe<String_Comparison_Exp>;
  tiltThreshold?: Maybe<Int_Comparison_Exp>;
  tilted?: Maybe<Boolean_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userCount?: Maybe<Int_Comparison_Exp>;
  users?: Maybe<User_Group_Bool_Exp>;
  worldchat?: Maybe<Channel_Bool_Exp>;
};

/** unique or primary key constraints on table "group_" */
export enum Group__Constraint {
  /** unique or primary key constraint */
  GroupAlphaNameKey = 'group__alpha_name_key',
  /** unique or primary key constraint */
  GroupPkey = 'group__pkey',
  /** unique or primary key constraint */
  GroupPrismaIdKey = 'group__prisma_id_key',
  /** unique or primary key constraint */
  GroupPrismaSecretKey = 'group__prisma_secret_key',
  /** unique or primary key constraint */
  GroupSecretKey = 'group__secret_key'
}

/** input type for incrementing integer column in table "group_" */
export type Group__Inc_Input = {
  tiltThreshold?: Maybe<Scalars['Int']>;
  userCount?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group_" */
export type Group__Insert_Input = {
  alphaName?: Maybe<Scalars['String']>;
  announcements?: Maybe<Announcement__Arr_Rel_Insert_Input>;
  challengeGroup?: Maybe<Challenge_Group_Obj_Rel_Insert_Input>;
  channels?: Maybe<Channel_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultChannelId?: Maybe<Scalars['uuid']>;
  demonym?: Maybe<Scalars['String']>;
  demonymPlural?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  events?: Maybe<Event__Arr_Rel_Insert_Input>;
  groupBadgeTypes?: Maybe<Group_Badge_Type_Arr_Rel_Insert_Input>;
  hangouts?: Maybe<Hangout_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  joinRequests?: Maybe<Group_Join_Request_Arr_Rel_Insert_Input>;
  joinTitle?: Maybe<Group_Join_Title_Enum>;
  lastYoutubeCheckAt?: Maybe<Scalars['timestamptz']>;
  leaderPrismaId?: Maybe<Scalars['String']>;
  leaderUserId?: Maybe<Scalars['uuid']>;
  leader_?: Maybe<User__Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  pinnedAnnouncement?: Maybe<Announcement__Obj_Rel_Insert_Input>;
  pinnedAnnouncementId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaSecret?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Group_Role_Arr_Rel_Insert_Input>;
  secret?: Maybe<Scalars['uuid']>;
  shortName?: Maybe<Scalars['String']>;
  tiltThreshold?: Maybe<Scalars['Int']>;
  tilted?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userCount?: Maybe<Scalars['Int']>;
  users?: Maybe<User_Group_Arr_Rel_Insert_Input>;
  worldchat?: Maybe<Channel_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Group__Max_Fields = {
  __typename?: 'group__max_fields';
  alphaName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultChannelId?: Maybe<Scalars['uuid']>;
  demonym?: Maybe<Scalars['String']>;
  demonymPlural?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  lastYoutubeCheckAt?: Maybe<Scalars['timestamptz']>;
  leaderPrismaId?: Maybe<Scalars['String']>;
  leaderUserId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pinnedAnnouncementId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaSecret?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['uuid']>;
  shortName?: Maybe<Scalars['String']>;
  tiltThreshold?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userCount?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "group_" */
export type Group__Max_Order_By = {
  alphaName?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  defaultChannelId?: Maybe<Order_By>;
  demonym?: Maybe<Order_By>;
  demonymPlural?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  lastYoutubeCheckAt?: Maybe<Order_By>;
  leaderPrismaId?: Maybe<Order_By>;
  leaderUserId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  pinnedAnnouncementId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaSecret?: Maybe<Order_By>;
  secret?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  tiltThreshold?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group__Min_Fields = {
  __typename?: 'group__min_fields';
  alphaName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultChannelId?: Maybe<Scalars['uuid']>;
  demonym?: Maybe<Scalars['String']>;
  demonymPlural?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  lastYoutubeCheckAt?: Maybe<Scalars['timestamptz']>;
  leaderPrismaId?: Maybe<Scalars['String']>;
  leaderUserId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pinnedAnnouncementId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaSecret?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['uuid']>;
  shortName?: Maybe<Scalars['String']>;
  tiltThreshold?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userCount?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "group_" */
export type Group__Min_Order_By = {
  alphaName?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  defaultChannelId?: Maybe<Order_By>;
  demonym?: Maybe<Order_By>;
  demonymPlural?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  lastYoutubeCheckAt?: Maybe<Order_By>;
  leaderPrismaId?: Maybe<Order_By>;
  leaderUserId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  pinnedAnnouncementId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaSecret?: Maybe<Order_By>;
  secret?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  tiltThreshold?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_" */
export type Group__Mutation_Response = {
  __typename?: 'group__mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_>;
};

/** input type for inserting object relation for remote table "group_" */
export type Group__Obj_Rel_Insert_Input = {
  data: Group__Insert_Input;
  on_conflict?: Maybe<Group__On_Conflict>;
};

/** on conflict condition type for table "group_" */
export type Group__On_Conflict = {
  constraint: Group__Constraint;
  update_columns: Array<Group__Update_Column>;
  where?: Maybe<Group__Bool_Exp>;
};

/** ordering options when selecting data from "group_" */
export type Group__Order_By = {
  alphaName?: Maybe<Order_By>;
  announcements_aggregate?: Maybe<Announcement__Aggregate_Order_By>;
  challengeGroup?: Maybe<Challenge_Group_Order_By>;
  channels_aggregate?: Maybe<Channel_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  defaultChannelId?: Maybe<Order_By>;
  demonym?: Maybe<Order_By>;
  demonymPlural?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  events_aggregate?: Maybe<Event__Aggregate_Order_By>;
  groupBadgeTypes_aggregate?: Maybe<Group_Badge_Type_Aggregate_Order_By>;
  hangouts_aggregate?: Maybe<Hangout_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  joinRequests_aggregate?: Maybe<Group_Join_Request_Aggregate_Order_By>;
  joinTitle?: Maybe<Order_By>;
  lastYoutubeCheckAt?: Maybe<Order_By>;
  leaderPrismaId?: Maybe<Order_By>;
  leaderUserId?: Maybe<Order_By>;
  leader_?: Maybe<User__Order_By>;
  name?: Maybe<Order_By>;
  pinnedAnnouncement?: Maybe<Announcement__Order_By>;
  pinnedAnnouncementId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaSecret?: Maybe<Order_By>;
  private?: Maybe<Order_By>;
  roles_aggregate?: Maybe<Group_Role_Aggregate_Order_By>;
  secret?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  tiltThreshold?: Maybe<Order_By>;
  tilted?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Group_Aggregate_Order_By>;
  worldchat?: Maybe<Channel_Order_By>;
};

/** primary key columns input for table: "group_" */
export type Group__Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_" */
export enum Group__Select_Column {
  /** column name */
  AlphaName = 'alphaName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultChannelId = 'defaultChannelId',
  /** column name */
  Demonym = 'demonym',
  /** column name */
  DemonymPlural = 'demonymPlural',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  JoinTitle = 'joinTitle',
  /** column name */
  LastYoutubeCheckAt = 'lastYoutubeCheckAt',
  /** column name */
  LeaderPrismaId = 'leaderPrismaId',
  /** column name */
  LeaderUserId = 'leaderUserId',
  /** column name */
  Name = 'name',
  /** column name */
  PinnedAnnouncementId = 'pinnedAnnouncementId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaSecret = 'prismaSecret',
  /** column name */
  Private = 'private',
  /** column name */
  Secret = 'secret',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  TiltThreshold = 'tiltThreshold',
  /** column name */
  Tilted = 'tilted',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserCount = 'userCount'
}

/** input type for updating data in table "group_" */
export type Group__Set_Input = {
  alphaName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultChannelId?: Maybe<Scalars['uuid']>;
  demonym?: Maybe<Scalars['String']>;
  demonymPlural?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  joinTitle?: Maybe<Group_Join_Title_Enum>;
  lastYoutubeCheckAt?: Maybe<Scalars['timestamptz']>;
  leaderPrismaId?: Maybe<Scalars['String']>;
  leaderUserId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pinnedAnnouncementId?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaSecret?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  secret?: Maybe<Scalars['uuid']>;
  shortName?: Maybe<Scalars['String']>;
  tiltThreshold?: Maybe<Scalars['Int']>;
  tilted?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userCount?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Group__Stddev_Fields = {
  __typename?: 'group__stddev_fields';
  tiltThreshold?: Maybe<Scalars['Float']>;
  userCount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_" */
export type Group__Stddev_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group__Stddev_Pop_Fields = {
  __typename?: 'group__stddev_pop_fields';
  tiltThreshold?: Maybe<Scalars['Float']>;
  userCount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_" */
export type Group__Stddev_Pop_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group__Stddev_Samp_Fields = {
  __typename?: 'group__stddev_samp_fields';
  tiltThreshold?: Maybe<Scalars['Float']>;
  userCount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_" */
export type Group__Stddev_Samp_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Group__Sum_Fields = {
  __typename?: 'group__sum_fields';
  tiltThreshold?: Maybe<Scalars['Int']>;
  userCount?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_" */
export type Group__Sum_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** update columns of table "group_" */
export enum Group__Update_Column {
  /** column name */
  AlphaName = 'alphaName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultChannelId = 'defaultChannelId',
  /** column name */
  Demonym = 'demonym',
  /** column name */
  DemonymPlural = 'demonymPlural',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  JoinTitle = 'joinTitle',
  /** column name */
  LastYoutubeCheckAt = 'lastYoutubeCheckAt',
  /** column name */
  LeaderPrismaId = 'leaderPrismaId',
  /** column name */
  LeaderUserId = 'leaderUserId',
  /** column name */
  Name = 'name',
  /** column name */
  PinnedAnnouncementId = 'pinnedAnnouncementId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaSecret = 'prismaSecret',
  /** column name */
  Private = 'private',
  /** column name */
  Secret = 'secret',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  TiltThreshold = 'tiltThreshold',
  /** column name */
  Tilted = 'tilted',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserCount = 'userCount'
}

/** aggregate var_pop on columns */
export type Group__Var_Pop_Fields = {
  __typename?: 'group__var_pop_fields';
  tiltThreshold?: Maybe<Scalars['Float']>;
  userCount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_" */
export type Group__Var_Pop_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group__Var_Samp_Fields = {
  __typename?: 'group__var_samp_fields';
  tiltThreshold?: Maybe<Scalars['Float']>;
  userCount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_" */
export type Group__Var_Samp_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Group__Variance_Fields = {
  __typename?: 'group__variance_fields';
  tiltThreshold?: Maybe<Scalars['Float']>;
  userCount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_" */
export type Group__Variance_Order_By = {
  tiltThreshold?: Maybe<Order_By>;
  userCount?: Maybe<Order_By>;
};

/** columns and relationships of "group_badge_type" */
export type Group_Badge_Type = {
  __typename?: 'group_badge_type';
  /** An object relationship */
  accomplishmentBadgeType: Accomplishment_Badge_Type;
  badgeType: Accomplishment_Badge_Type_Enum;
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  group: Group_;
  groupId: Scalars['uuid'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  user_badges: Array<User_Badge>;
  /** An aggregated array relationship */
  user_badges_aggregate: User_Badge_Aggregate;
};


/** columns and relationships of "group_badge_type" */
export type Group_Badge_TypeUser_BadgesArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};


/** columns and relationships of "group_badge_type" */
export type Group_Badge_TypeUser_Badges_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};

/** aggregated selection of "group_badge_type" */
export type Group_Badge_Type_Aggregate = {
  __typename?: 'group_badge_type_aggregate';
  aggregate?: Maybe<Group_Badge_Type_Aggregate_Fields>;
  nodes: Array<Group_Badge_Type>;
};

/** aggregate fields of "group_badge_type" */
export type Group_Badge_Type_Aggregate_Fields = {
  __typename?: 'group_badge_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Badge_Type_Max_Fields>;
  min?: Maybe<Group_Badge_Type_Min_Fields>;
};


/** aggregate fields of "group_badge_type" */
export type Group_Badge_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_badge_type" */
export type Group_Badge_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Badge_Type_Max_Order_By>;
  min?: Maybe<Group_Badge_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_badge_type" */
export type Group_Badge_Type_Arr_Rel_Insert_Input = {
  data: Array<Group_Badge_Type_Insert_Input>;
  on_conflict?: Maybe<Group_Badge_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_badge_type". All fields are combined with a logical 'AND'. */
export type Group_Badge_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Badge_Type_Bool_Exp>>>;
  _not?: Maybe<Group_Badge_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Badge_Type_Bool_Exp>>>;
  accomplishmentBadgeType?: Maybe<Accomplishment_Badge_Type_Bool_Exp>;
  badgeType?: Maybe<Accomplishment_Badge_Type_Enum_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  group?: Maybe<Group__Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  user_badges?: Maybe<User_Badge_Bool_Exp>;
};

/** unique or primary key constraints on table "group_badge_type" */
export enum Group_Badge_Type_Constraint {
  /** unique or primary key constraint */
  GroupBadgeTypeGroupIdBadgeTypeKey = 'group_badge_type_group_id_badge_type_key',
  /** unique or primary key constraint */
  GroupBadgeTypePkey = 'group_badge_type_pkey'
}

/** input type for inserting data into table "group_badge_type" */
export type Group_Badge_Type_Insert_Input = {
  accomplishmentBadgeType?: Maybe<Accomplishment_Badge_Type_Obj_Rel_Insert_Input>;
  badgeType?: Maybe<Accomplishment_Badge_Type_Enum>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Group__Obj_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  user_badges?: Maybe<User_Badge_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Group_Badge_Type_Max_Fields = {
  __typename?: 'group_badge_type_max_fields';
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "group_badge_type" */
export type Group_Badge_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Badge_Type_Min_Fields = {
  __typename?: 'group_badge_type_min_fields';
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_badge_type" */
export type Group_Badge_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_badge_type" */
export type Group_Badge_Type_Mutation_Response = {
  __typename?: 'group_badge_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Badge_Type>;
};

/** input type for inserting object relation for remote table "group_badge_type" */
export type Group_Badge_Type_Obj_Rel_Insert_Input = {
  data: Group_Badge_Type_Insert_Input;
  on_conflict?: Maybe<Group_Badge_Type_On_Conflict>;
};

/** on conflict condition type for table "group_badge_type" */
export type Group_Badge_Type_On_Conflict = {
  constraint: Group_Badge_Type_Constraint;
  update_columns: Array<Group_Badge_Type_Update_Column>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};

/** ordering options when selecting data from "group_badge_type" */
export type Group_Badge_Type_Order_By = {
  accomplishmentBadgeType?: Maybe<Accomplishment_Badge_Type_Order_By>;
  badgeType?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  group?: Maybe<Group__Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_badges_aggregate?: Maybe<User_Badge_Aggregate_Order_By>;
};

/** primary key columns input for table: "group_badge_type" */
export type Group_Badge_Type_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_badge_type" */
export enum Group_Badge_Type_Select_Column {
  /** column name */
  BadgeType = 'badgeType',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "group_badge_type" */
export type Group_Badge_Type_Set_Input = {
  badgeType?: Maybe<Accomplishment_Badge_Type_Enum>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "group_badge_type" */
export enum Group_Badge_Type_Update_Column {
  /** column name */
  BadgeType = 'badgeType',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/**
 * join requests for group
 *
 *
 * columns and relationships of "group_join_request"
 */
export type Group_Join_Request = {
  __typename?: 'group_join_request';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  group?: Maybe<Group_>;
  groupId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An object relationship */
  joinRequestStatus: Group_Join_Request_Type;
  prismaUserId?: Maybe<Scalars['String']>;
  status: Group_Join_Request_Type_Enum;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};

/** aggregated selection of "group_join_request" */
export type Group_Join_Request_Aggregate = {
  __typename?: 'group_join_request_aggregate';
  aggregate?: Maybe<Group_Join_Request_Aggregate_Fields>;
  nodes: Array<Group_Join_Request>;
};

/** aggregate fields of "group_join_request" */
export type Group_Join_Request_Aggregate_Fields = {
  __typename?: 'group_join_request_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Join_Request_Max_Fields>;
  min?: Maybe<Group_Join_Request_Min_Fields>;
};


/** aggregate fields of "group_join_request" */
export type Group_Join_Request_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Join_Request_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_request" */
export type Group_Join_Request_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Join_Request_Max_Order_By>;
  min?: Maybe<Group_Join_Request_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_request" */
export type Group_Join_Request_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Request_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Request_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_request". All fields are combined with a logical 'AND'. */
export type Group_Join_Request_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Join_Request_Bool_Exp>>>;
  _not?: Maybe<Group_Join_Request_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Join_Request_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Group__Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  joinRequestStatus?: Maybe<Group_Join_Request_Type_Bool_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  status?: Maybe<Group_Join_Request_Type_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/** unique or primary key constraints on table "group_join_request" */
export enum Group_Join_Request_Constraint {
  /** unique or primary key constraint */
  GroupJoinRequestGroupIdUserIdKey = 'group_join_request_group_id_user_id_key',
  /** unique or primary key constraint */
  GroupJoinRequestPkey = 'group_join_request_pkey'
}

/** input type for inserting data into table "group_join_request" */
export type Group_Join_Request_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Group__Obj_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  joinRequestStatus?: Maybe<Group_Join_Request_Type_Obj_Rel_Insert_Input>;
  prismaUserId?: Maybe<Scalars['String']>;
  status?: Maybe<Group_Join_Request_Type_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Group_Join_Request_Max_Fields = {
  __typename?: 'group_join_request_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "group_join_request" */
export type Group_Join_Request_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Join_Request_Min_Fields = {
  __typename?: 'group_join_request_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "group_join_request" */
export type Group_Join_Request_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_join_request" */
export type Group_Join_Request_Mutation_Response = {
  __typename?: 'group_join_request_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Join_Request>;
};

/** input type for inserting object relation for remote table "group_join_request" */
export type Group_Join_Request_Obj_Rel_Insert_Input = {
  data: Group_Join_Request_Insert_Input;
  on_conflict?: Maybe<Group_Join_Request_On_Conflict>;
};

/** on conflict condition type for table "group_join_request" */
export type Group_Join_Request_On_Conflict = {
  constraint: Group_Join_Request_Constraint;
  update_columns: Array<Group_Join_Request_Update_Column>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};

/** ordering options when selecting data from "group_join_request" */
export type Group_Join_Request_Order_By = {
  createdAt?: Maybe<Order_By>;
  group?: Maybe<Group__Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  joinRequestStatus?: Maybe<Group_Join_Request_Type_Order_By>;
  prismaUserId?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "group_join_request" */
export type Group_Join_Request_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_join_request" */
export enum Group_Join_Request_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "group_join_request" */
export type Group_Join_Request_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  status?: Maybe<Group_Join_Request_Type_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/**
 * join request types
 *
 *
 * columns and relationships of "group_join_request_type"
 */
export type Group_Join_Request_Type = {
  __typename?: 'group_join_request_type';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  joinRequests: Array<Group_Join_Request>;
  /** An aggregated array relationship */
  joinRequests_aggregate: Group_Join_Request_Aggregate;
  value: Scalars['String'];
};


/**
 * join request types
 *
 *
 * columns and relationships of "group_join_request_type"
 */
export type Group_Join_Request_TypeJoinRequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/**
 * join request types
 *
 *
 * columns and relationships of "group_join_request_type"
 */
export type Group_Join_Request_TypeJoinRequests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};

/** aggregated selection of "group_join_request_type" */
export type Group_Join_Request_Type_Aggregate = {
  __typename?: 'group_join_request_type_aggregate';
  aggregate?: Maybe<Group_Join_Request_Type_Aggregate_Fields>;
  nodes: Array<Group_Join_Request_Type>;
};

/** aggregate fields of "group_join_request_type" */
export type Group_Join_Request_Type_Aggregate_Fields = {
  __typename?: 'group_join_request_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Join_Request_Type_Max_Fields>;
  min?: Maybe<Group_Join_Request_Type_Min_Fields>;
};


/** aggregate fields of "group_join_request_type" */
export type Group_Join_Request_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Join_Request_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_request_type" */
export type Group_Join_Request_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Join_Request_Type_Max_Order_By>;
  min?: Maybe<Group_Join_Request_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_request_type" */
export type Group_Join_Request_Type_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Request_Type_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Request_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_request_type". All fields are combined with a logical 'AND'. */
export type Group_Join_Request_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Join_Request_Type_Bool_Exp>>>;
  _not?: Maybe<Group_Join_Request_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Join_Request_Type_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  joinRequests?: Maybe<Group_Join_Request_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_request_type" */
export enum Group_Join_Request_Type_Constraint {
  /** unique or primary key constraint */
  GroupJoinRequestTypePkey = 'group_join_request_type_pkey'
}

export enum Group_Join_Request_Type_Enum {
  Approved = 'approved',
  Pending = 'pending',
  Rejected = 'rejected'
}

/** expression to compare columns of type group_join_request_type_enum. All fields are combined with logical 'AND'. */
export type Group_Join_Request_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Group_Join_Request_Type_Enum>;
  _in?: Maybe<Array<Group_Join_Request_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Group_Join_Request_Type_Enum>;
  _nin?: Maybe<Array<Group_Join_Request_Type_Enum>>;
};

/** input type for inserting data into table "group_join_request_type" */
export type Group_Join_Request_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  joinRequests?: Maybe<Group_Join_Request_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Join_Request_Type_Max_Fields = {
  __typename?: 'group_join_request_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "group_join_request_type" */
export type Group_Join_Request_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Join_Request_Type_Min_Fields = {
  __typename?: 'group_join_request_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_join_request_type" */
export type Group_Join_Request_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_join_request_type" */
export type Group_Join_Request_Type_Mutation_Response = {
  __typename?: 'group_join_request_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Join_Request_Type>;
};

/** input type for inserting object relation for remote table "group_join_request_type" */
export type Group_Join_Request_Type_Obj_Rel_Insert_Input = {
  data: Group_Join_Request_Type_Insert_Input;
  on_conflict?: Maybe<Group_Join_Request_Type_On_Conflict>;
};

/** on conflict condition type for table "group_join_request_type" */
export type Group_Join_Request_Type_On_Conflict = {
  constraint: Group_Join_Request_Type_Constraint;
  update_columns: Array<Group_Join_Request_Type_Update_Column>;
  where?: Maybe<Group_Join_Request_Type_Bool_Exp>;
};

/** ordering options when selecting data from "group_join_request_type" */
export type Group_Join_Request_Type_Order_By = {
  description?: Maybe<Order_By>;
  joinRequests_aggregate?: Maybe<Group_Join_Request_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "group_join_request_type" */
export type Group_Join_Request_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "group_join_request_type" */
export enum Group_Join_Request_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "group_join_request_type" */
export type Group_Join_Request_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "group_join_request_type" */
export enum Group_Join_Request_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** update columns of table "group_join_request" */
export enum Group_Join_Request_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "group_join_title" */
export type Group_Join_Title = {
  __typename?: 'group_join_title';
  title?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "group_join_title" */
export type Group_Join_Title_Aggregate = {
  __typename?: 'group_join_title_aggregate';
  aggregate?: Maybe<Group_Join_Title_Aggregate_Fields>;
  nodes: Array<Group_Join_Title>;
};

/** aggregate fields of "group_join_title" */
export type Group_Join_Title_Aggregate_Fields = {
  __typename?: 'group_join_title_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Join_Title_Max_Fields>;
  min?: Maybe<Group_Join_Title_Min_Fields>;
};


/** aggregate fields of "group_join_title" */
export type Group_Join_Title_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Join_Title_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_title" */
export type Group_Join_Title_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Join_Title_Max_Order_By>;
  min?: Maybe<Group_Join_Title_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_title" */
export type Group_Join_Title_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Title_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Title_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_title". All fields are combined with a logical 'AND'. */
export type Group_Join_Title_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Join_Title_Bool_Exp>>>;
  _not?: Maybe<Group_Join_Title_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Join_Title_Bool_Exp>>>;
  title?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_title" */
export enum Group_Join_Title_Constraint {
  /** unique or primary key constraint */
  GroupJoinTitlePkey = 'group_join_title_pkey'
}

export enum Group_Join_Title_Enum {
  /** Who will be your accountability buddy? */
  Accountability = 'accountability',
  /** Get access to exclusive groupchats when you invite a friend. Who will you bring? */
  Exclusive = 'exclusive',
  /** Who else would like meditation? */
  Meditation = 'meditation',
  /** I nominate you! */
  Nominate = 'nominate',
  /**  community brings in friends who love self care!\nWho will you bring? */
  Selfcare = 'selfcare',
  /** I challenge you! Let’s see who wins */
  Win = 'win'
}

/** expression to compare columns of type group_join_title_enum. All fields are combined with logical 'AND'. */
export type Group_Join_Title_Enum_Comparison_Exp = {
  _eq?: Maybe<Group_Join_Title_Enum>;
  _in?: Maybe<Array<Group_Join_Title_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Group_Join_Title_Enum>;
  _nin?: Maybe<Array<Group_Join_Title_Enum>>;
};

/** input type for inserting data into table "group_join_title" */
export type Group_Join_Title_Insert_Input = {
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Join_Title_Max_Fields = {
  __typename?: 'group_join_title_max_fields';
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "group_join_title" */
export type Group_Join_Title_Max_Order_By = {
  title?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Join_Title_Min_Fields = {
  __typename?: 'group_join_title_min_fields';
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_join_title" */
export type Group_Join_Title_Min_Order_By = {
  title?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_join_title" */
export type Group_Join_Title_Mutation_Response = {
  __typename?: 'group_join_title_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Join_Title>;
};

/** input type for inserting object relation for remote table "group_join_title" */
export type Group_Join_Title_Obj_Rel_Insert_Input = {
  data: Group_Join_Title_Insert_Input;
  on_conflict?: Maybe<Group_Join_Title_On_Conflict>;
};

/** on conflict condition type for table "group_join_title" */
export type Group_Join_Title_On_Conflict = {
  constraint: Group_Join_Title_Constraint;
  update_columns: Array<Group_Join_Title_Update_Column>;
  where?: Maybe<Group_Join_Title_Bool_Exp>;
};

/** ordering options when selecting data from "group_join_title" */
export type Group_Join_Title_Order_By = {
  title?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "group_join_title" */
export type Group_Join_Title_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "group_join_title" */
export enum Group_Join_Title_Select_Column {
  /** column name */
  Title = 'title',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "group_join_title" */
export type Group_Join_Title_Set_Input = {
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "group_join_title" */
export enum Group_Join_Title_Update_Column {
  /** column name */
  Title = 'title',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "group_role" */
export type Group_Role = {
  __typename?: 'group_role';
  /** An object relationship */
  group?: Maybe<Group_>;
  groupId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  prismaUserId?: Maybe<Scalars['String']>;
  /** An object relationship */
  roleType: Role;
  type: Role_Enum;
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};

/** aggregated selection of "group_role" */
export type Group_Role_Aggregate = {
  __typename?: 'group_role_aggregate';
  aggregate?: Maybe<Group_Role_Aggregate_Fields>;
  nodes: Array<Group_Role>;
};

/** aggregate fields of "group_role" */
export type Group_Role_Aggregate_Fields = {
  __typename?: 'group_role_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Role_Max_Fields>;
  min?: Maybe<Group_Role_Min_Fields>;
};


/** aggregate fields of "group_role" */
export type Group_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_role" */
export type Group_Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Role_Max_Order_By>;
  min?: Maybe<Group_Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_role" */
export type Group_Role_Arr_Rel_Insert_Input = {
  data: Array<Group_Role_Insert_Input>;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_role". All fields are combined with a logical 'AND'. */
export type Group_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Role_Bool_Exp>>>;
  _not?: Maybe<Group_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Role_Bool_Exp>>>;
  group?: Maybe<Group__Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  roleType?: Maybe<Role_Bool_Exp>;
  type?: Maybe<Role_Enum_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/** unique or primary key constraints on table "group_role" */
export enum Group_Role_Constraint {
  /** unique or primary key constraint */
  GroupRolePkey = 'group_role_pkey',
  /** unique or primary key constraint */
  GroupRoleUserIdGroupIdKey = 'group_role_user_id_group_id_key'
}

/** input type for inserting data into table "group_role" */
export type Group_Role_Insert_Input = {
  group?: Maybe<Group__Obj_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  roleType?: Maybe<Role_Obj_Rel_Insert_Input>;
  type?: Maybe<Role_Enum>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Group_Role_Max_Fields = {
  __typename?: 'group_role_max_fields';
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "group_role" */
export type Group_Role_Max_Order_By = {
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Role_Min_Fields = {
  __typename?: 'group_role_min_fields';
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "group_role" */
export type Group_Role_Min_Order_By = {
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_role" */
export type Group_Role_Mutation_Response = {
  __typename?: 'group_role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Role>;
};

/** input type for inserting object relation for remote table "group_role" */
export type Group_Role_Obj_Rel_Insert_Input = {
  data: Group_Role_Insert_Input;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};

/** on conflict condition type for table "group_role" */
export type Group_Role_On_Conflict = {
  constraint: Group_Role_Constraint;
  update_columns: Array<Group_Role_Update_Column>;
  where?: Maybe<Group_Role_Bool_Exp>;
};

/** ordering options when selecting data from "group_role" */
export type Group_Role_Order_By = {
  group?: Maybe<Group__Order_By>;
  groupId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  roleType?: Maybe<Role_Order_By>;
  type?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "group_role" */
export type Group_Role_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_role" */
export enum Group_Role_Select_Column {
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "group_role" */
export type Group_Role_Set_Input = {
  groupId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  prismaUserId?: Maybe<Scalars['String']>;
  type?: Maybe<Role_Enum>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "group_role" */
export enum Group_Role_Update_Column {
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/**
 * Live hangouts table
 *
 *
 * columns and relationships of "hangout"
 */
export type Hangout = {
  __typename?: 'hangout';
  channel_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamp'];
  /** An object relationship */
  creator: User_;
  creator_id: Scalars['uuid'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  end_date?: Maybe<Scalars['timestamptz']>;
  exclusive_prompt?: Maybe<Scalars['String']>;
  /** An object relationship */
  file: File;
  file_id: Scalars['uuid'];
  /** An object relationship */
  group: Group_;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  link: Scalars['String'];
  meeting_id?: Maybe<Scalars['String']>;
  meeting_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  requirements: Array<Hangout_Requirement>;
  /** An aggregated array relationship */
  requirements_aggregate: Hangout_Requirement_Aggregate;
  start_date: Scalars['timestamp'];
  title: Scalars['String'];
  updated_at: Scalars['timestamp'];
};


/**
 * Live hangouts table
 *
 *
 * columns and relationships of "hangout"
 */
export type HangoutRequirementsArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};


/**
 * Live hangouts table
 *
 *
 * columns and relationships of "hangout"
 */
export type HangoutRequirements_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};

/** aggregated selection of "hangout" */
export type Hangout_Aggregate = {
  __typename?: 'hangout_aggregate';
  aggregate?: Maybe<Hangout_Aggregate_Fields>;
  nodes: Array<Hangout>;
};

/** aggregate fields of "hangout" */
export type Hangout_Aggregate_Fields = {
  __typename?: 'hangout_aggregate_fields';
  avg?: Maybe<Hangout_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hangout_Max_Fields>;
  min?: Maybe<Hangout_Min_Fields>;
  stddev?: Maybe<Hangout_Stddev_Fields>;
  stddev_pop?: Maybe<Hangout_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hangout_Stddev_Samp_Fields>;
  sum?: Maybe<Hangout_Sum_Fields>;
  var_pop?: Maybe<Hangout_Var_Pop_Fields>;
  var_samp?: Maybe<Hangout_Var_Samp_Fields>;
  variance?: Maybe<Hangout_Variance_Fields>;
};


/** aggregate fields of "hangout" */
export type Hangout_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hangout_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hangout" */
export type Hangout_Aggregate_Order_By = {
  avg?: Maybe<Hangout_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Hangout_Max_Order_By>;
  min?: Maybe<Hangout_Min_Order_By>;
  stddev?: Maybe<Hangout_Stddev_Order_By>;
  stddev_pop?: Maybe<Hangout_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Hangout_Stddev_Samp_Order_By>;
  sum?: Maybe<Hangout_Sum_Order_By>;
  var_pop?: Maybe<Hangout_Var_Pop_Order_By>;
  var_samp?: Maybe<Hangout_Var_Samp_Order_By>;
  variance?: Maybe<Hangout_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "hangout" */
export type Hangout_Arr_Rel_Insert_Input = {
  data: Array<Hangout_Insert_Input>;
  on_conflict?: Maybe<Hangout_On_Conflict>;
};

/** aggregate avg on columns */
export type Hangout_Avg_Fields = {
  __typename?: 'hangout_avg_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "hangout" */
export type Hangout_Avg_Order_By = {
  duration?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hangout". All fields are combined with a logical 'AND'. */
export type Hangout_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hangout_Bool_Exp>>>;
  _not?: Maybe<Hangout_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hangout_Bool_Exp>>>;
  channel_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  creator?: Maybe<User__Bool_Exp>;
  creator_id?: Maybe<Uuid_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  duration?: Maybe<Int_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  exclusive_prompt?: Maybe<String_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  file_id?: Maybe<Uuid_Comparison_Exp>;
  group?: Maybe<Group__Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  link?: Maybe<String_Comparison_Exp>;
  meeting_id?: Maybe<String_Comparison_Exp>;
  meeting_url?: Maybe<String_Comparison_Exp>;
  requirements?: Maybe<Hangout_Requirement_Bool_Exp>;
  start_date?: Maybe<Timestamp_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "hangout" */
export enum Hangout_Constraint {
  /** unique or primary key constraint */
  HangoutPkey = 'hangout_pkey'
}

/** input type for incrementing integer column in table "hangout" */
export type Hangout_Inc_Input = {
  duration?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "hangout" */
export type Hangout_Insert_Input = {
  channel_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  creator?: Maybe<User__Obj_Rel_Insert_Input>;
  creator_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclusive_prompt?: Maybe<Scalars['String']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars['uuid']>;
  group?: Maybe<Group__Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  meeting_id?: Maybe<Scalars['String']>;
  meeting_url?: Maybe<Scalars['String']>;
  requirements?: Maybe<Hangout_Requirement_Arr_Rel_Insert_Input>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Hangout_Max_Fields = {
  __typename?: 'hangout_max_fields';
  channel_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  creator_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclusive_prompt?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  meeting_id?: Maybe<Scalars['String']>;
  meeting_url?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "hangout" */
export type Hangout_Max_Order_By = {
  channel_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creator_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclusive_prompt?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  meeting_id?: Maybe<Order_By>;
  meeting_url?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Hangout_Min_Fields = {
  __typename?: 'hangout_min_fields';
  channel_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  creator_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclusive_prompt?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  meeting_id?: Maybe<Scalars['String']>;
  meeting_url?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "hangout" */
export type Hangout_Min_Order_By = {
  channel_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creator_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclusive_prompt?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  meeting_id?: Maybe<Order_By>;
  meeting_url?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "hangout" */
export type Hangout_Mutation_Response = {
  __typename?: 'hangout_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Hangout>;
};

/** input type for inserting object relation for remote table "hangout" */
export type Hangout_Obj_Rel_Insert_Input = {
  data: Hangout_Insert_Input;
  on_conflict?: Maybe<Hangout_On_Conflict>;
};

/** on conflict condition type for table "hangout" */
export type Hangout_On_Conflict = {
  constraint: Hangout_Constraint;
  update_columns: Array<Hangout_Update_Column>;
  where?: Maybe<Hangout_Bool_Exp>;
};

/** ordering options when selecting data from "hangout" */
export type Hangout_Order_By = {
  channel_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creator?: Maybe<User__Order_By>;
  creator_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclusive_prompt?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  file_id?: Maybe<Order_By>;
  group?: Maybe<Group__Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  meeting_id?: Maybe<Order_By>;
  meeting_url?: Maybe<Order_By>;
  requirements_aggregate?: Maybe<Hangout_Requirement_Aggregate_Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "hangout" */
export type Hangout_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/**
 * Requirement for user to join hangout
 *
 *
 * columns and relationships of "hangout_requirement"
 */
export type Hangout_Requirement = {
  __typename?: 'hangout_requirement';
  amount_paid: Scalars['Int'];
  created_at: Scalars['timestamp'];
  /** An object relationship */
  hangout: Hangout;
  hangout_id: Scalars['uuid'];
  invites_sent: Scalars['Int'];
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user_: User_;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "hangout_requirement" */
export type Hangout_Requirement_Aggregate = {
  __typename?: 'hangout_requirement_aggregate';
  aggregate?: Maybe<Hangout_Requirement_Aggregate_Fields>;
  nodes: Array<Hangout_Requirement>;
};

/** aggregate fields of "hangout_requirement" */
export type Hangout_Requirement_Aggregate_Fields = {
  __typename?: 'hangout_requirement_aggregate_fields';
  avg?: Maybe<Hangout_Requirement_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hangout_Requirement_Max_Fields>;
  min?: Maybe<Hangout_Requirement_Min_Fields>;
  stddev?: Maybe<Hangout_Requirement_Stddev_Fields>;
  stddev_pop?: Maybe<Hangout_Requirement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hangout_Requirement_Stddev_Samp_Fields>;
  sum?: Maybe<Hangout_Requirement_Sum_Fields>;
  var_pop?: Maybe<Hangout_Requirement_Var_Pop_Fields>;
  var_samp?: Maybe<Hangout_Requirement_Var_Samp_Fields>;
  variance?: Maybe<Hangout_Requirement_Variance_Fields>;
};


/** aggregate fields of "hangout_requirement" */
export type Hangout_Requirement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hangout_requirement" */
export type Hangout_Requirement_Aggregate_Order_By = {
  avg?: Maybe<Hangout_Requirement_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Hangout_Requirement_Max_Order_By>;
  min?: Maybe<Hangout_Requirement_Min_Order_By>;
  stddev?: Maybe<Hangout_Requirement_Stddev_Order_By>;
  stddev_pop?: Maybe<Hangout_Requirement_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Hangout_Requirement_Stddev_Samp_Order_By>;
  sum?: Maybe<Hangout_Requirement_Sum_Order_By>;
  var_pop?: Maybe<Hangout_Requirement_Var_Pop_Order_By>;
  var_samp?: Maybe<Hangout_Requirement_Var_Samp_Order_By>;
  variance?: Maybe<Hangout_Requirement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "hangout_requirement" */
export type Hangout_Requirement_Arr_Rel_Insert_Input = {
  data: Array<Hangout_Requirement_Insert_Input>;
  on_conflict?: Maybe<Hangout_Requirement_On_Conflict>;
};

/** aggregate avg on columns */
export type Hangout_Requirement_Avg_Fields = {
  __typename?: 'hangout_requirement_avg_fields';
  amount_paid?: Maybe<Scalars['Float']>;
  invites_sent?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Avg_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hangout_requirement". All fields are combined with a logical 'AND'. */
export type Hangout_Requirement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hangout_Requirement_Bool_Exp>>>;
  _not?: Maybe<Hangout_Requirement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hangout_Requirement_Bool_Exp>>>;
  amount_paid?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  hangout?: Maybe<Hangout_Bool_Exp>;
  hangout_id?: Maybe<Uuid_Comparison_Exp>;
  invites_sent?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "hangout_requirement" */
export enum Hangout_Requirement_Constraint {
  /** unique or primary key constraint */
  HangoutRequirementPkey = 'hangout_requirement_pkey'
}

/** input type for incrementing integer column in table "hangout_requirement" */
export type Hangout_Requirement_Inc_Input = {
  amount_paid?: Maybe<Scalars['Int']>;
  invites_sent?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "hangout_requirement" */
export type Hangout_Requirement_Insert_Input = {
  amount_paid?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  hangout?: Maybe<Hangout_Obj_Rel_Insert_Input>;
  hangout_id?: Maybe<Scalars['uuid']>;
  invites_sent?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Hangout_Requirement_Max_Fields = {
  __typename?: 'hangout_requirement_max_fields';
  amount_paid?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  hangout_id?: Maybe<Scalars['uuid']>;
  invites_sent?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Max_Order_By = {
  amount_paid?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  hangout_id?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Hangout_Requirement_Min_Fields = {
  __typename?: 'hangout_requirement_min_fields';
  amount_paid?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  hangout_id?: Maybe<Scalars['uuid']>;
  invites_sent?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Min_Order_By = {
  amount_paid?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  hangout_id?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "hangout_requirement" */
export type Hangout_Requirement_Mutation_Response = {
  __typename?: 'hangout_requirement_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Hangout_Requirement>;
};

/** input type for inserting object relation for remote table "hangout_requirement" */
export type Hangout_Requirement_Obj_Rel_Insert_Input = {
  data: Hangout_Requirement_Insert_Input;
  on_conflict?: Maybe<Hangout_Requirement_On_Conflict>;
};

/** on conflict condition type for table "hangout_requirement" */
export type Hangout_Requirement_On_Conflict = {
  constraint: Hangout_Requirement_Constraint;
  update_columns: Array<Hangout_Requirement_Update_Column>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};

/** ordering options when selecting data from "hangout_requirement" */
export type Hangout_Requirement_Order_By = {
  amount_paid?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  hangout?: Maybe<Hangout_Order_By>;
  hangout_id?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "hangout_requirement" */
export type Hangout_Requirement_Pk_Columns_Input = {
  hangout_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "hangout_requirement" */
export enum Hangout_Requirement_Select_Column {
  /** column name */
  AmountPaid = 'amount_paid',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HangoutId = 'hangout_id',
  /** column name */
  InvitesSent = 'invites_sent',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "hangout_requirement" */
export type Hangout_Requirement_Set_Input = {
  amount_paid?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  hangout_id?: Maybe<Scalars['uuid']>;
  invites_sent?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Hangout_Requirement_Stddev_Fields = {
  __typename?: 'hangout_requirement_stddev_fields';
  amount_paid?: Maybe<Scalars['Float']>;
  invites_sent?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Stddev_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Hangout_Requirement_Stddev_Pop_Fields = {
  __typename?: 'hangout_requirement_stddev_pop_fields';
  amount_paid?: Maybe<Scalars['Float']>;
  invites_sent?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Stddev_Pop_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Hangout_Requirement_Stddev_Samp_Fields = {
  __typename?: 'hangout_requirement_stddev_samp_fields';
  amount_paid?: Maybe<Scalars['Float']>;
  invites_sent?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Stddev_Samp_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Hangout_Requirement_Sum_Fields = {
  __typename?: 'hangout_requirement_sum_fields';
  amount_paid?: Maybe<Scalars['Int']>;
  invites_sent?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Sum_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** update columns of table "hangout_requirement" */
export enum Hangout_Requirement_Update_Column {
  /** column name */
  AmountPaid = 'amount_paid',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HangoutId = 'hangout_id',
  /** column name */
  InvitesSent = 'invites_sent',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Hangout_Requirement_Var_Pop_Fields = {
  __typename?: 'hangout_requirement_var_pop_fields';
  amount_paid?: Maybe<Scalars['Float']>;
  invites_sent?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Var_Pop_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Hangout_Requirement_Var_Samp_Fields = {
  __typename?: 'hangout_requirement_var_samp_fields';
  amount_paid?: Maybe<Scalars['Float']>;
  invites_sent?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Var_Samp_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Hangout_Requirement_Variance_Fields = {
  __typename?: 'hangout_requirement_variance_fields';
  amount_paid?: Maybe<Scalars['Float']>;
  invites_sent?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "hangout_requirement" */
export type Hangout_Requirement_Variance_Order_By = {
  amount_paid?: Maybe<Order_By>;
  invites_sent?: Maybe<Order_By>;
};

/** select columns of table "hangout" */
export enum Hangout_Select_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ExclusivePrompt = 'exclusive_prompt',
  /** column name */
  FileId = 'file_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  MeetingId = 'meeting_id',
  /** column name */
  MeetingUrl = 'meeting_url',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "hangout" */
export type Hangout_Set_Input = {
  channel_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  creator_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclusive_prompt?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  meeting_id?: Maybe<Scalars['String']>;
  meeting_url?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Hangout_Stddev_Fields = {
  __typename?: 'hangout_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "hangout" */
export type Hangout_Stddev_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Hangout_Stddev_Pop_Fields = {
  __typename?: 'hangout_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "hangout" */
export type Hangout_Stddev_Pop_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Hangout_Stddev_Samp_Fields = {
  __typename?: 'hangout_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "hangout" */
export type Hangout_Stddev_Samp_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Hangout_Sum_Fields = {
  __typename?: 'hangout_sum_fields';
  duration?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hangout" */
export type Hangout_Sum_Order_By = {
  duration?: Maybe<Order_By>;
};

/** update columns of table "hangout" */
export enum Hangout_Update_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ExclusivePrompt = 'exclusive_prompt',
  /** column name */
  FileId = 'file_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  MeetingId = 'meeting_id',
  /** column name */
  MeetingUrl = 'meeting_url',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Hangout_Var_Pop_Fields = {
  __typename?: 'hangout_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "hangout" */
export type Hangout_Var_Pop_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Hangout_Var_Samp_Fields = {
  __typename?: 'hangout_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "hangout" */
export type Hangout_Var_Samp_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Hangout_Variance_Fields = {
  __typename?: 'hangout_variance_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "hangout" */
export type Hangout_Variance_Order_By = {
  duration?: Maybe<Order_By>;
};

/**
 * in-app notifications
 *
 *
 * columns and relationships of "internal_notification"
 */
export type Internal_Notification = {
  __typename?: 'internal_notification';
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  navEntryId?: Maybe<Scalars['String']>;
  navGroupHasuraId?: Maybe<Scalars['String']>;
  navGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaRecipientId?: Maybe<Scalars['String']>;
  prismaSenderId?: Maybe<Scalars['String']>;
  read: Scalars['Boolean'];
  /** An object relationship */
  recipient?: Maybe<User_>;
  recipientId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  sender?: Maybe<User_>;
  senderId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "internal_notification" */
export type Internal_Notification_Aggregate = {
  __typename?: 'internal_notification_aggregate';
  aggregate?: Maybe<Internal_Notification_Aggregate_Fields>;
  nodes: Array<Internal_Notification>;
};

/** aggregate fields of "internal_notification" */
export type Internal_Notification_Aggregate_Fields = {
  __typename?: 'internal_notification_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Internal_Notification_Max_Fields>;
  min?: Maybe<Internal_Notification_Min_Fields>;
};


/** aggregate fields of "internal_notification" */
export type Internal_Notification_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Internal_Notification_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "internal_notification" */
export type Internal_Notification_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Internal_Notification_Max_Order_By>;
  min?: Maybe<Internal_Notification_Min_Order_By>;
};

/** input type for inserting array relation for remote table "internal_notification" */
export type Internal_Notification_Arr_Rel_Insert_Input = {
  data: Array<Internal_Notification_Insert_Input>;
  on_conflict?: Maybe<Internal_Notification_On_Conflict>;
};

/** Boolean expression to filter rows from the table "internal_notification". All fields are combined with a logical 'AND'. */
export type Internal_Notification_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Internal_Notification_Bool_Exp>>>;
  _not?: Maybe<Internal_Notification_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Internal_Notification_Bool_Exp>>>;
  body?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  navEntryId?: Maybe<String_Comparison_Exp>;
  navGroupHasuraId?: Maybe<String_Comparison_Exp>;
  navGroupId?: Maybe<String_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaRecipientId?: Maybe<String_Comparison_Exp>;
  prismaSenderId?: Maybe<String_Comparison_Exp>;
  read?: Maybe<Boolean_Comparison_Exp>;
  recipient?: Maybe<User__Bool_Exp>;
  recipientId?: Maybe<Uuid_Comparison_Exp>;
  sender?: Maybe<User__Bool_Exp>;
  senderId?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "internal_notification" */
export enum Internal_Notification_Constraint {
  /** unique or primary key constraint */
  InternalNotificationPrismaIdKey = 'internal_notification_prisma_id_key',
  /** unique or primary key constraint */
  NotificationPkey = 'notification_pkey'
}

/** input type for inserting data into table "internal_notification" */
export type Internal_Notification_Insert_Input = {
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  navEntryId?: Maybe<Scalars['String']>;
  navGroupHasuraId?: Maybe<Scalars['String']>;
  navGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaRecipientId?: Maybe<Scalars['String']>;
  prismaSenderId?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  recipient?: Maybe<User__Obj_Rel_Insert_Input>;
  recipientId?: Maybe<Scalars['uuid']>;
  sender?: Maybe<User__Obj_Rel_Insert_Input>;
  senderId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Internal_Notification_Max_Fields = {
  __typename?: 'internal_notification_max_fields';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  navEntryId?: Maybe<Scalars['String']>;
  navGroupHasuraId?: Maybe<Scalars['String']>;
  navGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaRecipientId?: Maybe<Scalars['String']>;
  prismaSenderId?: Maybe<Scalars['String']>;
  recipientId?: Maybe<Scalars['uuid']>;
  senderId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "internal_notification" */
export type Internal_Notification_Max_Order_By = {
  body?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  navEntryId?: Maybe<Order_By>;
  navGroupHasuraId?: Maybe<Order_By>;
  navGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaRecipientId?: Maybe<Order_By>;
  prismaSenderId?: Maybe<Order_By>;
  recipientId?: Maybe<Order_By>;
  senderId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Internal_Notification_Min_Fields = {
  __typename?: 'internal_notification_min_fields';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  navEntryId?: Maybe<Scalars['String']>;
  navGroupHasuraId?: Maybe<Scalars['String']>;
  navGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaRecipientId?: Maybe<Scalars['String']>;
  prismaSenderId?: Maybe<Scalars['String']>;
  recipientId?: Maybe<Scalars['uuid']>;
  senderId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "internal_notification" */
export type Internal_Notification_Min_Order_By = {
  body?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  navEntryId?: Maybe<Order_By>;
  navGroupHasuraId?: Maybe<Order_By>;
  navGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaRecipientId?: Maybe<Order_By>;
  prismaSenderId?: Maybe<Order_By>;
  recipientId?: Maybe<Order_By>;
  senderId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "internal_notification" */
export type Internal_Notification_Mutation_Response = {
  __typename?: 'internal_notification_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Internal_Notification>;
};

/** input type for inserting object relation for remote table "internal_notification" */
export type Internal_Notification_Obj_Rel_Insert_Input = {
  data: Internal_Notification_Insert_Input;
  on_conflict?: Maybe<Internal_Notification_On_Conflict>;
};

/** on conflict condition type for table "internal_notification" */
export type Internal_Notification_On_Conflict = {
  constraint: Internal_Notification_Constraint;
  update_columns: Array<Internal_Notification_Update_Column>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};

/** ordering options when selecting data from "internal_notification" */
export type Internal_Notification_Order_By = {
  body?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  navEntryId?: Maybe<Order_By>;
  navGroupHasuraId?: Maybe<Order_By>;
  navGroupId?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaRecipientId?: Maybe<Order_By>;
  prismaSenderId?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  recipient?: Maybe<User__Order_By>;
  recipientId?: Maybe<Order_By>;
  sender?: Maybe<User__Order_By>;
  senderId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "internal_notification" */
export type Internal_Notification_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "internal_notification" */
export enum Internal_Notification_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  NavEntryId = 'navEntryId',
  /** column name */
  NavGroupHasuraId = 'navGroupHasuraId',
  /** column name */
  NavGroupId = 'navGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaRecipientId = 'prismaRecipientId',
  /** column name */
  PrismaSenderId = 'prismaSenderId',
  /** column name */
  Read = 'read',
  /** column name */
  RecipientId = 'recipientId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "internal_notification" */
export type Internal_Notification_Set_Input = {
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  navEntryId?: Maybe<Scalars['String']>;
  navGroupHasuraId?: Maybe<Scalars['String']>;
  navGroupId?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaRecipientId?: Maybe<Scalars['String']>;
  prismaSenderId?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  recipientId?: Maybe<Scalars['uuid']>;
  senderId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "internal_notification" */
export enum Internal_Notification_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  NavEntryId = 'navEntryId',
  /** column name */
  NavGroupHasuraId = 'navGroupHasuraId',
  /** column name */
  NavGroupId = 'navGroupId',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaRecipientId = 'prismaRecipientId',
  /** column name */
  PrismaSenderId = 'prismaSenderId',
  /** column name */
  Read = 'read',
  /** column name */
  RecipientId = 'recipientId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** fields of action: "log_amplitude_event" */
export type Log_Amplitude_Event = {
  __typename?: 'log_amplitude_event';
  /** the time at which this action was created */
  created_at?: Maybe<Scalars['timestamptz']>;
  /** errors related to the invocation */
  errors?: Maybe<Scalars['json']>;
  /** the unique id of an action */
  id?: Maybe<Scalars['uuid']>;
  /** the output fields of this action */
  output?: Maybe<LambdaOutput>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "deactivate_account" */
  deactivate_account: Scalars['uuid'];
  /** delete data from the table: "accomplishment_badge_type" */
  delete_accomplishment_badge_type?: Maybe<Accomplishment_Badge_Type_Mutation_Response>;
  /** delete single row from the table: "accomplishment_badge_type" */
  delete_accomplishment_badge_type_by_pk?: Maybe<Accomplishment_Badge_Type>;
  /** delete data from the table: "announcement_" */
  delete_announcement_?: Maybe<Announcement__Mutation_Response>;
  /** delete single row from the table: "announcement_" */
  delete_announcement__by_pk?: Maybe<Announcement_>;
  /** delete data from the table: "announcement_file" */
  delete_announcement_file?: Maybe<Announcement_File_Mutation_Response>;
  /** delete single row from the table: "announcement_file" */
  delete_announcement_file_by_pk?: Maybe<Announcement_File>;
  /** delete data from the table: "blacklist" */
  delete_blacklist?: Maybe<Blacklist_Mutation_Response>;
  /** delete single row from the table: "blacklist" */
  delete_blacklist_by_pk?: Maybe<Blacklist>;
  /** delete data from the table: "challenge" */
  delete_challenge?: Maybe<Challenge_Mutation_Response>;
  /** delete single row from the table: "challenge" */
  delete_challenge_by_pk?: Maybe<Challenge>;
  /** delete data from the table: "challenge_channel" */
  delete_challenge_channel?: Maybe<Challenge_Channel_Mutation_Response>;
  /** delete single row from the table: "challenge_channel" */
  delete_challenge_channel_by_pk?: Maybe<Challenge_Channel>;
  /** delete data from the table: "challenge_entry" */
  delete_challenge_entry?: Maybe<Challenge_Entry_Mutation_Response>;
  /** delete single row from the table: "challenge_entry" */
  delete_challenge_entry_by_pk?: Maybe<Challenge_Entry>;
  /** delete data from the table: "challenge_entry_comment" */
  delete_challenge_entry_comment?: Maybe<Challenge_Entry_Comment_Mutation_Response>;
  /** delete single row from the table: "challenge_entry_comment" */
  delete_challenge_entry_comment_by_pk?: Maybe<Challenge_Entry_Comment>;
  /** delete data from the table: "challenge_entry_file" */
  delete_challenge_entry_file?: Maybe<Challenge_Entry_File_Mutation_Response>;
  /** delete single row from the table: "challenge_entry_file" */
  delete_challenge_entry_file_by_pk?: Maybe<Challenge_Entry_File>;
  /** delete data from the table: "challenge_entry_reaction" */
  delete_challenge_entry_reaction?: Maybe<Challenge_Entry_Reaction_Mutation_Response>;
  /** delete single row from the table: "challenge_entry_reaction" */
  delete_challenge_entry_reaction_by_pk?: Maybe<Challenge_Entry_Reaction>;
  /** delete data from the table: "challenge_file" */
  delete_challenge_file?: Maybe<Challenge_File_Mutation_Response>;
  /** delete single row from the table: "challenge_file" */
  delete_challenge_file_by_pk?: Maybe<Challenge_File>;
  /** delete data from the table: "challenge_group" */
  delete_challenge_group?: Maybe<Challenge_Group_Mutation_Response>;
  /** delete single row from the table: "challenge_group" */
  delete_challenge_group_by_pk?: Maybe<Challenge_Group>;
  /** delete data from the table: "challenge_points" */
  delete_challenge_points?: Maybe<Challenge_Points_Mutation_Response>;
  /** delete single row from the table: "challenge_points" */
  delete_challenge_points_by_pk?: Maybe<Challenge_Points>;
  /** delete data from the table: "challenge_series" */
  delete_challenge_series?: Maybe<Challenge_Series_Mutation_Response>;
  /** delete single row from the table: "challenge_series" */
  delete_challenge_series_by_pk?: Maybe<Challenge_Series>;
  /** delete data from the table: "challenge_series_challenges" */
  delete_challenge_series_challenges?: Maybe<Challenge_Series_Challenges_Mutation_Response>;
  /** delete single row from the table: "challenge_series_challenges" */
  delete_challenge_series_challenges_by_pk?: Maybe<Challenge_Series_Challenges>;
  /** delete data from the table: "channel" */
  delete_channel?: Maybe<Channel_Mutation_Response>;
  /** delete single row from the table: "channel" */
  delete_channel_by_pk?: Maybe<Channel>;
  /** delete data from the table: "channel_file" */
  delete_channel_file?: Maybe<Channel_File_Mutation_Response>;
  /** delete single row from the table: "channel_file" */
  delete_channel_file_by_pk?: Maybe<Channel_File>;
  /** delete data from the table: "channel_member" */
  delete_channel_member?: Maybe<Channel_Member_Mutation_Response>;
  /** delete single row from the table: "channel_member" */
  delete_channel_member_by_pk?: Maybe<Channel_Member>;
  /** delete data from the table: "channel_member_typing" */
  delete_channel_member_typing?: Maybe<Channel_Member_Typing_Mutation_Response>;
  /** delete data from the table: "channel_post" */
  delete_channel_post?: Maybe<Channel_Post_Mutation_Response>;
  /** delete single row from the table: "channel_post" */
  delete_channel_post_by_pk?: Maybe<Channel_Post>;
  /** delete data from the table: "channel_post_file" */
  delete_channel_post_file?: Maybe<Channel_Post_File_Mutation_Response>;
  /** delete single row from the table: "channel_post_file" */
  delete_channel_post_file_by_pk?: Maybe<Channel_Post_File>;
  /** delete data from the table: "channel_post_reaction" */
  delete_channel_post_reaction?: Maybe<Channel_Post_Reaction_Mutation_Response>;
  /** delete single row from the table: "channel_post_reaction" */
  delete_channel_post_reaction_by_pk?: Maybe<Channel_Post_Reaction>;
  /** delete data from the table: "channel_post_type" */
  delete_channel_post_type?: Maybe<Channel_Post_Type_Mutation_Response>;
  /** delete single row from the table: "channel_post_type" */
  delete_channel_post_type_by_pk?: Maybe<Channel_Post_Type>;
  /** delete data from the table: "channel_type" */
  delete_channel_type?: Maybe<Channel_Type_Mutation_Response>;
  /** delete single row from the table: "channel_type" */
  delete_channel_type_by_pk?: Maybe<Channel_Type>;
  /** delete data from the table: "comment" */
  delete_comment?: Maybe<Comment_Mutation_Response>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete data from the table: "event_" */
  delete_event_?: Maybe<Event__Mutation_Response>;
  /** delete single row from the table: "event_" */
  delete_event__by_pk?: Maybe<Event_>;
  /** delete data from the table: "event_rsvp" */
  delete_event_rsvp?: Maybe<Event_Rsvp_Mutation_Response>;
  /** delete single row from the table: "event_rsvp" */
  delete_event_rsvp_by_pk?: Maybe<Event_Rsvp>;
  /** delete data from the table: "feature_gate" */
  delete_feature_gate?: Maybe<Feature_Gate_Mutation_Response>;
  /** delete single row from the table: "feature_gate" */
  delete_feature_gate_by_pk?: Maybe<Feature_Gate>;
  /** delete data from the table: "file" */
  delete_file?: Maybe<File_Mutation_Response>;
  /** delete single row from the table: "file" */
  delete_file_by_pk?: Maybe<File>;
  /** delete data from the table: "global_notification_control" */
  delete_global_notification_control?: Maybe<Global_Notification_Control_Mutation_Response>;
  /** delete single row from the table: "global_notification_control" */
  delete_global_notification_control_by_pk?: Maybe<Global_Notification_Control>;
  /** delete data from the table: "global_notification_type" */
  delete_global_notification_type?: Maybe<Global_Notification_Type_Mutation_Response>;
  /** delete single row from the table: "global_notification_type" */
  delete_global_notification_type_by_pk?: Maybe<Global_Notification_Type>;
  /** delete data from the table: "group_" */
  delete_group_?: Maybe<Group__Mutation_Response>;
  /** delete single row from the table: "group_" */
  delete_group__by_pk?: Maybe<Group_>;
  /** delete data from the table: "group_badge_type" */
  delete_group_badge_type?: Maybe<Group_Badge_Type_Mutation_Response>;
  /** delete single row from the table: "group_badge_type" */
  delete_group_badge_type_by_pk?: Maybe<Group_Badge_Type>;
  /** delete data from the table: "group_join_request" */
  delete_group_join_request?: Maybe<Group_Join_Request_Mutation_Response>;
  /** delete single row from the table: "group_join_request" */
  delete_group_join_request_by_pk?: Maybe<Group_Join_Request>;
  /** delete data from the table: "group_join_request_type" */
  delete_group_join_request_type?: Maybe<Group_Join_Request_Type_Mutation_Response>;
  /** delete single row from the table: "group_join_request_type" */
  delete_group_join_request_type_by_pk?: Maybe<Group_Join_Request_Type>;
  /** delete data from the table: "group_join_title" */
  delete_group_join_title?: Maybe<Group_Join_Title_Mutation_Response>;
  /** delete single row from the table: "group_join_title" */
  delete_group_join_title_by_pk?: Maybe<Group_Join_Title>;
  /** delete data from the table: "group_role" */
  delete_group_role?: Maybe<Group_Role_Mutation_Response>;
  /** delete single row from the table: "group_role" */
  delete_group_role_by_pk?: Maybe<Group_Role>;
  /** delete data from the table: "hangout" */
  delete_hangout?: Maybe<Hangout_Mutation_Response>;
  /** delete single row from the table: "hangout" */
  delete_hangout_by_pk?: Maybe<Hangout>;
  /** delete data from the table: "hangout_requirement" */
  delete_hangout_requirement?: Maybe<Hangout_Requirement_Mutation_Response>;
  /** delete single row from the table: "hangout_requirement" */
  delete_hangout_requirement_by_pk?: Maybe<Hangout_Requirement>;
  /** delete data from the table: "internal_notification" */
  delete_internal_notification?: Maybe<Internal_Notification_Mutation_Response>;
  /** delete single row from the table: "internal_notification" */
  delete_internal_notification_by_pk?: Maybe<Internal_Notification>;
  /** delete data from the table: "poll" */
  delete_poll?: Maybe<Poll_Mutation_Response>;
  /** delete single row from the table: "poll" */
  delete_poll_by_pk?: Maybe<Poll>;
  /** delete data from the table: "poll_options" */
  delete_poll_options?: Maybe<Poll_Options_Mutation_Response>;
  /** delete single row from the table: "poll_options" */
  delete_poll_options_by_pk?: Maybe<Poll_Options>;
  /** delete data from the table: "poll_responses" */
  delete_poll_responses?: Maybe<Poll_Responses_Mutation_Response>;
  /** delete single row from the table: "poll_responses" */
  delete_poll_responses_by_pk?: Maybe<Poll_Responses>;
  /** delete data from the table: "reaction" */
  delete_reaction?: Maybe<Reaction_Mutation_Response>;
  /** delete single row from the table: "reaction" */
  delete_reaction_by_pk?: Maybe<Reaction>;
  /** delete data from the table: "reaction_type" */
  delete_reaction_type?: Maybe<Reaction_Type_Mutation_Response>;
  /** delete single row from the table: "reaction_type" */
  delete_reaction_type_by_pk?: Maybe<Reaction_Type>;
  /** delete data from the table: "report" */
  delete_report?: Maybe<Report_Mutation_Response>;
  /** delete single row from the table: "report" */
  delete_report_by_pk?: Maybe<Report>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "social_profile" */
  delete_social_profile?: Maybe<Social_Profile_Mutation_Response>;
  /** delete single row from the table: "social_profile" */
  delete_social_profile_by_pk?: Maybe<Social_Profile>;
  /** delete data from the table: "user_" */
  delete_user_?: Maybe<User__Mutation_Response>;
  /** delete single row from the table: "user_" */
  delete_user__by_pk?: Maybe<User_>;
  /** delete data from the table: "user_acquisition_type" */
  delete_user_acquisition_type?: Maybe<User_Acquisition_Type_Mutation_Response>;
  /** delete single row from the table: "user_acquisition_type" */
  delete_user_acquisition_type_by_pk?: Maybe<User_Acquisition_Type>;
  /** delete data from the table: "user_badge" */
  delete_user_badge?: Maybe<User_Badge_Mutation_Response>;
  /** delete single row from the table: "user_badge" */
  delete_user_badge_by_pk?: Maybe<User_Badge>;
  /** delete data from the table: "user_group" */
  delete_user_group?: Maybe<User_Group_Mutation_Response>;
  /** delete single row from the table: "user_group" */
  delete_user_group_by_pk?: Maybe<User_Group>;
  /** insert data into the table: "accomplishment_badge_type" */
  insert_accomplishment_badge_type?: Maybe<Accomplishment_Badge_Type_Mutation_Response>;
  /** insert a single row into the table: "accomplishment_badge_type" */
  insert_accomplishment_badge_type_one?: Maybe<Accomplishment_Badge_Type>;
  /** insert data into the table: "announcement_" */
  insert_announcement_?: Maybe<Announcement__Mutation_Response>;
  /** insert a single row into the table: "announcement_" */
  insert_announcement__one?: Maybe<Announcement_>;
  /** insert data into the table: "announcement_file" */
  insert_announcement_file?: Maybe<Announcement_File_Mutation_Response>;
  /** insert a single row into the table: "announcement_file" */
  insert_announcement_file_one?: Maybe<Announcement_File>;
  /** insert data into the table: "blacklist" */
  insert_blacklist?: Maybe<Blacklist_Mutation_Response>;
  /** insert a single row into the table: "blacklist" */
  insert_blacklist_one?: Maybe<Blacklist>;
  /** insert data into the table: "challenge" */
  insert_challenge?: Maybe<Challenge_Mutation_Response>;
  /** insert data into the table: "challenge_channel" */
  insert_challenge_channel?: Maybe<Challenge_Channel_Mutation_Response>;
  /** insert a single row into the table: "challenge_channel" */
  insert_challenge_channel_one?: Maybe<Challenge_Channel>;
  /** insert data into the table: "challenge_entry" */
  insert_challenge_entry?: Maybe<Challenge_Entry_Mutation_Response>;
  /** insert data into the table: "challenge_entry_comment" */
  insert_challenge_entry_comment?: Maybe<Challenge_Entry_Comment_Mutation_Response>;
  /** insert a single row into the table: "challenge_entry_comment" */
  insert_challenge_entry_comment_one?: Maybe<Challenge_Entry_Comment>;
  /** insert data into the table: "challenge_entry_file" */
  insert_challenge_entry_file?: Maybe<Challenge_Entry_File_Mutation_Response>;
  /** insert a single row into the table: "challenge_entry_file" */
  insert_challenge_entry_file_one?: Maybe<Challenge_Entry_File>;
  /** insert a single row into the table: "challenge_entry" */
  insert_challenge_entry_one?: Maybe<Challenge_Entry>;
  /** insert data into the table: "challenge_entry_reaction" */
  insert_challenge_entry_reaction?: Maybe<Challenge_Entry_Reaction_Mutation_Response>;
  /** insert a single row into the table: "challenge_entry_reaction" */
  insert_challenge_entry_reaction_one?: Maybe<Challenge_Entry_Reaction>;
  /** insert data into the table: "challenge_file" */
  insert_challenge_file?: Maybe<Challenge_File_Mutation_Response>;
  /** insert a single row into the table: "challenge_file" */
  insert_challenge_file_one?: Maybe<Challenge_File>;
  /** insert data into the table: "challenge_group" */
  insert_challenge_group?: Maybe<Challenge_Group_Mutation_Response>;
  /** insert a single row into the table: "challenge_group" */
  insert_challenge_group_one?: Maybe<Challenge_Group>;
  /** insert a single row into the table: "challenge" */
  insert_challenge_one?: Maybe<Challenge>;
  /** insert data into the table: "challenge_points" */
  insert_challenge_points?: Maybe<Challenge_Points_Mutation_Response>;
  /** insert a single row into the table: "challenge_points" */
  insert_challenge_points_one?: Maybe<Challenge_Points>;
  /** insert data into the table: "challenge_series" */
  insert_challenge_series?: Maybe<Challenge_Series_Mutation_Response>;
  /** insert data into the table: "challenge_series_challenges" */
  insert_challenge_series_challenges?: Maybe<Challenge_Series_Challenges_Mutation_Response>;
  /** insert a single row into the table: "challenge_series_challenges" */
  insert_challenge_series_challenges_one?: Maybe<Challenge_Series_Challenges>;
  /** insert a single row into the table: "challenge_series" */
  insert_challenge_series_one?: Maybe<Challenge_Series>;
  /** insert data into the table: "channel" */
  insert_channel?: Maybe<Channel_Mutation_Response>;
  /** insert data into the table: "channel_file" */
  insert_channel_file?: Maybe<Channel_File_Mutation_Response>;
  /** insert a single row into the table: "channel_file" */
  insert_channel_file_one?: Maybe<Channel_File>;
  /** insert data into the table: "channel_member" */
  insert_channel_member?: Maybe<Channel_Member_Mutation_Response>;
  /** insert a single row into the table: "channel_member" */
  insert_channel_member_one?: Maybe<Channel_Member>;
  /** insert data into the table: "channel_member_typing" */
  insert_channel_member_typing?: Maybe<Channel_Member_Typing_Mutation_Response>;
  /** insert a single row into the table: "channel_member_typing" */
  insert_channel_member_typing_one?: Maybe<Channel_Member_Typing>;
  /** insert a single row into the table: "channel" */
  insert_channel_one?: Maybe<Channel>;
  /** insert data into the table: "channel_post" */
  insert_channel_post?: Maybe<Channel_Post_Mutation_Response>;
  /** insert data into the table: "channel_post_file" */
  insert_channel_post_file?: Maybe<Channel_Post_File_Mutation_Response>;
  /** insert a single row into the table: "channel_post_file" */
  insert_channel_post_file_one?: Maybe<Channel_Post_File>;
  /** insert a single row into the table: "channel_post" */
  insert_channel_post_one?: Maybe<Channel_Post>;
  /** insert data into the table: "channel_post_reaction" */
  insert_channel_post_reaction?: Maybe<Channel_Post_Reaction_Mutation_Response>;
  /** insert a single row into the table: "channel_post_reaction" */
  insert_channel_post_reaction_one?: Maybe<Channel_Post_Reaction>;
  /** insert data into the table: "channel_post_type" */
  insert_channel_post_type?: Maybe<Channel_Post_Type_Mutation_Response>;
  /** insert a single row into the table: "channel_post_type" */
  insert_channel_post_type_one?: Maybe<Channel_Post_Type>;
  /** insert data into the table: "channel_type" */
  insert_channel_type?: Maybe<Channel_Type_Mutation_Response>;
  /** insert a single row into the table: "channel_type" */
  insert_channel_type_one?: Maybe<Channel_Type>;
  /** insert data into the table: "comment" */
  insert_comment?: Maybe<Comment_Mutation_Response>;
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>;
  /** insert data into the table: "event_" */
  insert_event_?: Maybe<Event__Mutation_Response>;
  /** insert a single row into the table: "event_" */
  insert_event__one?: Maybe<Event_>;
  /** insert data into the table: "event_rsvp" */
  insert_event_rsvp?: Maybe<Event_Rsvp_Mutation_Response>;
  /** insert a single row into the table: "event_rsvp" */
  insert_event_rsvp_one?: Maybe<Event_Rsvp>;
  /** insert data into the table: "feature_gate" */
  insert_feature_gate?: Maybe<Feature_Gate_Mutation_Response>;
  /** insert a single row into the table: "feature_gate" */
  insert_feature_gate_one?: Maybe<Feature_Gate>;
  /** insert data into the table: "file" */
  insert_file?: Maybe<File_Mutation_Response>;
  /** insert a single row into the table: "file" */
  insert_file_one?: Maybe<File>;
  /** insert data into the table: "global_notification_control" */
  insert_global_notification_control?: Maybe<Global_Notification_Control_Mutation_Response>;
  /** insert a single row into the table: "global_notification_control" */
  insert_global_notification_control_one?: Maybe<Global_Notification_Control>;
  /** insert data into the table: "global_notification_type" */
  insert_global_notification_type?: Maybe<Global_Notification_Type_Mutation_Response>;
  /** insert a single row into the table: "global_notification_type" */
  insert_global_notification_type_one?: Maybe<Global_Notification_Type>;
  /** insert data into the table: "group_" */
  insert_group_?: Maybe<Group__Mutation_Response>;
  /** insert a single row into the table: "group_" */
  insert_group__one?: Maybe<Group_>;
  /** insert data into the table: "group_badge_type" */
  insert_group_badge_type?: Maybe<Group_Badge_Type_Mutation_Response>;
  /** insert a single row into the table: "group_badge_type" */
  insert_group_badge_type_one?: Maybe<Group_Badge_Type>;
  /** insert data into the table: "group_join_request" */
  insert_group_join_request?: Maybe<Group_Join_Request_Mutation_Response>;
  /** insert a single row into the table: "group_join_request" */
  insert_group_join_request_one?: Maybe<Group_Join_Request>;
  /** insert data into the table: "group_join_request_type" */
  insert_group_join_request_type?: Maybe<Group_Join_Request_Type_Mutation_Response>;
  /** insert a single row into the table: "group_join_request_type" */
  insert_group_join_request_type_one?: Maybe<Group_Join_Request_Type>;
  /** insert data into the table: "group_join_title" */
  insert_group_join_title?: Maybe<Group_Join_Title_Mutation_Response>;
  /** insert a single row into the table: "group_join_title" */
  insert_group_join_title_one?: Maybe<Group_Join_Title>;
  /** insert data into the table: "group_role" */
  insert_group_role?: Maybe<Group_Role_Mutation_Response>;
  /** insert a single row into the table: "group_role" */
  insert_group_role_one?: Maybe<Group_Role>;
  /** insert data into the table: "hangout" */
  insert_hangout?: Maybe<Hangout_Mutation_Response>;
  /** insert a single row into the table: "hangout" */
  insert_hangout_one?: Maybe<Hangout>;
  /** insert data into the table: "hangout_requirement" */
  insert_hangout_requirement?: Maybe<Hangout_Requirement_Mutation_Response>;
  /** insert a single row into the table: "hangout_requirement" */
  insert_hangout_requirement_one?: Maybe<Hangout_Requirement>;
  /** insert data into the table: "internal_notification" */
  insert_internal_notification?: Maybe<Internal_Notification_Mutation_Response>;
  /** insert a single row into the table: "internal_notification" */
  insert_internal_notification_one?: Maybe<Internal_Notification>;
  /** insert data into the table: "poll" */
  insert_poll?: Maybe<Poll_Mutation_Response>;
  /** insert a single row into the table: "poll" */
  insert_poll_one?: Maybe<Poll>;
  /** insert data into the table: "poll_options" */
  insert_poll_options?: Maybe<Poll_Options_Mutation_Response>;
  /** insert a single row into the table: "poll_options" */
  insert_poll_options_one?: Maybe<Poll_Options>;
  /** insert data into the table: "poll_responses" */
  insert_poll_responses?: Maybe<Poll_Responses_Mutation_Response>;
  /** insert a single row into the table: "poll_responses" */
  insert_poll_responses_one?: Maybe<Poll_Responses>;
  /** insert data into the table: "reaction" */
  insert_reaction?: Maybe<Reaction_Mutation_Response>;
  /** insert a single row into the table: "reaction" */
  insert_reaction_one?: Maybe<Reaction>;
  /** insert data into the table: "reaction_type" */
  insert_reaction_type?: Maybe<Reaction_Type_Mutation_Response>;
  /** insert a single row into the table: "reaction_type" */
  insert_reaction_type_one?: Maybe<Reaction_Type>;
  /** insert data into the table: "report" */
  insert_report?: Maybe<Report_Mutation_Response>;
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<Report>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "social_profile" */
  insert_social_profile?: Maybe<Social_Profile_Mutation_Response>;
  /** insert a single row into the table: "social_profile" */
  insert_social_profile_one?: Maybe<Social_Profile>;
  /** insert data into the table: "user_" */
  insert_user_?: Maybe<User__Mutation_Response>;
  /** insert a single row into the table: "user_" */
  insert_user__one?: Maybe<User_>;
  /** insert data into the table: "user_acquisition_type" */
  insert_user_acquisition_type?: Maybe<User_Acquisition_Type_Mutation_Response>;
  /** insert a single row into the table: "user_acquisition_type" */
  insert_user_acquisition_type_one?: Maybe<User_Acquisition_Type>;
  /** insert data into the table: "user_badge" */
  insert_user_badge?: Maybe<User_Badge_Mutation_Response>;
  /** insert a single row into the table: "user_badge" */
  insert_user_badge_one?: Maybe<User_Badge>;
  /** insert data into the table: "user_group" */
  insert_user_group?: Maybe<User_Group_Mutation_Response>;
  /** insert a single row into the table: "user_group" */
  insert_user_group_one?: Maybe<User_Group>;
  /** perform the action: "log_amplitude_event" */
  log_amplitude_event: Scalars['uuid'];
  /** perform the action: "subscribe_mailchimp" */
  subscribe_mailchimp?: Maybe<LambdaOutput>;
  /** update data of the table: "accomplishment_badge_type" */
  update_accomplishment_badge_type?: Maybe<Accomplishment_Badge_Type_Mutation_Response>;
  /** update single row of the table: "accomplishment_badge_type" */
  update_accomplishment_badge_type_by_pk?: Maybe<Accomplishment_Badge_Type>;
  /** update data of the table: "announcement_" */
  update_announcement_?: Maybe<Announcement__Mutation_Response>;
  /** update single row of the table: "announcement_" */
  update_announcement__by_pk?: Maybe<Announcement_>;
  /** update data of the table: "announcement_file" */
  update_announcement_file?: Maybe<Announcement_File_Mutation_Response>;
  /** update single row of the table: "announcement_file" */
  update_announcement_file_by_pk?: Maybe<Announcement_File>;
  /** update data of the table: "blacklist" */
  update_blacklist?: Maybe<Blacklist_Mutation_Response>;
  /** update single row of the table: "blacklist" */
  update_blacklist_by_pk?: Maybe<Blacklist>;
  /** update data of the table: "challenge" */
  update_challenge?: Maybe<Challenge_Mutation_Response>;
  /** update single row of the table: "challenge" */
  update_challenge_by_pk?: Maybe<Challenge>;
  /** update data of the table: "challenge_channel" */
  update_challenge_channel?: Maybe<Challenge_Channel_Mutation_Response>;
  /** update single row of the table: "challenge_channel" */
  update_challenge_channel_by_pk?: Maybe<Challenge_Channel>;
  /** update data of the table: "challenge_entry" */
  update_challenge_entry?: Maybe<Challenge_Entry_Mutation_Response>;
  /** update single row of the table: "challenge_entry" */
  update_challenge_entry_by_pk?: Maybe<Challenge_Entry>;
  /** update data of the table: "challenge_entry_comment" */
  update_challenge_entry_comment?: Maybe<Challenge_Entry_Comment_Mutation_Response>;
  /** update single row of the table: "challenge_entry_comment" */
  update_challenge_entry_comment_by_pk?: Maybe<Challenge_Entry_Comment>;
  /** update data of the table: "challenge_entry_file" */
  update_challenge_entry_file?: Maybe<Challenge_Entry_File_Mutation_Response>;
  /** update single row of the table: "challenge_entry_file" */
  update_challenge_entry_file_by_pk?: Maybe<Challenge_Entry_File>;
  /** update data of the table: "challenge_entry_reaction" */
  update_challenge_entry_reaction?: Maybe<Challenge_Entry_Reaction_Mutation_Response>;
  /** update single row of the table: "challenge_entry_reaction" */
  update_challenge_entry_reaction_by_pk?: Maybe<Challenge_Entry_Reaction>;
  /** update data of the table: "challenge_file" */
  update_challenge_file?: Maybe<Challenge_File_Mutation_Response>;
  /** update single row of the table: "challenge_file" */
  update_challenge_file_by_pk?: Maybe<Challenge_File>;
  /** update data of the table: "challenge_group" */
  update_challenge_group?: Maybe<Challenge_Group_Mutation_Response>;
  /** update single row of the table: "challenge_group" */
  update_challenge_group_by_pk?: Maybe<Challenge_Group>;
  /** update data of the table: "challenge_points" */
  update_challenge_points?: Maybe<Challenge_Points_Mutation_Response>;
  /** update single row of the table: "challenge_points" */
  update_challenge_points_by_pk?: Maybe<Challenge_Points>;
  /** update data of the table: "challenge_series" */
  update_challenge_series?: Maybe<Challenge_Series_Mutation_Response>;
  /** update single row of the table: "challenge_series" */
  update_challenge_series_by_pk?: Maybe<Challenge_Series>;
  /** update data of the table: "challenge_series_challenges" */
  update_challenge_series_challenges?: Maybe<Challenge_Series_Challenges_Mutation_Response>;
  /** update single row of the table: "challenge_series_challenges" */
  update_challenge_series_challenges_by_pk?: Maybe<Challenge_Series_Challenges>;
  /** update data of the table: "channel" */
  update_channel?: Maybe<Channel_Mutation_Response>;
  /** update single row of the table: "channel" */
  update_channel_by_pk?: Maybe<Channel>;
  /** update data of the table: "channel_file" */
  update_channel_file?: Maybe<Channel_File_Mutation_Response>;
  /** update single row of the table: "channel_file" */
  update_channel_file_by_pk?: Maybe<Channel_File>;
  /** update data of the table: "channel_member" */
  update_channel_member?: Maybe<Channel_Member_Mutation_Response>;
  /** update single row of the table: "channel_member" */
  update_channel_member_by_pk?: Maybe<Channel_Member>;
  /** update data of the table: "channel_member_typing" */
  update_channel_member_typing?: Maybe<Channel_Member_Typing_Mutation_Response>;
  /** update data of the table: "channel_post" */
  update_channel_post?: Maybe<Channel_Post_Mutation_Response>;
  /** update single row of the table: "channel_post" */
  update_channel_post_by_pk?: Maybe<Channel_Post>;
  /** update data of the table: "channel_post_file" */
  update_channel_post_file?: Maybe<Channel_Post_File_Mutation_Response>;
  /** update single row of the table: "channel_post_file" */
  update_channel_post_file_by_pk?: Maybe<Channel_Post_File>;
  /** update data of the table: "channel_post_reaction" */
  update_channel_post_reaction?: Maybe<Channel_Post_Reaction_Mutation_Response>;
  /** update single row of the table: "channel_post_reaction" */
  update_channel_post_reaction_by_pk?: Maybe<Channel_Post_Reaction>;
  /** update data of the table: "channel_post_type" */
  update_channel_post_type?: Maybe<Channel_Post_Type_Mutation_Response>;
  /** update single row of the table: "channel_post_type" */
  update_channel_post_type_by_pk?: Maybe<Channel_Post_Type>;
  /** update data of the table: "channel_type" */
  update_channel_type?: Maybe<Channel_Type_Mutation_Response>;
  /** update single row of the table: "channel_type" */
  update_channel_type_by_pk?: Maybe<Channel_Type>;
  /** update data of the table: "comment" */
  update_comment?: Maybe<Comment_Mutation_Response>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update data of the table: "event_" */
  update_event_?: Maybe<Event__Mutation_Response>;
  /** update single row of the table: "event_" */
  update_event__by_pk?: Maybe<Event_>;
  /** update data of the table: "event_rsvp" */
  update_event_rsvp?: Maybe<Event_Rsvp_Mutation_Response>;
  /** update single row of the table: "event_rsvp" */
  update_event_rsvp_by_pk?: Maybe<Event_Rsvp>;
  /** update data of the table: "feature_gate" */
  update_feature_gate?: Maybe<Feature_Gate_Mutation_Response>;
  /** update single row of the table: "feature_gate" */
  update_feature_gate_by_pk?: Maybe<Feature_Gate>;
  /** update data of the table: "file" */
  update_file?: Maybe<File_Mutation_Response>;
  /** update single row of the table: "file" */
  update_file_by_pk?: Maybe<File>;
  /** update data of the table: "global_notification_control" */
  update_global_notification_control?: Maybe<Global_Notification_Control_Mutation_Response>;
  /** update single row of the table: "global_notification_control" */
  update_global_notification_control_by_pk?: Maybe<Global_Notification_Control>;
  /** update data of the table: "global_notification_type" */
  update_global_notification_type?: Maybe<Global_Notification_Type_Mutation_Response>;
  /** update single row of the table: "global_notification_type" */
  update_global_notification_type_by_pk?: Maybe<Global_Notification_Type>;
  /** update data of the table: "group_" */
  update_group_?: Maybe<Group__Mutation_Response>;
  /** update single row of the table: "group_" */
  update_group__by_pk?: Maybe<Group_>;
  /** update data of the table: "group_badge_type" */
  update_group_badge_type?: Maybe<Group_Badge_Type_Mutation_Response>;
  /** update single row of the table: "group_badge_type" */
  update_group_badge_type_by_pk?: Maybe<Group_Badge_Type>;
  /** update data of the table: "group_join_request" */
  update_group_join_request?: Maybe<Group_Join_Request_Mutation_Response>;
  /** update single row of the table: "group_join_request" */
  update_group_join_request_by_pk?: Maybe<Group_Join_Request>;
  /** update data of the table: "group_join_request_type" */
  update_group_join_request_type?: Maybe<Group_Join_Request_Type_Mutation_Response>;
  /** update single row of the table: "group_join_request_type" */
  update_group_join_request_type_by_pk?: Maybe<Group_Join_Request_Type>;
  /** update data of the table: "group_join_title" */
  update_group_join_title?: Maybe<Group_Join_Title_Mutation_Response>;
  /** update single row of the table: "group_join_title" */
  update_group_join_title_by_pk?: Maybe<Group_Join_Title>;
  /** update data of the table: "group_role" */
  update_group_role?: Maybe<Group_Role_Mutation_Response>;
  /** update single row of the table: "group_role" */
  update_group_role_by_pk?: Maybe<Group_Role>;
  /** update data of the table: "hangout" */
  update_hangout?: Maybe<Hangout_Mutation_Response>;
  /** update single row of the table: "hangout" */
  update_hangout_by_pk?: Maybe<Hangout>;
  /** update data of the table: "hangout_requirement" */
  update_hangout_requirement?: Maybe<Hangout_Requirement_Mutation_Response>;
  /** update single row of the table: "hangout_requirement" */
  update_hangout_requirement_by_pk?: Maybe<Hangout_Requirement>;
  /** update data of the table: "internal_notification" */
  update_internal_notification?: Maybe<Internal_Notification_Mutation_Response>;
  /** update single row of the table: "internal_notification" */
  update_internal_notification_by_pk?: Maybe<Internal_Notification>;
  /** update data of the table: "poll" */
  update_poll?: Maybe<Poll_Mutation_Response>;
  /** update single row of the table: "poll" */
  update_poll_by_pk?: Maybe<Poll>;
  /** update data of the table: "poll_options" */
  update_poll_options?: Maybe<Poll_Options_Mutation_Response>;
  /** update single row of the table: "poll_options" */
  update_poll_options_by_pk?: Maybe<Poll_Options>;
  /** update data of the table: "poll_responses" */
  update_poll_responses?: Maybe<Poll_Responses_Mutation_Response>;
  /** update single row of the table: "poll_responses" */
  update_poll_responses_by_pk?: Maybe<Poll_Responses>;
  /** update data of the table: "reaction" */
  update_reaction?: Maybe<Reaction_Mutation_Response>;
  /** update single row of the table: "reaction" */
  update_reaction_by_pk?: Maybe<Reaction>;
  /** update data of the table: "reaction_type" */
  update_reaction_type?: Maybe<Reaction_Type_Mutation_Response>;
  /** update single row of the table: "reaction_type" */
  update_reaction_type_by_pk?: Maybe<Reaction_Type>;
  /** update data of the table: "report" */
  update_report?: Maybe<Report_Mutation_Response>;
  /** update single row of the table: "report" */
  update_report_by_pk?: Maybe<Report>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "social_profile" */
  update_social_profile?: Maybe<Social_Profile_Mutation_Response>;
  /** update single row of the table: "social_profile" */
  update_social_profile_by_pk?: Maybe<Social_Profile>;
  /** update data of the table: "user_" */
  update_user_?: Maybe<User__Mutation_Response>;
  /** update single row of the table: "user_" */
  update_user__by_pk?: Maybe<User_>;
  /** update data of the table: "user_acquisition_type" */
  update_user_acquisition_type?: Maybe<User_Acquisition_Type_Mutation_Response>;
  /** update single row of the table: "user_acquisition_type" */
  update_user_acquisition_type_by_pk?: Maybe<User_Acquisition_Type>;
  /** update data of the table: "user_badge" */
  update_user_badge?: Maybe<User_Badge_Mutation_Response>;
  /** update single row of the table: "user_badge" */
  update_user_badge_by_pk?: Maybe<User_Badge>;
  /** update data of the table: "user_group" */
  update_user_group?: Maybe<User_Group_Mutation_Response>;
  /** update single row of the table: "user_group" */
  update_user_group_by_pk?: Maybe<User_Group>;
};


/** mutation root */
export type Mutation_RootDeactivate_AccountArgs = {
  arg1: DeactivateAccountInput;
};


/** mutation root */
export type Mutation_RootDelete_Accomplishment_Badge_TypeArgs = {
  where: Accomplishment_Badge_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accomplishment_Badge_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Announcement_Args = {
  where: Announcement__Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Announcement__By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Announcement_FileArgs = {
  where: Announcement_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Announcement_File_By_PkArgs = {
  announcement_id: Scalars['uuid'];
  file_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BlacklistArgs = {
  where: Blacklist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blacklist_By_PkArgs = {
  blockUserId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChallengeArgs = {
  where: Challenge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_ChannelArgs = {
  where: Challenge_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Channel_By_PkArgs = {
  channelId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_EntryArgs = {
  where: Challenge_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Entry_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Entry_CommentArgs = {
  where: Challenge_Entry_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Entry_Comment_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  commentId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Entry_FileArgs = {
  where: Challenge_Entry_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Entry_File_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Entry_ReactionArgs = {
  where: Challenge_Entry_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Entry_Reaction_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_FileArgs = {
  where: Challenge_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_File_By_PkArgs = {
  challengeId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_GroupArgs = {
  where: Challenge_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_PointsArgs = {
  where: Challenge_Points_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Points_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_SeriesArgs = {
  where: Challenge_Series_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Series_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Series_ChallengesArgs = {
  where: Challenge_Series_Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenge_Series_Challenges_By_PkArgs = {
  challengeId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChannelArgs = {
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_FileArgs = {
  where: Channel_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_File_By_PkArgs = {
  channelId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_MemberArgs = {
  where: Channel_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Member_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_Member_TypingArgs = {
  where: Channel_Member_Typing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_PostArgs = {
  where: Channel_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Post_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_Post_FileArgs = {
  where: Channel_Post_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Post_File_By_PkArgs = {
  channelPostId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_Post_ReactionArgs = {
  where: Channel_Post_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Post_Reaction_By_PkArgs = {
  channelPostId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_Post_TypeArgs = {
  where: Channel_Post_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_TypeArgs = {
  where: Channel_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Event_Args = {
  where: Event__Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event__By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Event_RsvpArgs = {
  where: Event_Rsvp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event_Rsvp_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Feature_GateArgs = {
  where: Feature_Gate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feature_Gate_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FileArgs = {
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Global_Notification_ControlArgs = {
  where: Global_Notification_Control_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Notification_Control_By_PkArgs = {
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Global_Notification_TypeArgs = {
  where: Global_Notification_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Notification_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Args = {
  where: Group__Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group__By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Badge_TypeArgs = {
  where: Group_Badge_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Badge_Type_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_RequestArgs = {
  where: Group_Join_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Request_TypeArgs = {
  where: Group_Join_Request_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Request_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_TitleArgs = {
  where: Group_Join_Title_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Title_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Group_RoleArgs = {
  where: Group_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HangoutArgs = {
  where: Hangout_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hangout_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Hangout_RequirementArgs = {
  where: Hangout_Requirement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hangout_Requirement_By_PkArgs = {
  hangout_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Internal_NotificationArgs = {
  where: Internal_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Internal_Notification_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PollArgs = {
  where: Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poll_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Poll_OptionsArgs = {
  where: Poll_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poll_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Poll_ResponsesArgs = {
  where: Poll_Responses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poll_Responses_By_PkArgs = {
  optionId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReactionArgs = {
  where: Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Reaction_TypeArgs = {
  where: Reaction_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reaction_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ReportArgs = {
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Report_By_PkArgs = {
  groupId: Scalars['uuid'];
  reporterId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Social_ProfileArgs = {
  where: Social_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Social_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Args = {
  where: User__Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User__By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Acquisition_TypeArgs = {
  where: User_Acquisition_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Acquisition_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_BadgeArgs = {
  where: User_Badge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Badge_By_PkArgs = {
  groupBadgeTypeId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_GroupArgs = {
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Group_By_PkArgs = {
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Accomplishment_Badge_TypeArgs = {
  objects: Array<Accomplishment_Badge_Type_Insert_Input>;
  on_conflict?: Maybe<Accomplishment_Badge_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accomplishment_Badge_Type_OneArgs = {
  object: Accomplishment_Badge_Type_Insert_Input;
  on_conflict?: Maybe<Accomplishment_Badge_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Announcement_Args = {
  objects: Array<Announcement__Insert_Input>;
  on_conflict?: Maybe<Announcement__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Announcement__OneArgs = {
  object: Announcement__Insert_Input;
  on_conflict?: Maybe<Announcement__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Announcement_FileArgs = {
  objects: Array<Announcement_File_Insert_Input>;
  on_conflict?: Maybe<Announcement_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Announcement_File_OneArgs = {
  object: Announcement_File_Insert_Input;
  on_conflict?: Maybe<Announcement_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlacklistArgs = {
  objects: Array<Blacklist_Insert_Input>;
  on_conflict?: Maybe<Blacklist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blacklist_OneArgs = {
  object: Blacklist_Insert_Input;
  on_conflict?: Maybe<Blacklist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChallengeArgs = {
  objects: Array<Challenge_Insert_Input>;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_ChannelArgs = {
  objects: Array<Challenge_Channel_Insert_Input>;
  on_conflict?: Maybe<Challenge_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Channel_OneArgs = {
  object: Challenge_Channel_Insert_Input;
  on_conflict?: Maybe<Challenge_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_EntryArgs = {
  objects: Array<Challenge_Entry_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Entry_CommentArgs = {
  objects: Array<Challenge_Entry_Comment_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Entry_Comment_OneArgs = {
  object: Challenge_Entry_Comment_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Entry_FileArgs = {
  objects: Array<Challenge_Entry_File_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Entry_File_OneArgs = {
  object: Challenge_Entry_File_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Entry_OneArgs = {
  object: Challenge_Entry_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Entry_ReactionArgs = {
  objects: Array<Challenge_Entry_Reaction_Insert_Input>;
  on_conflict?: Maybe<Challenge_Entry_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Entry_Reaction_OneArgs = {
  object: Challenge_Entry_Reaction_Insert_Input;
  on_conflict?: Maybe<Challenge_Entry_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_FileArgs = {
  objects: Array<Challenge_File_Insert_Input>;
  on_conflict?: Maybe<Challenge_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_File_OneArgs = {
  object: Challenge_File_Insert_Input;
  on_conflict?: Maybe<Challenge_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_GroupArgs = {
  objects: Array<Challenge_Group_Insert_Input>;
  on_conflict?: Maybe<Challenge_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Group_OneArgs = {
  object: Challenge_Group_Insert_Input;
  on_conflict?: Maybe<Challenge_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_OneArgs = {
  object: Challenge_Insert_Input;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_PointsArgs = {
  objects: Array<Challenge_Points_Insert_Input>;
  on_conflict?: Maybe<Challenge_Points_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Points_OneArgs = {
  object: Challenge_Points_Insert_Input;
  on_conflict?: Maybe<Challenge_Points_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_SeriesArgs = {
  objects: Array<Challenge_Series_Insert_Input>;
  on_conflict?: Maybe<Challenge_Series_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Series_ChallengesArgs = {
  objects: Array<Challenge_Series_Challenges_Insert_Input>;
  on_conflict?: Maybe<Challenge_Series_Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Series_Challenges_OneArgs = {
  object: Challenge_Series_Challenges_Insert_Input;
  on_conflict?: Maybe<Challenge_Series_Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenge_Series_OneArgs = {
  object: Challenge_Series_Insert_Input;
  on_conflict?: Maybe<Challenge_Series_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChannelArgs = {
  objects: Array<Channel_Insert_Input>;
  on_conflict?: Maybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_FileArgs = {
  objects: Array<Channel_File_Insert_Input>;
  on_conflict?: Maybe<Channel_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_File_OneArgs = {
  object: Channel_File_Insert_Input;
  on_conflict?: Maybe<Channel_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_MemberArgs = {
  objects: Array<Channel_Member_Insert_Input>;
  on_conflict?: Maybe<Channel_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Member_OneArgs = {
  object: Channel_Member_Insert_Input;
  on_conflict?: Maybe<Channel_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Member_TypingArgs = {
  objects: Array<Channel_Member_Typing_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Member_Typing_OneArgs = {
  object: Channel_Member_Typing_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Channel_OneArgs = {
  object: Channel_Insert_Input;
  on_conflict?: Maybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_PostArgs = {
  objects: Array<Channel_Post_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Post_FileArgs = {
  objects: Array<Channel_Post_File_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Post_File_OneArgs = {
  object: Channel_Post_File_Insert_Input;
  on_conflict?: Maybe<Channel_Post_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Post_OneArgs = {
  object: Channel_Post_Insert_Input;
  on_conflict?: Maybe<Channel_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Post_ReactionArgs = {
  objects: Array<Channel_Post_Reaction_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Post_Reaction_OneArgs = {
  object: Channel_Post_Reaction_Insert_Input;
  on_conflict?: Maybe<Channel_Post_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Post_TypeArgs = {
  objects: Array<Channel_Post_Type_Insert_Input>;
  on_conflict?: Maybe<Channel_Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Post_Type_OneArgs = {
  object: Channel_Post_Type_Insert_Input;
  on_conflict?: Maybe<Channel_Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_TypeArgs = {
  objects: Array<Channel_Type_Insert_Input>;
  on_conflict?: Maybe<Channel_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Type_OneArgs = {
  object: Channel_Type_Insert_Input;
  on_conflict?: Maybe<Channel_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: Maybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_Args = {
  objects: Array<Event__Insert_Input>;
  on_conflict?: Maybe<Event__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event__OneArgs = {
  object: Event__Insert_Input;
  on_conflict?: Maybe<Event__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_RsvpArgs = {
  objects: Array<Event_Rsvp_Insert_Input>;
  on_conflict?: Maybe<Event_Rsvp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_Rsvp_OneArgs = {
  object: Event_Rsvp_Insert_Input;
  on_conflict?: Maybe<Event_Rsvp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_GateArgs = {
  objects: Array<Feature_Gate_Insert_Input>;
  on_conflict?: Maybe<Feature_Gate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_Gate_OneArgs = {
  object: Feature_Gate_Insert_Input;
  on_conflict?: Maybe<Feature_Gate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FileArgs = {
  objects: Array<File_Insert_Input>;
  on_conflict?: Maybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_OneArgs = {
  object: File_Insert_Input;
  on_conflict?: Maybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Notification_ControlArgs = {
  objects: Array<Global_Notification_Control_Insert_Input>;
  on_conflict?: Maybe<Global_Notification_Control_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Notification_Control_OneArgs = {
  object: Global_Notification_Control_Insert_Input;
  on_conflict?: Maybe<Global_Notification_Control_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Notification_TypeArgs = {
  objects: Array<Global_Notification_Type_Insert_Input>;
  on_conflict?: Maybe<Global_Notification_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Notification_Type_OneArgs = {
  object: Global_Notification_Type_Insert_Input;
  on_conflict?: Maybe<Global_Notification_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Args = {
  objects: Array<Group__Insert_Input>;
  on_conflict?: Maybe<Group__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group__OneArgs = {
  object: Group__Insert_Input;
  on_conflict?: Maybe<Group__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Badge_TypeArgs = {
  objects: Array<Group_Badge_Type_Insert_Input>;
  on_conflict?: Maybe<Group_Badge_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Badge_Type_OneArgs = {
  object: Group_Badge_Type_Insert_Input;
  on_conflict?: Maybe<Group_Badge_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_RequestArgs = {
  objects: Array<Group_Join_Request_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Request_OneArgs = {
  object: Group_Join_Request_Insert_Input;
  on_conflict?: Maybe<Group_Join_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Request_TypeArgs = {
  objects: Array<Group_Join_Request_Type_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Request_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Request_Type_OneArgs = {
  object: Group_Join_Request_Type_Insert_Input;
  on_conflict?: Maybe<Group_Join_Request_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_TitleArgs = {
  objects: Array<Group_Join_Title_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Title_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Title_OneArgs = {
  object: Group_Join_Title_Insert_Input;
  on_conflict?: Maybe<Group_Join_Title_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_RoleArgs = {
  objects: Array<Group_Role_Insert_Input>;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Role_OneArgs = {
  object: Group_Role_Insert_Input;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HangoutArgs = {
  objects: Array<Hangout_Insert_Input>;
  on_conflict?: Maybe<Hangout_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hangout_OneArgs = {
  object: Hangout_Insert_Input;
  on_conflict?: Maybe<Hangout_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hangout_RequirementArgs = {
  objects: Array<Hangout_Requirement_Insert_Input>;
  on_conflict?: Maybe<Hangout_Requirement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hangout_Requirement_OneArgs = {
  object: Hangout_Requirement_Insert_Input;
  on_conflict?: Maybe<Hangout_Requirement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Internal_NotificationArgs = {
  objects: Array<Internal_Notification_Insert_Input>;
  on_conflict?: Maybe<Internal_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Internal_Notification_OneArgs = {
  object: Internal_Notification_Insert_Input;
  on_conflict?: Maybe<Internal_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PollArgs = {
  objects: Array<Poll_Insert_Input>;
  on_conflict?: Maybe<Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_OneArgs = {
  object: Poll_Insert_Input;
  on_conflict?: Maybe<Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_OptionsArgs = {
  objects: Array<Poll_Options_Insert_Input>;
  on_conflict?: Maybe<Poll_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_Options_OneArgs = {
  object: Poll_Options_Insert_Input;
  on_conflict?: Maybe<Poll_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_ResponsesArgs = {
  objects: Array<Poll_Responses_Insert_Input>;
  on_conflict?: Maybe<Poll_Responses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_Responses_OneArgs = {
  object: Poll_Responses_Insert_Input;
  on_conflict?: Maybe<Poll_Responses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReactionArgs = {
  objects: Array<Reaction_Insert_Input>;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reaction_OneArgs = {
  object: Reaction_Insert_Input;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reaction_TypeArgs = {
  objects: Array<Reaction_Type_Insert_Input>;
  on_conflict?: Maybe<Reaction_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reaction_Type_OneArgs = {
  object: Reaction_Type_Insert_Input;
  on_conflict?: Maybe<Reaction_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReportArgs = {
  objects: Array<Report_Insert_Input>;
  on_conflict?: Maybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_OneArgs = {
  object: Report_Insert_Input;
  on_conflict?: Maybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Social_ProfileArgs = {
  objects: Array<Social_Profile_Insert_Input>;
  on_conflict?: Maybe<Social_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Social_Profile_OneArgs = {
  object: Social_Profile_Insert_Input;
  on_conflict?: Maybe<Social_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Args = {
  objects: Array<User__Insert_Input>;
  on_conflict?: Maybe<User__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User__OneArgs = {
  object: User__Insert_Input;
  on_conflict?: Maybe<User__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Acquisition_TypeArgs = {
  objects: Array<User_Acquisition_Type_Insert_Input>;
  on_conflict?: Maybe<User_Acquisition_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Acquisition_Type_OneArgs = {
  object: User_Acquisition_Type_Insert_Input;
  on_conflict?: Maybe<User_Acquisition_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_BadgeArgs = {
  objects: Array<User_Badge_Insert_Input>;
  on_conflict?: Maybe<User_Badge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Badge_OneArgs = {
  object: User_Badge_Insert_Input;
  on_conflict?: Maybe<User_Badge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GroupArgs = {
  objects: Array<User_Group_Insert_Input>;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Group_OneArgs = {
  object: User_Group_Insert_Input;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLog_Amplitude_EventArgs = {
  arg1: LogAmplitudeEventInput;
};


/** mutation root */
export type Mutation_RootSubscribe_MailchimpArgs = {
  arg1: SubscribeMailchimpInput;
};


/** mutation root */
export type Mutation_RootUpdate_Accomplishment_Badge_TypeArgs = {
  _set?: Maybe<Accomplishment_Badge_Type_Set_Input>;
  where: Accomplishment_Badge_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accomplishment_Badge_Type_By_PkArgs = {
  _set?: Maybe<Accomplishment_Badge_Type_Set_Input>;
  pk_columns: Accomplishment_Badge_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Announcement_Args = {
  _set?: Maybe<Announcement__Set_Input>;
  where: Announcement__Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Announcement__By_PkArgs = {
  _set?: Maybe<Announcement__Set_Input>;
  pk_columns: Announcement__Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Announcement_FileArgs = {
  _set?: Maybe<Announcement_File_Set_Input>;
  where: Announcement_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Announcement_File_By_PkArgs = {
  _set?: Maybe<Announcement_File_Set_Input>;
  pk_columns: Announcement_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BlacklistArgs = {
  _set?: Maybe<Blacklist_Set_Input>;
  where: Blacklist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blacklist_By_PkArgs = {
  _set?: Maybe<Blacklist_Set_Input>;
  pk_columns: Blacklist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChallengeArgs = {
  _set?: Maybe<Challenge_Set_Input>;
  where: Challenge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_By_PkArgs = {
  _set?: Maybe<Challenge_Set_Input>;
  pk_columns: Challenge_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_ChannelArgs = {
  _set?: Maybe<Challenge_Channel_Set_Input>;
  where: Challenge_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Channel_By_PkArgs = {
  _set?: Maybe<Challenge_Channel_Set_Input>;
  pk_columns: Challenge_Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_EntryArgs = {
  _set?: Maybe<Challenge_Entry_Set_Input>;
  where: Challenge_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Entry_By_PkArgs = {
  _set?: Maybe<Challenge_Entry_Set_Input>;
  pk_columns: Challenge_Entry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Entry_CommentArgs = {
  _set?: Maybe<Challenge_Entry_Comment_Set_Input>;
  where: Challenge_Entry_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Entry_Comment_By_PkArgs = {
  _set?: Maybe<Challenge_Entry_Comment_Set_Input>;
  pk_columns: Challenge_Entry_Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Entry_FileArgs = {
  _set?: Maybe<Challenge_Entry_File_Set_Input>;
  where: Challenge_Entry_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Entry_File_By_PkArgs = {
  _set?: Maybe<Challenge_Entry_File_Set_Input>;
  pk_columns: Challenge_Entry_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Entry_ReactionArgs = {
  _set?: Maybe<Challenge_Entry_Reaction_Set_Input>;
  where: Challenge_Entry_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Entry_Reaction_By_PkArgs = {
  _set?: Maybe<Challenge_Entry_Reaction_Set_Input>;
  pk_columns: Challenge_Entry_Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_FileArgs = {
  _set?: Maybe<Challenge_File_Set_Input>;
  where: Challenge_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_File_By_PkArgs = {
  _set?: Maybe<Challenge_File_Set_Input>;
  pk_columns: Challenge_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_GroupArgs = {
  _set?: Maybe<Challenge_Group_Set_Input>;
  where: Challenge_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Group_By_PkArgs = {
  _set?: Maybe<Challenge_Group_Set_Input>;
  pk_columns: Challenge_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_PointsArgs = {
  _inc?: Maybe<Challenge_Points_Inc_Input>;
  _set?: Maybe<Challenge_Points_Set_Input>;
  where: Challenge_Points_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Points_By_PkArgs = {
  _inc?: Maybe<Challenge_Points_Inc_Input>;
  _set?: Maybe<Challenge_Points_Set_Input>;
  pk_columns: Challenge_Points_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_SeriesArgs = {
  _set?: Maybe<Challenge_Series_Set_Input>;
  where: Challenge_Series_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Series_By_PkArgs = {
  _set?: Maybe<Challenge_Series_Set_Input>;
  pk_columns: Challenge_Series_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Series_ChallengesArgs = {
  _set?: Maybe<Challenge_Series_Challenges_Set_Input>;
  where: Challenge_Series_Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenge_Series_Challenges_By_PkArgs = {
  _set?: Maybe<Challenge_Series_Challenges_Set_Input>;
  pk_columns: Challenge_Series_Challenges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChannelArgs = {
  _inc?: Maybe<Channel_Inc_Input>;
  _set?: Maybe<Channel_Set_Input>;
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_By_PkArgs = {
  _inc?: Maybe<Channel_Inc_Input>;
  _set?: Maybe<Channel_Set_Input>;
  pk_columns: Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_FileArgs = {
  _set?: Maybe<Channel_File_Set_Input>;
  where: Channel_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_File_By_PkArgs = {
  _set?: Maybe<Channel_File_Set_Input>;
  pk_columns: Channel_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_MemberArgs = {
  _append?: Maybe<Channel_Member_Append_Input>;
  _delete_at_path?: Maybe<Channel_Member_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Channel_Member_Delete_Elem_Input>;
  _delete_key?: Maybe<Channel_Member_Delete_Key_Input>;
  _prepend?: Maybe<Channel_Member_Prepend_Input>;
  _set?: Maybe<Channel_Member_Set_Input>;
  where: Channel_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Member_By_PkArgs = {
  _append?: Maybe<Channel_Member_Append_Input>;
  _delete_at_path?: Maybe<Channel_Member_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Channel_Member_Delete_Elem_Input>;
  _delete_key?: Maybe<Channel_Member_Delete_Key_Input>;
  _prepend?: Maybe<Channel_Member_Prepend_Input>;
  _set?: Maybe<Channel_Member_Set_Input>;
  pk_columns: Channel_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Member_TypingArgs = {
  _set?: Maybe<Channel_Member_Typing_Set_Input>;
  where: Channel_Member_Typing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_PostArgs = {
  _set?: Maybe<Channel_Post_Set_Input>;
  where: Channel_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Post_By_PkArgs = {
  _set?: Maybe<Channel_Post_Set_Input>;
  pk_columns: Channel_Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Post_FileArgs = {
  _set?: Maybe<Channel_Post_File_Set_Input>;
  where: Channel_Post_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Post_File_By_PkArgs = {
  _set?: Maybe<Channel_Post_File_Set_Input>;
  pk_columns: Channel_Post_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Post_ReactionArgs = {
  _set?: Maybe<Channel_Post_Reaction_Set_Input>;
  where: Channel_Post_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Post_Reaction_By_PkArgs = {
  _set?: Maybe<Channel_Post_Reaction_Set_Input>;
  pk_columns: Channel_Post_Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Post_TypeArgs = {
  _set?: Maybe<Channel_Post_Type_Set_Input>;
  where: Channel_Post_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Post_Type_By_PkArgs = {
  _set?: Maybe<Channel_Post_Type_Set_Input>;
  pk_columns: Channel_Post_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_TypeArgs = {
  _set?: Maybe<Channel_Type_Set_Input>;
  where: Channel_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Type_By_PkArgs = {
  _set?: Maybe<Channel_Type_Set_Input>;
  pk_columns: Channel_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _set?: Maybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _set?: Maybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Event_Args = {
  _set?: Maybe<Event__Set_Input>;
  where: Event__Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Event__By_PkArgs = {
  _set?: Maybe<Event__Set_Input>;
  pk_columns: Event__Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Event_RsvpArgs = {
  _set?: Maybe<Event_Rsvp_Set_Input>;
  where: Event_Rsvp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Event_Rsvp_By_PkArgs = {
  _set?: Maybe<Event_Rsvp_Set_Input>;
  pk_columns: Event_Rsvp_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_GateArgs = {
  _set?: Maybe<Feature_Gate_Set_Input>;
  where: Feature_Gate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Gate_By_PkArgs = {
  _set?: Maybe<Feature_Gate_Set_Input>;
  pk_columns: Feature_Gate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FileArgs = {
  _inc?: Maybe<File_Inc_Input>;
  _set?: Maybe<File_Set_Input>;
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_By_PkArgs = {
  _inc?: Maybe<File_Inc_Input>;
  _set?: Maybe<File_Set_Input>;
  pk_columns: File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Notification_ControlArgs = {
  _set?: Maybe<Global_Notification_Control_Set_Input>;
  where: Global_Notification_Control_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Notification_Control_By_PkArgs = {
  _set?: Maybe<Global_Notification_Control_Set_Input>;
  pk_columns: Global_Notification_Control_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Notification_TypeArgs = {
  _set?: Maybe<Global_Notification_Type_Set_Input>;
  where: Global_Notification_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Notification_Type_By_PkArgs = {
  _set?: Maybe<Global_Notification_Type_Set_Input>;
  pk_columns: Global_Notification_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Args = {
  _inc?: Maybe<Group__Inc_Input>;
  _set?: Maybe<Group__Set_Input>;
  where: Group__Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group__By_PkArgs = {
  _inc?: Maybe<Group__Inc_Input>;
  _set?: Maybe<Group__Set_Input>;
  pk_columns: Group__Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Badge_TypeArgs = {
  _set?: Maybe<Group_Badge_Type_Set_Input>;
  where: Group_Badge_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Badge_Type_By_PkArgs = {
  _set?: Maybe<Group_Badge_Type_Set_Input>;
  pk_columns: Group_Badge_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_RequestArgs = {
  _set?: Maybe<Group_Join_Request_Set_Input>;
  where: Group_Join_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_By_PkArgs = {
  _set?: Maybe<Group_Join_Request_Set_Input>;
  pk_columns: Group_Join_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_TypeArgs = {
  _set?: Maybe<Group_Join_Request_Type_Set_Input>;
  where: Group_Join_Request_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_Type_By_PkArgs = {
  _set?: Maybe<Group_Join_Request_Type_Set_Input>;
  pk_columns: Group_Join_Request_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_TitleArgs = {
  _set?: Maybe<Group_Join_Title_Set_Input>;
  where: Group_Join_Title_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Title_By_PkArgs = {
  _set?: Maybe<Group_Join_Title_Set_Input>;
  pk_columns: Group_Join_Title_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_RoleArgs = {
  _set?: Maybe<Group_Role_Set_Input>;
  where: Group_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Role_By_PkArgs = {
  _set?: Maybe<Group_Role_Set_Input>;
  pk_columns: Group_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HangoutArgs = {
  _inc?: Maybe<Hangout_Inc_Input>;
  _set?: Maybe<Hangout_Set_Input>;
  where: Hangout_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hangout_By_PkArgs = {
  _inc?: Maybe<Hangout_Inc_Input>;
  _set?: Maybe<Hangout_Set_Input>;
  pk_columns: Hangout_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hangout_RequirementArgs = {
  _inc?: Maybe<Hangout_Requirement_Inc_Input>;
  _set?: Maybe<Hangout_Requirement_Set_Input>;
  where: Hangout_Requirement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hangout_Requirement_By_PkArgs = {
  _inc?: Maybe<Hangout_Requirement_Inc_Input>;
  _set?: Maybe<Hangout_Requirement_Set_Input>;
  pk_columns: Hangout_Requirement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Internal_NotificationArgs = {
  _set?: Maybe<Internal_Notification_Set_Input>;
  where: Internal_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Internal_Notification_By_PkArgs = {
  _set?: Maybe<Internal_Notification_Set_Input>;
  pk_columns: Internal_Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PollArgs = {
  _set?: Maybe<Poll_Set_Input>;
  where: Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_By_PkArgs = {
  _set?: Maybe<Poll_Set_Input>;
  pk_columns: Poll_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_OptionsArgs = {
  _set?: Maybe<Poll_Options_Set_Input>;
  where: Poll_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_Options_By_PkArgs = {
  _set?: Maybe<Poll_Options_Set_Input>;
  pk_columns: Poll_Options_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_ResponsesArgs = {
  _set?: Maybe<Poll_Responses_Set_Input>;
  where: Poll_Responses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_Responses_By_PkArgs = {
  _set?: Maybe<Poll_Responses_Set_Input>;
  pk_columns: Poll_Responses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReactionArgs = {
  _set?: Maybe<Reaction_Set_Input>;
  where: Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reaction_By_PkArgs = {
  _set?: Maybe<Reaction_Set_Input>;
  pk_columns: Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reaction_TypeArgs = {
  _set?: Maybe<Reaction_Type_Set_Input>;
  where: Reaction_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reaction_Type_By_PkArgs = {
  _set?: Maybe<Reaction_Type_Set_Input>;
  pk_columns: Reaction_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReportArgs = {
  _set?: Maybe<Report_Set_Input>;
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Report_By_PkArgs = {
  _set?: Maybe<Report_Set_Input>;
  pk_columns: Report_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: Maybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Social_ProfileArgs = {
  _set?: Maybe<Social_Profile_Set_Input>;
  where: Social_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Social_Profile_By_PkArgs = {
  _set?: Maybe<Social_Profile_Set_Input>;
  pk_columns: Social_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Args = {
  _append?: Maybe<User__Append_Input>;
  _delete_at_path?: Maybe<User__Delete_At_Path_Input>;
  _delete_elem?: Maybe<User__Delete_Elem_Input>;
  _delete_key?: Maybe<User__Delete_Key_Input>;
  _prepend?: Maybe<User__Prepend_Input>;
  _set?: Maybe<User__Set_Input>;
  where: User__Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User__By_PkArgs = {
  _append?: Maybe<User__Append_Input>;
  _delete_at_path?: Maybe<User__Delete_At_Path_Input>;
  _delete_elem?: Maybe<User__Delete_Elem_Input>;
  _delete_key?: Maybe<User__Delete_Key_Input>;
  _prepend?: Maybe<User__Prepend_Input>;
  _set?: Maybe<User__Set_Input>;
  pk_columns: User__Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Acquisition_TypeArgs = {
  _set?: Maybe<User_Acquisition_Type_Set_Input>;
  where: User_Acquisition_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Acquisition_Type_By_PkArgs = {
  _set?: Maybe<User_Acquisition_Type_Set_Input>;
  pk_columns: User_Acquisition_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_BadgeArgs = {
  _set?: Maybe<User_Badge_Set_Input>;
  where: User_Badge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Badge_By_PkArgs = {
  _set?: Maybe<User_Badge_Set_Input>;
  pk_columns: User_Badge_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GroupArgs = {
  _inc?: Maybe<User_Group_Inc_Input>;
  _set?: Maybe<User_Group_Set_Input>;
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Group_By_PkArgs = {
  _inc?: Maybe<User_Group_Inc_Input>;
  _set?: Maybe<User_Group_Set_Input>;
  pk_columns: User_Group_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "poll" */
export type Poll = {
  __typename?: 'poll';
  allowMultiple: Scalars['Boolean'];
  /** An object relationship */
  channel: Channel;
  channelId: Scalars['uuid'];
  /** An array relationship */
  channelPosts: Array<Channel_Post>;
  /** An aggregated array relationship */
  channelPosts_aggregate: Channel_Post_Aggregate;
  createdAt: Scalars['timestamp'];
  endDate: Scalars['timestamp'];
  id: Scalars['uuid'];
  /** An array relationship */
  pollOptions: Array<Poll_Options>;
  /** An aggregated array relationship */
  pollOptions_aggregate: Poll_Options_Aggregate;
  /** An array relationship */
  pollResponses: Array<Poll_Responses>;
  /** An aggregated array relationship */
  pollResponses_aggregate: Poll_Responses_Aggregate;
  question: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "poll" */
export type PollChannelPostsArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/** columns and relationships of "poll" */
export type PollChannelPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/** columns and relationships of "poll" */
export type PollPollOptionsArgs = {
  distinct_on?: Maybe<Array<Poll_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Options_Order_By>>;
  where?: Maybe<Poll_Options_Bool_Exp>;
};


/** columns and relationships of "poll" */
export type PollPollOptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Options_Order_By>>;
  where?: Maybe<Poll_Options_Bool_Exp>;
};


/** columns and relationships of "poll" */
export type PollPollResponsesArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/** columns and relationships of "poll" */
export type PollPollResponses_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};

/** aggregated selection of "poll" */
export type Poll_Aggregate = {
  __typename?: 'poll_aggregate';
  aggregate?: Maybe<Poll_Aggregate_Fields>;
  nodes: Array<Poll>;
};

/** aggregate fields of "poll" */
export type Poll_Aggregate_Fields = {
  __typename?: 'poll_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Poll_Max_Fields>;
  min?: Maybe<Poll_Min_Fields>;
};


/** aggregate fields of "poll" */
export type Poll_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll" */
export type Poll_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Max_Order_By>;
  min?: Maybe<Poll_Min_Order_By>;
};

/** input type for inserting array relation for remote table "poll" */
export type Poll_Arr_Rel_Insert_Input = {
  data: Array<Poll_Insert_Input>;
  on_conflict?: Maybe<Poll_On_Conflict>;
};

/** Boolean expression to filter rows from the table "poll". All fields are combined with a logical 'AND'. */
export type Poll_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Poll_Bool_Exp>>>;
  _not?: Maybe<Poll_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Poll_Bool_Exp>>>;
  allowMultiple?: Maybe<Boolean_Comparison_Exp>;
  channel?: Maybe<Channel_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  channelPosts?: Maybe<Channel_Post_Bool_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  endDate?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  pollOptions?: Maybe<Poll_Options_Bool_Exp>;
  pollResponses?: Maybe<Poll_Responses_Bool_Exp>;
  question?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "poll" */
export enum Poll_Constraint {
  /** unique or primary key constraint */
  PollPkey = 'poll_pkey'
}

/** input type for inserting data into table "poll" */
export type Poll_Insert_Input = {
  allowMultiple?: Maybe<Scalars['Boolean']>;
  channel?: Maybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: Maybe<Scalars['uuid']>;
  channelPosts?: Maybe<Channel_Post_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamp']>;
  endDate?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  pollOptions?: Maybe<Poll_Options_Arr_Rel_Insert_Input>;
  pollResponses?: Maybe<Poll_Responses_Arr_Rel_Insert_Input>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Poll_Max_Fields = {
  __typename?: 'poll_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  endDate?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "poll" */
export type Poll_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Min_Fields = {
  __typename?: 'poll_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  endDate?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "poll" */
export type Poll_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "poll" */
export type Poll_Mutation_Response = {
  __typename?: 'poll_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Poll>;
};

/** input type for inserting object relation for remote table "poll" */
export type Poll_Obj_Rel_Insert_Input = {
  data: Poll_Insert_Input;
  on_conflict?: Maybe<Poll_On_Conflict>;
};

/** on conflict condition type for table "poll" */
export type Poll_On_Conflict = {
  constraint: Poll_Constraint;
  update_columns: Array<Poll_Update_Column>;
  where?: Maybe<Poll_Bool_Exp>;
};

/** columns and relationships of "poll_options" */
export type Poll_Options = {
  __typename?: 'poll_options';
  createdAt: Scalars['timestamp'];
  emoji: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  poll: Poll;
  pollId: Scalars['uuid'];
  text: Scalars['String'];
  /** An array relationship */
  votedOptions: Array<Poll_Responses>;
  /** An aggregated array relationship */
  votedOptions_aggregate: Poll_Responses_Aggregate;
};


/** columns and relationships of "poll_options" */
export type Poll_OptionsVotedOptionsArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/** columns and relationships of "poll_options" */
export type Poll_OptionsVotedOptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};

/** aggregated selection of "poll_options" */
export type Poll_Options_Aggregate = {
  __typename?: 'poll_options_aggregate';
  aggregate?: Maybe<Poll_Options_Aggregate_Fields>;
  nodes: Array<Poll_Options>;
};

/** aggregate fields of "poll_options" */
export type Poll_Options_Aggregate_Fields = {
  __typename?: 'poll_options_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Poll_Options_Max_Fields>;
  min?: Maybe<Poll_Options_Min_Fields>;
};


/** aggregate fields of "poll_options" */
export type Poll_Options_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Options_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll_options" */
export type Poll_Options_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Options_Max_Order_By>;
  min?: Maybe<Poll_Options_Min_Order_By>;
};

/** input type for inserting array relation for remote table "poll_options" */
export type Poll_Options_Arr_Rel_Insert_Input = {
  data: Array<Poll_Options_Insert_Input>;
  on_conflict?: Maybe<Poll_Options_On_Conflict>;
};

/** Boolean expression to filter rows from the table "poll_options". All fields are combined with a logical 'AND'. */
export type Poll_Options_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Poll_Options_Bool_Exp>>>;
  _not?: Maybe<Poll_Options_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Poll_Options_Bool_Exp>>>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  emoji?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  poll?: Maybe<Poll_Bool_Exp>;
  pollId?: Maybe<Uuid_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  votedOptions?: Maybe<Poll_Responses_Bool_Exp>;
};

/** unique or primary key constraints on table "poll_options" */
export enum Poll_Options_Constraint {
  /** unique or primary key constraint */
  PollOptionsPkey = 'poll_options_pkey'
}

/** input type for inserting data into table "poll_options" */
export type Poll_Options_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  emoji?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  poll?: Maybe<Poll_Obj_Rel_Insert_Input>;
  pollId?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  votedOptions?: Maybe<Poll_Responses_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Poll_Options_Max_Fields = {
  __typename?: 'poll_options_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  emoji?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "poll_options" */
export type Poll_Options_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pollId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Options_Min_Fields = {
  __typename?: 'poll_options_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  emoji?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "poll_options" */
export type Poll_Options_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pollId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** response of any mutation on the table "poll_options" */
export type Poll_Options_Mutation_Response = {
  __typename?: 'poll_options_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Poll_Options>;
};

/** input type for inserting object relation for remote table "poll_options" */
export type Poll_Options_Obj_Rel_Insert_Input = {
  data: Poll_Options_Insert_Input;
  on_conflict?: Maybe<Poll_Options_On_Conflict>;
};

/** on conflict condition type for table "poll_options" */
export type Poll_Options_On_Conflict = {
  constraint: Poll_Options_Constraint;
  update_columns: Array<Poll_Options_Update_Column>;
  where?: Maybe<Poll_Options_Bool_Exp>;
};

/** ordering options when selecting data from "poll_options" */
export type Poll_Options_Order_By = {
  createdAt?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll?: Maybe<Poll_Order_By>;
  pollId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  votedOptions_aggregate?: Maybe<Poll_Responses_Aggregate_Order_By>;
};

/** primary key columns input for table: "poll_options" */
export type Poll_Options_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "poll_options" */
export enum Poll_Options_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'pollId',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "poll_options" */
export type Poll_Options_Set_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  emoji?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** update columns of table "poll_options" */
export enum Poll_Options_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'pollId',
  /** column name */
  Text = 'text'
}

/** ordering options when selecting data from "poll" */
export type Poll_Order_By = {
  allowMultiple?: Maybe<Order_By>;
  channel?: Maybe<Channel_Order_By>;
  channelId?: Maybe<Order_By>;
  channelPosts_aggregate?: Maybe<Channel_Post_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pollOptions_aggregate?: Maybe<Poll_Options_Aggregate_Order_By>;
  pollResponses_aggregate?: Maybe<Poll_Responses_Aggregate_Order_By>;
  question?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "poll" */
export type Poll_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "poll_responses" */
export type Poll_Responses = {
  __typename?: 'poll_responses';
  createdAt: Scalars['timestamp'];
  /** An object relationship */
  option?: Maybe<Poll_Options>;
  optionId: Scalars['uuid'];
  pollId: Scalars['uuid'];
  updatedAt: Scalars['timestamp'];
  /** An object relationship */
  user?: Maybe<User_>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "poll_responses" */
export type Poll_Responses_Aggregate = {
  __typename?: 'poll_responses_aggregate';
  aggregate?: Maybe<Poll_Responses_Aggregate_Fields>;
  nodes: Array<Poll_Responses>;
};

/** aggregate fields of "poll_responses" */
export type Poll_Responses_Aggregate_Fields = {
  __typename?: 'poll_responses_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Poll_Responses_Max_Fields>;
  min?: Maybe<Poll_Responses_Min_Fields>;
};


/** aggregate fields of "poll_responses" */
export type Poll_Responses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Responses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll_responses" */
export type Poll_Responses_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Responses_Max_Order_By>;
  min?: Maybe<Poll_Responses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "poll_responses" */
export type Poll_Responses_Arr_Rel_Insert_Input = {
  data: Array<Poll_Responses_Insert_Input>;
  on_conflict?: Maybe<Poll_Responses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "poll_responses". All fields are combined with a logical 'AND'. */
export type Poll_Responses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Poll_Responses_Bool_Exp>>>;
  _not?: Maybe<Poll_Responses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Poll_Responses_Bool_Exp>>>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  option?: Maybe<Poll_Options_Bool_Exp>;
  optionId?: Maybe<Uuid_Comparison_Exp>;
  pollId?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
  user?: Maybe<User__Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "poll_responses" */
export enum Poll_Responses_Constraint {
  /** unique or primary key constraint */
  PollResponsesPkey = 'poll_responses_pkey'
}

/** input type for inserting data into table "poll_responses" */
export type Poll_Responses_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  option?: Maybe<Poll_Options_Obj_Rel_Insert_Input>;
  optionId?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  user?: Maybe<User__Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Poll_Responses_Max_Fields = {
  __typename?: 'poll_responses_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  optionId?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "poll_responses" */
export type Poll_Responses_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  optionId?: Maybe<Order_By>;
  pollId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Responses_Min_Fields = {
  __typename?: 'poll_responses_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  optionId?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "poll_responses" */
export type Poll_Responses_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  optionId?: Maybe<Order_By>;
  pollId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "poll_responses" */
export type Poll_Responses_Mutation_Response = {
  __typename?: 'poll_responses_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Poll_Responses>;
};

/** input type for inserting object relation for remote table "poll_responses" */
export type Poll_Responses_Obj_Rel_Insert_Input = {
  data: Poll_Responses_Insert_Input;
  on_conflict?: Maybe<Poll_Responses_On_Conflict>;
};

/** on conflict condition type for table "poll_responses" */
export type Poll_Responses_On_Conflict = {
  constraint: Poll_Responses_Constraint;
  update_columns: Array<Poll_Responses_Update_Column>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};

/** ordering options when selecting data from "poll_responses" */
export type Poll_Responses_Order_By = {
  createdAt?: Maybe<Order_By>;
  option?: Maybe<Poll_Options_Order_By>;
  optionId?: Maybe<Order_By>;
  pollId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User__Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "poll_responses" */
export type Poll_Responses_Pk_Columns_Input = {
  optionId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "poll_responses" */
export enum Poll_Responses_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  OptionId = 'optionId',
  /** column name */
  PollId = 'pollId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "poll_responses" */
export type Poll_Responses_Set_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  optionId?: Maybe<Scalars['uuid']>;
  pollId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "poll_responses" */
export enum Poll_Responses_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  OptionId = 'optionId',
  /** column name */
  PollId = 'pollId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** select columns of table "poll" */
export enum Poll_Select_Column {
  /** column name */
  AllowMultiple = 'allowMultiple',
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "poll" */
export type Poll_Set_Input = {
  allowMultiple?: Maybe<Scalars['Boolean']>;
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  endDate?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** update columns of table "poll" */
export enum Poll_Update_Column {
  /** column name */
  AllowMultiple = 'allowMultiple',
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accomplishment_badge_type" */
  accomplishment_badge_type: Array<Accomplishment_Badge_Type>;
  /** fetch aggregated fields from the table: "accomplishment_badge_type" */
  accomplishment_badge_type_aggregate: Accomplishment_Badge_Type_Aggregate;
  /** fetch data from the table: "accomplishment_badge_type" using primary key columns */
  accomplishment_badge_type_by_pk?: Maybe<Accomplishment_Badge_Type>;
  /** fetch data from the table: "announcement_" */
  announcement_: Array<Announcement_>;
  /** fetch aggregated fields from the table: "announcement_" */
  announcement__aggregate: Announcement__Aggregate;
  /** fetch data from the table: "announcement_" using primary key columns */
  announcement__by_pk?: Maybe<Announcement_>;
  /** fetch data from the table: "announcement_file" */
  announcement_file: Array<Announcement_File>;
  /** fetch aggregated fields from the table: "announcement_file" */
  announcement_file_aggregate: Announcement_File_Aggregate;
  /** fetch data from the table: "announcement_file" using primary key columns */
  announcement_file_by_pk?: Maybe<Announcement_File>;
  /** fetch data from the table: "blacklist" */
  blacklist: Array<Blacklist>;
  /** fetch aggregated fields from the table: "blacklist" */
  blacklist_aggregate: Blacklist_Aggregate;
  /** fetch data from the table: "blacklist" using primary key columns */
  blacklist_by_pk?: Maybe<Blacklist>;
  /** fetch data from the table: "challenge" */
  challenge: Array<Challenge>;
  /** fetch aggregated fields from the table: "challenge" */
  challenge_aggregate: Challenge_Aggregate;
  /** fetch data from the table: "challenge" using primary key columns */
  challenge_by_pk?: Maybe<Challenge>;
  /** fetch data from the table: "challenge_channel" */
  challenge_channel: Array<Challenge_Channel>;
  /** fetch aggregated fields from the table: "challenge_channel" */
  challenge_channel_aggregate: Challenge_Channel_Aggregate;
  /** fetch data from the table: "challenge_channel" using primary key columns */
  challenge_channel_by_pk?: Maybe<Challenge_Channel>;
  /** fetch data from the table: "challenge_entry" */
  challenge_entry: Array<Challenge_Entry>;
  /** fetch aggregated fields from the table: "challenge_entry" */
  challenge_entry_aggregate: Challenge_Entry_Aggregate;
  /** fetch data from the table: "challenge_entry" using primary key columns */
  challenge_entry_by_pk?: Maybe<Challenge_Entry>;
  /** fetch data from the table: "challenge_entry_comment" */
  challenge_entry_comment: Array<Challenge_Entry_Comment>;
  /** fetch aggregated fields from the table: "challenge_entry_comment" */
  challenge_entry_comment_aggregate: Challenge_Entry_Comment_Aggregate;
  /** fetch data from the table: "challenge_entry_comment" using primary key columns */
  challenge_entry_comment_by_pk?: Maybe<Challenge_Entry_Comment>;
  /** fetch data from the table: "challenge_entry_file" */
  challenge_entry_file: Array<Challenge_Entry_File>;
  /** fetch aggregated fields from the table: "challenge_entry_file" */
  challenge_entry_file_aggregate: Challenge_Entry_File_Aggregate;
  /** fetch data from the table: "challenge_entry_file" using primary key columns */
  challenge_entry_file_by_pk?: Maybe<Challenge_Entry_File>;
  /** fetch data from the table: "challenge_entry_reaction" */
  challenge_entry_reaction: Array<Challenge_Entry_Reaction>;
  /** fetch aggregated fields from the table: "challenge_entry_reaction" */
  challenge_entry_reaction_aggregate: Challenge_Entry_Reaction_Aggregate;
  /** fetch data from the table: "challenge_entry_reaction" using primary key columns */
  challenge_entry_reaction_by_pk?: Maybe<Challenge_Entry_Reaction>;
  /** fetch data from the table: "challenge_file" */
  challenge_file: Array<Challenge_File>;
  /** fetch aggregated fields from the table: "challenge_file" */
  challenge_file_aggregate: Challenge_File_Aggregate;
  /** fetch data from the table: "challenge_file" using primary key columns */
  challenge_file_by_pk?: Maybe<Challenge_File>;
  /** fetch data from the table: "challenge_group" */
  challenge_group: Array<Challenge_Group>;
  /** fetch aggregated fields from the table: "challenge_group" */
  challenge_group_aggregate: Challenge_Group_Aggregate;
  /** fetch data from the table: "challenge_group" using primary key columns */
  challenge_group_by_pk?: Maybe<Challenge_Group>;
  /** fetch data from the table: "challenge_points" */
  challenge_points: Array<Challenge_Points>;
  /** fetch aggregated fields from the table: "challenge_points" */
  challenge_points_aggregate: Challenge_Points_Aggregate;
  /** fetch data from the table: "challenge_points" using primary key columns */
  challenge_points_by_pk?: Maybe<Challenge_Points>;
  /** fetch data from the table: "challenge_series" */
  challenge_series: Array<Challenge_Series>;
  /** fetch aggregated fields from the table: "challenge_series" */
  challenge_series_aggregate: Challenge_Series_Aggregate;
  /** fetch data from the table: "challenge_series" using primary key columns */
  challenge_series_by_pk?: Maybe<Challenge_Series>;
  /** fetch data from the table: "challenge_series_challenges" */
  challenge_series_challenges: Array<Challenge_Series_Challenges>;
  /** fetch aggregated fields from the table: "challenge_series_challenges" */
  challenge_series_challenges_aggregate: Challenge_Series_Challenges_Aggregate;
  /** fetch data from the table: "challenge_series_challenges" using primary key columns */
  challenge_series_challenges_by_pk?: Maybe<Challenge_Series_Challenges>;
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "channel_file" */
  channel_file: Array<Channel_File>;
  /** fetch aggregated fields from the table: "channel_file" */
  channel_file_aggregate: Channel_File_Aggregate;
  /** fetch data from the table: "channel_file" using primary key columns */
  channel_file_by_pk?: Maybe<Channel_File>;
  /** fetch data from the table: "channel_member" */
  channel_member: Array<Channel_Member>;
  /** fetch aggregated fields from the table: "channel_member" */
  channel_member_aggregate: Channel_Member_Aggregate;
  /** fetch data from the table: "channel_member" using primary key columns */
  channel_member_by_pk?: Maybe<Channel_Member>;
  /** fetch data from the table: "channel_member_typing" */
  channel_member_typing: Array<Channel_Member_Typing>;
  /** fetch aggregated fields from the table: "channel_member_typing" */
  channel_member_typing_aggregate: Channel_Member_Typing_Aggregate;
  /** fetch data from the table: "channel_post" */
  channel_post: Array<Channel_Post>;
  /** fetch aggregated fields from the table: "channel_post" */
  channel_post_aggregate: Channel_Post_Aggregate;
  /** fetch data from the table: "channel_post" using primary key columns */
  channel_post_by_pk?: Maybe<Channel_Post>;
  /** fetch data from the table: "channel_post_file" */
  channel_post_file: Array<Channel_Post_File>;
  /** fetch aggregated fields from the table: "channel_post_file" */
  channel_post_file_aggregate: Channel_Post_File_Aggregate;
  /** fetch data from the table: "channel_post_file" using primary key columns */
  channel_post_file_by_pk?: Maybe<Channel_Post_File>;
  /** fetch data from the table: "channel_post_reaction" */
  channel_post_reaction: Array<Channel_Post_Reaction>;
  /** fetch aggregated fields from the table: "channel_post_reaction" */
  channel_post_reaction_aggregate: Channel_Post_Reaction_Aggregate;
  /** fetch data from the table: "channel_post_reaction" using primary key columns */
  channel_post_reaction_by_pk?: Maybe<Channel_Post_Reaction>;
  /** fetch data from the table: "channel_post_type" */
  channel_post_type: Array<Channel_Post_Type>;
  /** fetch aggregated fields from the table: "channel_post_type" */
  channel_post_type_aggregate: Channel_Post_Type_Aggregate;
  /** fetch data from the table: "channel_post_type" using primary key columns */
  channel_post_type_by_pk?: Maybe<Channel_Post_Type>;
  /** fetch data from the table: "channel_type" */
  channel_type: Array<Channel_Type>;
  /** fetch aggregated fields from the table: "channel_type" */
  channel_type_aggregate: Channel_Type_Aggregate;
  /** fetch data from the table: "channel_type" using primary key columns */
  channel_type_by_pk?: Maybe<Channel_Type>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** retrieve the result of action: "deactivate_account" */
  deactivate_account?: Maybe<Deactivate_Account>;
  /** fetch data from the table: "event_" */
  event_: Array<Event_>;
  /** fetch aggregated fields from the table: "event_" */
  event__aggregate: Event__Aggregate;
  /** fetch data from the table: "event_" using primary key columns */
  event__by_pk?: Maybe<Event_>;
  /** fetch data from the table: "event_rsvp" */
  event_rsvp: Array<Event_Rsvp>;
  /** fetch aggregated fields from the table: "event_rsvp" */
  event_rsvp_aggregate: Event_Rsvp_Aggregate;
  /** fetch data from the table: "event_rsvp" using primary key columns */
  event_rsvp_by_pk?: Maybe<Event_Rsvp>;
  /** fetch data from the table: "feature_gate" */
  feature_gate: Array<Feature_Gate>;
  /** fetch aggregated fields from the table: "feature_gate" */
  feature_gate_aggregate: Feature_Gate_Aggregate;
  /** fetch data from the table: "feature_gate" using primary key columns */
  feature_gate_by_pk?: Maybe<Feature_Gate>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "global_notification_control" */
  global_notification_control: Array<Global_Notification_Control>;
  /** fetch aggregated fields from the table: "global_notification_control" */
  global_notification_control_aggregate: Global_Notification_Control_Aggregate;
  /** fetch data from the table: "global_notification_control" using primary key columns */
  global_notification_control_by_pk?: Maybe<Global_Notification_Control>;
  /** fetch data from the table: "global_notification_type" */
  global_notification_type: Array<Global_Notification_Type>;
  /** fetch aggregated fields from the table: "global_notification_type" */
  global_notification_type_aggregate: Global_Notification_Type_Aggregate;
  /** fetch data from the table: "global_notification_type" using primary key columns */
  global_notification_type_by_pk?: Maybe<Global_Notification_Type>;
  /** fetch data from the table: "group_" */
  group_: Array<Group_>;
  /** fetch aggregated fields from the table: "group_" */
  group__aggregate: Group__Aggregate;
  /** fetch data from the table: "group_" using primary key columns */
  group__by_pk?: Maybe<Group_>;
  /** fetch data from the table: "group_badge_type" */
  group_badge_type: Array<Group_Badge_Type>;
  /** fetch aggregated fields from the table: "group_badge_type" */
  group_badge_type_aggregate: Group_Badge_Type_Aggregate;
  /** fetch data from the table: "group_badge_type" using primary key columns */
  group_badge_type_by_pk?: Maybe<Group_Badge_Type>;
  /** fetch data from the table: "group_join_request" */
  group_join_request: Array<Group_Join_Request>;
  /** fetch aggregated fields from the table: "group_join_request" */
  group_join_request_aggregate: Group_Join_Request_Aggregate;
  /** fetch data from the table: "group_join_request" using primary key columns */
  group_join_request_by_pk?: Maybe<Group_Join_Request>;
  /** fetch data from the table: "group_join_request_type" */
  group_join_request_type: Array<Group_Join_Request_Type>;
  /** fetch aggregated fields from the table: "group_join_request_type" */
  group_join_request_type_aggregate: Group_Join_Request_Type_Aggregate;
  /** fetch data from the table: "group_join_request_type" using primary key columns */
  group_join_request_type_by_pk?: Maybe<Group_Join_Request_Type>;
  /** fetch data from the table: "group_join_title" */
  group_join_title: Array<Group_Join_Title>;
  /** fetch aggregated fields from the table: "group_join_title" */
  group_join_title_aggregate: Group_Join_Title_Aggregate;
  /** fetch data from the table: "group_join_title" using primary key columns */
  group_join_title_by_pk?: Maybe<Group_Join_Title>;
  /** fetch data from the table: "group_role" */
  group_role: Array<Group_Role>;
  /** fetch aggregated fields from the table: "group_role" */
  group_role_aggregate: Group_Role_Aggregate;
  /** fetch data from the table: "group_role" using primary key columns */
  group_role_by_pk?: Maybe<Group_Role>;
  /** fetch data from the table: "hangout" */
  hangout: Array<Hangout>;
  /** fetch aggregated fields from the table: "hangout" */
  hangout_aggregate: Hangout_Aggregate;
  /** fetch data from the table: "hangout" using primary key columns */
  hangout_by_pk?: Maybe<Hangout>;
  /** fetch data from the table: "hangout_requirement" */
  hangout_requirement: Array<Hangout_Requirement>;
  /** fetch aggregated fields from the table: "hangout_requirement" */
  hangout_requirement_aggregate: Hangout_Requirement_Aggregate;
  /** fetch data from the table: "hangout_requirement" using primary key columns */
  hangout_requirement_by_pk?: Maybe<Hangout_Requirement>;
  /** fetch data from the table: "internal_notification" */
  internal_notification: Array<Internal_Notification>;
  /** fetch aggregated fields from the table: "internal_notification" */
  internal_notification_aggregate: Internal_Notification_Aggregate;
  /** fetch data from the table: "internal_notification" using primary key columns */
  internal_notification_by_pk?: Maybe<Internal_Notification>;
  /** retrieve the result of action: "log_amplitude_event" */
  log_amplitude_event?: Maybe<Log_Amplitude_Event>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "poll_options" */
  poll_options: Array<Poll_Options>;
  /** fetch aggregated fields from the table: "poll_options" */
  poll_options_aggregate: Poll_Options_Aggregate;
  /** fetch data from the table: "poll_options" using primary key columns */
  poll_options_by_pk?: Maybe<Poll_Options>;
  /** fetch data from the table: "poll_responses" */
  poll_responses: Array<Poll_Responses>;
  /** fetch aggregated fields from the table: "poll_responses" */
  poll_responses_aggregate: Poll_Responses_Aggregate;
  /** fetch data from the table: "poll_responses" using primary key columns */
  poll_responses_by_pk?: Maybe<Poll_Responses>;
  /** fetch data from the table: "reaction" */
  reaction: Array<Reaction>;
  /** fetch aggregated fields from the table: "reaction" */
  reaction_aggregate: Reaction_Aggregate;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction_by_pk?: Maybe<Reaction>;
  /** fetch data from the table: "reaction_type" */
  reaction_type: Array<Reaction_Type>;
  /** fetch aggregated fields from the table: "reaction_type" */
  reaction_type_aggregate: Reaction_Type_Aggregate;
  /** fetch data from the table: "reaction_type" using primary key columns */
  reaction_type_by_pk?: Maybe<Reaction_Type>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "social_profile" */
  social_profile: Array<Social_Profile>;
  /** fetch aggregated fields from the table: "social_profile" */
  social_profile_aggregate: Social_Profile_Aggregate;
  /** fetch data from the table: "social_profile" using primary key columns */
  social_profile_by_pk?: Maybe<Social_Profile>;
  /** fetch data from the table: "user_" */
  user_: Array<User_>;
  /** fetch aggregated fields from the table: "user_" */
  user__aggregate: User__Aggregate;
  /** fetch data from the table: "user_" using primary key columns */
  user__by_pk?: Maybe<User_>;
  /** fetch data from the table: "user_acquisition_type" */
  user_acquisition_type: Array<User_Acquisition_Type>;
  /** fetch aggregated fields from the table: "user_acquisition_type" */
  user_acquisition_type_aggregate: User_Acquisition_Type_Aggregate;
  /** fetch data from the table: "user_acquisition_type" using primary key columns */
  user_acquisition_type_by_pk?: Maybe<User_Acquisition_Type>;
  /** fetch data from the table: "user_badge" */
  user_badge: Array<User_Badge>;
  /** fetch aggregated fields from the table: "user_badge" */
  user_badge_aggregate: User_Badge_Aggregate;
  /** fetch data from the table: "user_badge" using primary key columns */
  user_badge_by_pk?: Maybe<User_Badge>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
};


/** query root */
export type Query_RootAccomplishment_Badge_TypeArgs = {
  distinct_on?: Maybe<Array<Accomplishment_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accomplishment_Badge_Type_Order_By>>;
  where?: Maybe<Accomplishment_Badge_Type_Bool_Exp>;
};


/** query root */
export type Query_RootAccomplishment_Badge_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Accomplishment_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accomplishment_Badge_Type_Order_By>>;
  where?: Maybe<Accomplishment_Badge_Type_Bool_Exp>;
};


/** query root */
export type Query_RootAccomplishment_Badge_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootAnnouncement_Args = {
  distinct_on?: Maybe<Array<Announcement__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement__Order_By>>;
  where?: Maybe<Announcement__Bool_Exp>;
};


/** query root */
export type Query_RootAnnouncement__AggregateArgs = {
  distinct_on?: Maybe<Array<Announcement__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement__Order_By>>;
  where?: Maybe<Announcement__Bool_Exp>;
};


/** query root */
export type Query_RootAnnouncement__By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootAnnouncement_FileArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/** query root */
export type Query_RootAnnouncement_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/** query root */
export type Query_RootAnnouncement_File_By_PkArgs = {
  announcement_id: Scalars['uuid'];
  file_id: Scalars['uuid'];
};


/** query root */
export type Query_RootBlacklistArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/** query root */
export type Query_RootBlacklist_AggregateArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/** query root */
export type Query_RootBlacklist_By_PkArgs = {
  blockUserId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** query root */
export type Query_RootChallengeArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_ChannelArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Channel_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Channel_By_PkArgs = {
  channelId: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_EntryArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_Entry_CommentArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Comment_Order_By>>;
  where?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Comment_Order_By>>;
  where?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_Comment_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  commentId: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_Entry_FileArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_File_Order_By>>;
  where?: Maybe<Challenge_Entry_File_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_File_Order_By>>;
  where?: Maybe<Challenge_Entry_File_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_File_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_Entry_ReactionArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Reaction_Order_By>>;
  where?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Reaction_Order_By>>;
  where?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Entry_Reaction_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_FileArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_File_By_PkArgs = {
  challengeId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_GroupArgs = {
  distinct_on?: Maybe<Array<Challenge_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Group_Order_By>>;
  where?: Maybe<Challenge_Group_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Group_Order_By>>;
  where?: Maybe<Challenge_Group_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_PointsArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Points_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Points_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_SeriesArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Order_By>>;
  where?: Maybe<Challenge_Series_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Series_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Order_By>>;
  where?: Maybe<Challenge_Series_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Series_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChallenge_Series_ChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Series_Challenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};


/** query root */
export type Query_RootChallenge_Series_Challenges_By_PkArgs = {
  challengeId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
};


/** query root */
export type Query_RootChannelArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChannel_FileArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_File_By_PkArgs = {
  channelId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** query root */
export type Query_RootChannel_MemberArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Member_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Member_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChannel_Member_TypingArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Typing_Order_By>>;
  where?: Maybe<Channel_Member_Typing_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Member_Typing_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Typing_Order_By>>;
  where?: Maybe<Channel_Member_Typing_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_PostArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChannel_Post_FileArgs = {
  distinct_on?: Maybe<Array<Channel_Post_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_File_Order_By>>;
  where?: Maybe<Channel_Post_File_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_File_Order_By>>;
  where?: Maybe<Channel_Post_File_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_File_By_PkArgs = {
  channelPostId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** query root */
export type Query_RootChannel_Post_ReactionArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Reaction_Order_By>>;
  where?: Maybe<Channel_Post_Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Reaction_Order_By>>;
  where?: Maybe<Channel_Post_Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_Reaction_By_PkArgs = {
  channelPostId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};


/** query root */
export type Query_RootChannel_Post_TypeArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Type_Order_By>>;
  where?: Maybe<Channel_Post_Type_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Type_Order_By>>;
  where?: Maybe<Channel_Post_Type_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootChannel_TypeArgs = {
  distinct_on?: Maybe<Array<Channel_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Type_Order_By>>;
  where?: Maybe<Channel_Type_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Type_Order_By>>;
  where?: Maybe<Channel_Type_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootCommentArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** query root */
export type Query_RootComment_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** query root */
export type Query_RootComment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDeactivate_AccountArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootEvent_Args = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/** query root */
export type Query_RootEvent__AggregateArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/** query root */
export type Query_RootEvent__By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootEvent_RsvpArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};


/** query root */
export type Query_RootEvent_Rsvp_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};


/** query root */
export type Query_RootEvent_Rsvp_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFeature_GateArgs = {
  distinct_on?: Maybe<Array<Feature_Gate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Gate_Order_By>>;
  where?: Maybe<Feature_Gate_Bool_Exp>;
};


/** query root */
export type Query_RootFeature_Gate_AggregateArgs = {
  distinct_on?: Maybe<Array<Feature_Gate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Gate_Order_By>>;
  where?: Maybe<Feature_Gate_Bool_Exp>;
};


/** query root */
export type Query_RootFeature_Gate_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFileArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


/** query root */
export type Query_RootFile_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


/** query root */
export type Query_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGlobal_Notification_ControlArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Control_Order_By>>;
  where?: Maybe<Global_Notification_Control_Bool_Exp>;
};


/** query root */
export type Query_RootGlobal_Notification_Control_AggregateArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Control_Order_By>>;
  where?: Maybe<Global_Notification_Control_Bool_Exp>;
};


/** query root */
export type Query_RootGlobal_Notification_Control_By_PkArgs = {
  userId: Scalars['uuid'];
};


/** query root */
export type Query_RootGlobal_Notification_TypeArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Type_Order_By>>;
  where?: Maybe<Global_Notification_Type_Bool_Exp>;
};


/** query root */
export type Query_RootGlobal_Notification_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Type_Order_By>>;
  where?: Maybe<Global_Notification_Type_Bool_Exp>;
};


/** query root */
export type Query_RootGlobal_Notification_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootGroup_Args = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};


/** query root */
export type Query_RootGroup__AggregateArgs = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};


/** query root */
export type Query_RootGroup__By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_Badge_TypeArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Badge_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Badge_Type_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_Join_RequestArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Request_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_Join_Request_TypeArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Type_Order_By>>;
  where?: Maybe<Group_Join_Request_Type_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Request_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Type_Order_By>>;
  where?: Maybe<Group_Join_Request_Type_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Request_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootGroup_Join_TitleArgs = {
  distinct_on?: Maybe<Array<Group_Join_Title_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Title_Order_By>>;
  where?: Maybe<Group_Join_Title_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Title_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Title_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Title_Order_By>>;
  where?: Maybe<Group_Join_Title_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Title_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootGroup_RoleArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootHangoutArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/** query root */
export type Query_RootHangout_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/** query root */
export type Query_RootHangout_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootHangout_RequirementArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};


/** query root */
export type Query_RootHangout_Requirement_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};


/** query root */
export type Query_RootHangout_Requirement_By_PkArgs = {
  hangout_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootInternal_NotificationArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/** query root */
export type Query_RootInternal_Notification_AggregateArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/** query root */
export type Query_RootInternal_Notification_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootLog_Amplitude_EventArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPoll_OptionsArgs = {
  distinct_on?: Maybe<Array<Poll_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Options_Order_By>>;
  where?: Maybe<Poll_Options_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Options_Order_By>>;
  where?: Maybe<Poll_Options_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPoll_ResponsesArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Responses_By_PkArgs = {
  optionId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** query root */
export type Query_RootReactionArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootReaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootReaction_TypeArgs = {
  distinct_on?: Maybe<Array<Reaction_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Type_Order_By>>;
  where?: Maybe<Reaction_Type_Bool_Exp>;
};


/** query root */
export type Query_RootReaction_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Type_Order_By>>;
  where?: Maybe<Reaction_Type_Bool_Exp>;
};


/** query root */
export type Query_RootReaction_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootReportArgs = {
  distinct_on?: Maybe<Array<Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Report_Order_By>>;
  where?: Maybe<Report_Bool_Exp>;
};


/** query root */
export type Query_RootReport_AggregateArgs = {
  distinct_on?: Maybe<Array<Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Report_Order_By>>;
  where?: Maybe<Report_Bool_Exp>;
};


/** query root */
export type Query_RootReport_By_PkArgs = {
  groupId: Scalars['uuid'];
  reporterId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** query root */
export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRole_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootSocial_ProfileArgs = {
  distinct_on?: Maybe<Array<Social_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Social_Profile_Order_By>>;
  where?: Maybe<Social_Profile_Bool_Exp>;
};


/** query root */
export type Query_RootSocial_Profile_AggregateArgs = {
  distinct_on?: Maybe<Array<Social_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Social_Profile_Order_By>>;
  where?: Maybe<Social_Profile_Bool_Exp>;
};


/** query root */
export type Query_RootSocial_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_Args = {
  distinct_on?: Maybe<Array<User__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User__Order_By>>;
  where?: Maybe<User__Bool_Exp>;
};


/** query root */
export type Query_RootUser__AggregateArgs = {
  distinct_on?: Maybe<Array<User__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User__Order_By>>;
  where?: Maybe<User__Bool_Exp>;
};


/** query root */
export type Query_RootUser__By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_Acquisition_TypeArgs = {
  distinct_on?: Maybe<Array<User_Acquisition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Acquisition_Type_Order_By>>;
  where?: Maybe<User_Acquisition_Type_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Acquisition_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Acquisition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Acquisition_Type_Order_By>>;
  where?: Maybe<User_Acquisition_Type_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Acquisition_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootUser_BadgeArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Badge_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Badge_By_PkArgs = {
  groupBadgeTypeId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_GroupArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Group_By_PkArgs = {
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/**
 * reactions
 *
 *
 * columns and relationships of "reaction"
 */
export type Reaction = {
  __typename?: 'reaction';
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  /** An object relationship */
  reaction_type: Reaction_Type;
  type: Reaction_Type_Enum;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_?: Maybe<User_>;
};

/** aggregated selection of "reaction" */
export type Reaction_Aggregate = {
  __typename?: 'reaction_aggregate';
  aggregate?: Maybe<Reaction_Aggregate_Fields>;
  nodes: Array<Reaction>;
};

/** aggregate fields of "reaction" */
export type Reaction_Aggregate_Fields = {
  __typename?: 'reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Reaction_Max_Fields>;
  min?: Maybe<Reaction_Min_Fields>;
};


/** aggregate fields of "reaction" */
export type Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reaction" */
export type Reaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Reaction_Max_Order_By>;
  min?: Maybe<Reaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "reaction" */
export type Reaction_Arr_Rel_Insert_Input = {
  data: Array<Reaction_Insert_Input>;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export type Reaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  _not?: Maybe<Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  reaction_type?: Maybe<Reaction_Type_Bool_Exp>;
  type?: Maybe<Reaction_Type_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
};

/** unique or primary key constraints on table "reaction" */
export enum Reaction_Constraint {
  /** unique or primary key constraint */
  ReactionPkey = 'reaction_pkey',
  /** unique or primary key constraint */
  ReactionPrismaIdKey = 'reaction_prisma_id_key'
}

/** input type for inserting data into table "reaction" */
export type Reaction_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  reaction_type?: Maybe<Reaction_Type_Obj_Rel_Insert_Input>;
  type?: Maybe<Reaction_Type_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Reaction_Max_Fields = {
  __typename?: 'reaction_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "reaction" */
export type Reaction_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reaction_Min_Fields = {
  __typename?: 'reaction_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "reaction" */
export type Reaction_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "reaction" */
export type Reaction_Mutation_Response = {
  __typename?: 'reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Reaction>;
};

/** input type for inserting object relation for remote table "reaction" */
export type Reaction_Obj_Rel_Insert_Input = {
  data: Reaction_Insert_Input;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};

/** on conflict condition type for table "reaction" */
export type Reaction_On_Conflict = {
  constraint: Reaction_Constraint;
  update_columns: Array<Reaction_Update_Column>;
  where?: Maybe<Reaction_Bool_Exp>;
};

/** ordering options when selecting data from "reaction" */
export type Reaction_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  reaction_type?: Maybe<Reaction_Type_Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
};

/** primary key columns input for table: "reaction" */
export type Reaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "reaction" */
export enum Reaction_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "reaction" */
export type Reaction_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  prismaId?: Maybe<Scalars['String']>;
  prismaUserId?: Maybe<Scalars['String']>;
  type?: Maybe<Reaction_Type_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/**
 * reaction types
 *
 *
 * columns and relationships of "reaction_type"
 */
export type Reaction_Type = {
  __typename?: 'reaction_type';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  reactions: Array<Reaction>;
  /** An aggregated array relationship */
  reactions_aggregate: Reaction_Aggregate;
  value: Scalars['String'];
};


/**
 * reaction types
 *
 *
 * columns and relationships of "reaction_type"
 */
export type Reaction_TypeReactionsArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/**
 * reaction types
 *
 *
 * columns and relationships of "reaction_type"
 */
export type Reaction_TypeReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};

/** aggregated selection of "reaction_type" */
export type Reaction_Type_Aggregate = {
  __typename?: 'reaction_type_aggregate';
  aggregate?: Maybe<Reaction_Type_Aggregate_Fields>;
  nodes: Array<Reaction_Type>;
};

/** aggregate fields of "reaction_type" */
export type Reaction_Type_Aggregate_Fields = {
  __typename?: 'reaction_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Reaction_Type_Max_Fields>;
  min?: Maybe<Reaction_Type_Min_Fields>;
};


/** aggregate fields of "reaction_type" */
export type Reaction_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reaction_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reaction_type" */
export type Reaction_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Reaction_Type_Max_Order_By>;
  min?: Maybe<Reaction_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "reaction_type" */
export type Reaction_Type_Arr_Rel_Insert_Input = {
  data: Array<Reaction_Type_Insert_Input>;
  on_conflict?: Maybe<Reaction_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reaction_type". All fields are combined with a logical 'AND'. */
export type Reaction_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reaction_Type_Bool_Exp>>>;
  _not?: Maybe<Reaction_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reaction_Type_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  reactions?: Maybe<Reaction_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reaction_type" */
export enum Reaction_Type_Constraint {
  /** unique or primary key constraint */
  ChallengeEntryReactionTypePkey = 'challenge_entry_reaction_type_pkey'
}

export enum Reaction_Type_Enum {
  Heart = 'heart'
}

/** expression to compare columns of type reaction_type_enum. All fields are combined with logical 'AND'. */
export type Reaction_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Reaction_Type_Enum>;
  _in?: Maybe<Array<Reaction_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Reaction_Type_Enum>;
  _nin?: Maybe<Array<Reaction_Type_Enum>>;
};

/** input type for inserting data into table "reaction_type" */
export type Reaction_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  reactions?: Maybe<Reaction_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reaction_Type_Max_Fields = {
  __typename?: 'reaction_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reaction_type" */
export type Reaction_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reaction_Type_Min_Fields = {
  __typename?: 'reaction_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reaction_type" */
export type Reaction_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "reaction_type" */
export type Reaction_Type_Mutation_Response = {
  __typename?: 'reaction_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Reaction_Type>;
};

/** input type for inserting object relation for remote table "reaction_type" */
export type Reaction_Type_Obj_Rel_Insert_Input = {
  data: Reaction_Type_Insert_Input;
  on_conflict?: Maybe<Reaction_Type_On_Conflict>;
};

/** on conflict condition type for table "reaction_type" */
export type Reaction_Type_On_Conflict = {
  constraint: Reaction_Type_Constraint;
  update_columns: Array<Reaction_Type_Update_Column>;
  where?: Maybe<Reaction_Type_Bool_Exp>;
};

/** ordering options when selecting data from "reaction_type" */
export type Reaction_Type_Order_By = {
  description?: Maybe<Order_By>;
  reactions_aggregate?: Maybe<Reaction_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "reaction_type" */
export type Reaction_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "reaction_type" */
export enum Reaction_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "reaction_type" */
export type Reaction_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "reaction_type" */
export enum Reaction_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** update columns of table "reaction" */
export enum Reaction_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "report" */
export type Report = {
  __typename?: 'report';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  group: Group_;
  groupId: Scalars['uuid'];
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  reason: Scalars['String'];
  /** An object relationship */
  reporter: User_;
  reporterId: Scalars['uuid'];
  /** An object relationship */
  user: User_;
  userId: Scalars['uuid'];
};

/** aggregated selection of "report" */
export type Report_Aggregate = {
  __typename?: 'report_aggregate';
  aggregate?: Maybe<Report_Aggregate_Fields>;
  nodes: Array<Report>;
};

/** aggregate fields of "report" */
export type Report_Aggregate_Fields = {
  __typename?: 'report_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Report_Max_Fields>;
  min?: Maybe<Report_Min_Fields>;
};


/** aggregate fields of "report" */
export type Report_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Report_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "report" */
export type Report_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Report_Max_Order_By>;
  min?: Maybe<Report_Min_Order_By>;
};

/** input type for inserting array relation for remote table "report" */
export type Report_Arr_Rel_Insert_Input = {
  data: Array<Report_Insert_Input>;
  on_conflict?: Maybe<Report_On_Conflict>;
};

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type Report_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Report_Bool_Exp>>>;
  _not?: Maybe<Report_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Report_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Group__Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  lastSeenAt?: Maybe<Timestamp_Comparison_Exp>;
  reason?: Maybe<String_Comparison_Exp>;
  reporter?: Maybe<User__Bool_Exp>;
  reporterId?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User__Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "report" */
export enum Report_Constraint {
  /** unique or primary key constraint */
  ReportPkey = 'report_pkey'
}

/** input type for inserting data into table "report" */
export type Report_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Group__Obj_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  reason?: Maybe<Scalars['String']>;
  reporter?: Maybe<User__Obj_Rel_Insert_Input>;
  reporterId?: Maybe<Scalars['uuid']>;
  user?: Maybe<User__Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Report_Max_Fields = {
  __typename?: 'report_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  reason?: Maybe<Scalars['String']>;
  reporterId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "report" */
export type Report_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  lastSeenAt?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
  reporterId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Report_Min_Fields = {
  __typename?: 'report_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  reason?: Maybe<Scalars['String']>;
  reporterId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "report" */
export type Report_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  lastSeenAt?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
  reporterId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "report" */
export type Report_Mutation_Response = {
  __typename?: 'report_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Report>;
};

/** input type for inserting object relation for remote table "report" */
export type Report_Obj_Rel_Insert_Input = {
  data: Report_Insert_Input;
  on_conflict?: Maybe<Report_On_Conflict>;
};

/** on conflict condition type for table "report" */
export type Report_On_Conflict = {
  constraint: Report_Constraint;
  update_columns: Array<Report_Update_Column>;
  where?: Maybe<Report_Bool_Exp>;
};

/** ordering options when selecting data from "report" */
export type Report_Order_By = {
  createdAt?: Maybe<Order_By>;
  group?: Maybe<Group__Order_By>;
  groupId?: Maybe<Order_By>;
  lastSeenAt?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
  reporter?: Maybe<User__Order_By>;
  reporterId?: Maybe<Order_By>;
  user?: Maybe<User__Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "report" */
export type Report_Pk_Columns_Input = {
  groupId: Scalars['uuid'];
  reporterId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "report" */
export enum Report_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  LastSeenAt = 'lastSeenAt',
  /** column name */
  Reason = 'reason',
  /** column name */
  ReporterId = 'reporterId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "report" */
export type Report_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupId?: Maybe<Scalars['uuid']>;
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  reason?: Maybe<Scalars['String']>;
  reporterId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "report" */
export enum Report_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  LastSeenAt = 'lastSeenAt',
  /** column name */
  Reason = 'reason',
  /** column name */
  ReporterId = 'reporterId',
  /** column name */
  UserId = 'userId'
}

/**
 * user role types
 *
 *
 * columns and relationships of "role"
 */
export type Role = {
  __typename?: 'role';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  groups: Array<Group_Role>;
  /** An aggregated array relationship */
  groups_aggregate: Group_Role_Aggregate;
  value: Scalars['String'];
};


/**
 * user role types
 *
 *
 * columns and relationships of "role"
 */
export type RoleGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/**
 * user role types
 *
 *
 * columns and relationships of "role"
 */
export type RoleGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "role" */
export type Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Role_Max_Order_By>;
  min?: Maybe<Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "role" */
export type Role_Arr_Rel_Insert_Input = {
  data: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  groups?: Maybe<Group_Role_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint */
  RolePkey = 'role_pkey'
}

export enum Role_Enum {
  Admin = 'admin',
  Employee = 'employee',
  Member = 'member',
  Moderator = 'moderator'
}

/** expression to compare columns of type role_enum. All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: Maybe<Role_Enum>;
  _in?: Maybe<Array<Role_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Role_Enum>;
  _nin?: Maybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  groups?: Maybe<Group_Role_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "role" */
export type Role_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "role" */
export type Role_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** on conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns: Array<Role_Update_Column>;
  where?: Maybe<Role_Bool_Exp>;
};

/** ordering options when selecting data from "role" */
export type Role_Order_By = {
  description?: Maybe<Order_By>;
  groups_aggregate?: Maybe<Group_Role_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "role" */
export type Role_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "social_profile" */
export type Social_Profile = {
  __typename?: 'social_profile';
  fb_link?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  ig_link?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['String']>;
  snap_link?: Maybe<Scalars['String']>;
  tiktok_link?: Maybe<Scalars['String']>;
  twitter_link?: Maybe<Scalars['String']>;
  yt_link?: Maybe<Scalars['String']>;
};

/** aggregated selection of "social_profile" */
export type Social_Profile_Aggregate = {
  __typename?: 'social_profile_aggregate';
  aggregate?: Maybe<Social_Profile_Aggregate_Fields>;
  nodes: Array<Social_Profile>;
};

/** aggregate fields of "social_profile" */
export type Social_Profile_Aggregate_Fields = {
  __typename?: 'social_profile_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Social_Profile_Max_Fields>;
  min?: Maybe<Social_Profile_Min_Fields>;
};


/** aggregate fields of "social_profile" */
export type Social_Profile_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Social_Profile_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "social_profile" */
export type Social_Profile_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Social_Profile_Max_Order_By>;
  min?: Maybe<Social_Profile_Min_Order_By>;
};

/** input type for inserting array relation for remote table "social_profile" */
export type Social_Profile_Arr_Rel_Insert_Input = {
  data: Array<Social_Profile_Insert_Input>;
  on_conflict?: Maybe<Social_Profile_On_Conflict>;
};

/** Boolean expression to filter rows from the table "social_profile". All fields are combined with a logical 'AND'. */
export type Social_Profile_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Social_Profile_Bool_Exp>>>;
  _not?: Maybe<Social_Profile_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Social_Profile_Bool_Exp>>>;
  fb_link?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  ig_link?: Maybe<String_Comparison_Exp>;
  personal?: Maybe<String_Comparison_Exp>;
  shop?: Maybe<String_Comparison_Exp>;
  snap_link?: Maybe<String_Comparison_Exp>;
  tiktok_link?: Maybe<String_Comparison_Exp>;
  twitter_link?: Maybe<String_Comparison_Exp>;
  yt_link?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "social_profile" */
export enum Social_Profile_Constraint {
  /** unique or primary key constraint */
  SocialProfilePkey = 'social_profile_pkey'
}

/** input type for inserting data into table "social_profile" */
export type Social_Profile_Insert_Input = {
  fb_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ig_link?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['String']>;
  snap_link?: Maybe<Scalars['String']>;
  tiktok_link?: Maybe<Scalars['String']>;
  twitter_link?: Maybe<Scalars['String']>;
  yt_link?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Social_Profile_Max_Fields = {
  __typename?: 'social_profile_max_fields';
  fb_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ig_link?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['String']>;
  snap_link?: Maybe<Scalars['String']>;
  tiktok_link?: Maybe<Scalars['String']>;
  twitter_link?: Maybe<Scalars['String']>;
  yt_link?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "social_profile" */
export type Social_Profile_Max_Order_By = {
  fb_link?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ig_link?: Maybe<Order_By>;
  personal?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  snap_link?: Maybe<Order_By>;
  tiktok_link?: Maybe<Order_By>;
  twitter_link?: Maybe<Order_By>;
  yt_link?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Social_Profile_Min_Fields = {
  __typename?: 'social_profile_min_fields';
  fb_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ig_link?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['String']>;
  snap_link?: Maybe<Scalars['String']>;
  tiktok_link?: Maybe<Scalars['String']>;
  twitter_link?: Maybe<Scalars['String']>;
  yt_link?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "social_profile" */
export type Social_Profile_Min_Order_By = {
  fb_link?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ig_link?: Maybe<Order_By>;
  personal?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  snap_link?: Maybe<Order_By>;
  tiktok_link?: Maybe<Order_By>;
  twitter_link?: Maybe<Order_By>;
  yt_link?: Maybe<Order_By>;
};

/** response of any mutation on the table "social_profile" */
export type Social_Profile_Mutation_Response = {
  __typename?: 'social_profile_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Social_Profile>;
};

/** input type for inserting object relation for remote table "social_profile" */
export type Social_Profile_Obj_Rel_Insert_Input = {
  data: Social_Profile_Insert_Input;
  on_conflict?: Maybe<Social_Profile_On_Conflict>;
};

/** on conflict condition type for table "social_profile" */
export type Social_Profile_On_Conflict = {
  constraint: Social_Profile_Constraint;
  update_columns: Array<Social_Profile_Update_Column>;
  where?: Maybe<Social_Profile_Bool_Exp>;
};

/** ordering options when selecting data from "social_profile" */
export type Social_Profile_Order_By = {
  fb_link?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ig_link?: Maybe<Order_By>;
  personal?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  snap_link?: Maybe<Order_By>;
  tiktok_link?: Maybe<Order_By>;
  twitter_link?: Maybe<Order_By>;
  yt_link?: Maybe<Order_By>;
};

/** primary key columns input for table: "social_profile" */
export type Social_Profile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "social_profile" */
export enum Social_Profile_Select_Column {
  /** column name */
  FbLink = 'fb_link',
  /** column name */
  Id = 'id',
  /** column name */
  IgLink = 'ig_link',
  /** column name */
  Personal = 'personal',
  /** column name */
  Shop = 'shop',
  /** column name */
  SnapLink = 'snap_link',
  /** column name */
  TiktokLink = 'tiktok_link',
  /** column name */
  TwitterLink = 'twitter_link',
  /** column name */
  YtLink = 'yt_link'
}

/** input type for updating data in table "social_profile" */
export type Social_Profile_Set_Input = {
  fb_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ig_link?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['String']>;
  snap_link?: Maybe<Scalars['String']>;
  tiktok_link?: Maybe<Scalars['String']>;
  twitter_link?: Maybe<Scalars['String']>;
  yt_link?: Maybe<Scalars['String']>;
};

/** update columns of table "social_profile" */
export enum Social_Profile_Update_Column {
  /** column name */
  FbLink = 'fb_link',
  /** column name */
  Id = 'id',
  /** column name */
  IgLink = 'ig_link',
  /** column name */
  Personal = 'personal',
  /** column name */
  Shop = 'shop',
  /** column name */
  SnapLink = 'snap_link',
  /** column name */
  TiktokLink = 'tiktok_link',
  /** column name */
  TwitterLink = 'twitter_link',
  /** column name */
  YtLink = 'yt_link'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accomplishment_badge_type" */
  accomplishment_badge_type: Array<Accomplishment_Badge_Type>;
  /** fetch aggregated fields from the table: "accomplishment_badge_type" */
  accomplishment_badge_type_aggregate: Accomplishment_Badge_Type_Aggregate;
  /** fetch data from the table: "accomplishment_badge_type" using primary key columns */
  accomplishment_badge_type_by_pk?: Maybe<Accomplishment_Badge_Type>;
  /** fetch data from the table: "announcement_" */
  announcement_: Array<Announcement_>;
  /** fetch aggregated fields from the table: "announcement_" */
  announcement__aggregate: Announcement__Aggregate;
  /** fetch data from the table: "announcement_" using primary key columns */
  announcement__by_pk?: Maybe<Announcement_>;
  /** fetch data from the table: "announcement_file" */
  announcement_file: Array<Announcement_File>;
  /** fetch aggregated fields from the table: "announcement_file" */
  announcement_file_aggregate: Announcement_File_Aggregate;
  /** fetch data from the table: "announcement_file" using primary key columns */
  announcement_file_by_pk?: Maybe<Announcement_File>;
  /** fetch data from the table: "blacklist" */
  blacklist: Array<Blacklist>;
  /** fetch aggregated fields from the table: "blacklist" */
  blacklist_aggregate: Blacklist_Aggregate;
  /** fetch data from the table: "blacklist" using primary key columns */
  blacklist_by_pk?: Maybe<Blacklist>;
  /** fetch data from the table: "challenge" */
  challenge: Array<Challenge>;
  /** fetch aggregated fields from the table: "challenge" */
  challenge_aggregate: Challenge_Aggregate;
  /** fetch data from the table: "challenge" using primary key columns */
  challenge_by_pk?: Maybe<Challenge>;
  /** fetch data from the table: "challenge_channel" */
  challenge_channel: Array<Challenge_Channel>;
  /** fetch aggregated fields from the table: "challenge_channel" */
  challenge_channel_aggregate: Challenge_Channel_Aggregate;
  /** fetch data from the table: "challenge_channel" using primary key columns */
  challenge_channel_by_pk?: Maybe<Challenge_Channel>;
  /** fetch data from the table: "challenge_entry" */
  challenge_entry: Array<Challenge_Entry>;
  /** fetch aggregated fields from the table: "challenge_entry" */
  challenge_entry_aggregate: Challenge_Entry_Aggregate;
  /** fetch data from the table: "challenge_entry" using primary key columns */
  challenge_entry_by_pk?: Maybe<Challenge_Entry>;
  /** fetch data from the table: "challenge_entry_comment" */
  challenge_entry_comment: Array<Challenge_Entry_Comment>;
  /** fetch aggregated fields from the table: "challenge_entry_comment" */
  challenge_entry_comment_aggregate: Challenge_Entry_Comment_Aggregate;
  /** fetch data from the table: "challenge_entry_comment" using primary key columns */
  challenge_entry_comment_by_pk?: Maybe<Challenge_Entry_Comment>;
  /** fetch data from the table: "challenge_entry_file" */
  challenge_entry_file: Array<Challenge_Entry_File>;
  /** fetch aggregated fields from the table: "challenge_entry_file" */
  challenge_entry_file_aggregate: Challenge_Entry_File_Aggregate;
  /** fetch data from the table: "challenge_entry_file" using primary key columns */
  challenge_entry_file_by_pk?: Maybe<Challenge_Entry_File>;
  /** fetch data from the table: "challenge_entry_reaction" */
  challenge_entry_reaction: Array<Challenge_Entry_Reaction>;
  /** fetch aggregated fields from the table: "challenge_entry_reaction" */
  challenge_entry_reaction_aggregate: Challenge_Entry_Reaction_Aggregate;
  /** fetch data from the table: "challenge_entry_reaction" using primary key columns */
  challenge_entry_reaction_by_pk?: Maybe<Challenge_Entry_Reaction>;
  /** fetch data from the table: "challenge_file" */
  challenge_file: Array<Challenge_File>;
  /** fetch aggregated fields from the table: "challenge_file" */
  challenge_file_aggregate: Challenge_File_Aggregate;
  /** fetch data from the table: "challenge_file" using primary key columns */
  challenge_file_by_pk?: Maybe<Challenge_File>;
  /** fetch data from the table: "challenge_group" */
  challenge_group: Array<Challenge_Group>;
  /** fetch aggregated fields from the table: "challenge_group" */
  challenge_group_aggregate: Challenge_Group_Aggregate;
  /** fetch data from the table: "challenge_group" using primary key columns */
  challenge_group_by_pk?: Maybe<Challenge_Group>;
  /** fetch data from the table: "challenge_points" */
  challenge_points: Array<Challenge_Points>;
  /** fetch aggregated fields from the table: "challenge_points" */
  challenge_points_aggregate: Challenge_Points_Aggregate;
  /** fetch data from the table: "challenge_points" using primary key columns */
  challenge_points_by_pk?: Maybe<Challenge_Points>;
  /** fetch data from the table: "challenge_series" */
  challenge_series: Array<Challenge_Series>;
  /** fetch aggregated fields from the table: "challenge_series" */
  challenge_series_aggregate: Challenge_Series_Aggregate;
  /** fetch data from the table: "challenge_series" using primary key columns */
  challenge_series_by_pk?: Maybe<Challenge_Series>;
  /** fetch data from the table: "challenge_series_challenges" */
  challenge_series_challenges: Array<Challenge_Series_Challenges>;
  /** fetch aggregated fields from the table: "challenge_series_challenges" */
  challenge_series_challenges_aggregate: Challenge_Series_Challenges_Aggregate;
  /** fetch data from the table: "challenge_series_challenges" using primary key columns */
  challenge_series_challenges_by_pk?: Maybe<Challenge_Series_Challenges>;
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "channel_file" */
  channel_file: Array<Channel_File>;
  /** fetch aggregated fields from the table: "channel_file" */
  channel_file_aggregate: Channel_File_Aggregate;
  /** fetch data from the table: "channel_file" using primary key columns */
  channel_file_by_pk?: Maybe<Channel_File>;
  /** fetch data from the table: "channel_member" */
  channel_member: Array<Channel_Member>;
  /** fetch aggregated fields from the table: "channel_member" */
  channel_member_aggregate: Channel_Member_Aggregate;
  /** fetch data from the table: "channel_member" using primary key columns */
  channel_member_by_pk?: Maybe<Channel_Member>;
  /** fetch data from the table: "channel_member_typing" */
  channel_member_typing: Array<Channel_Member_Typing>;
  /** fetch aggregated fields from the table: "channel_member_typing" */
  channel_member_typing_aggregate: Channel_Member_Typing_Aggregate;
  /** fetch data from the table: "channel_post" */
  channel_post: Array<Channel_Post>;
  /** fetch aggregated fields from the table: "channel_post" */
  channel_post_aggregate: Channel_Post_Aggregate;
  /** fetch data from the table: "channel_post" using primary key columns */
  channel_post_by_pk?: Maybe<Channel_Post>;
  /** fetch data from the table: "channel_post_file" */
  channel_post_file: Array<Channel_Post_File>;
  /** fetch aggregated fields from the table: "channel_post_file" */
  channel_post_file_aggregate: Channel_Post_File_Aggregate;
  /** fetch data from the table: "channel_post_file" using primary key columns */
  channel_post_file_by_pk?: Maybe<Channel_Post_File>;
  /** fetch data from the table: "channel_post_reaction" */
  channel_post_reaction: Array<Channel_Post_Reaction>;
  /** fetch aggregated fields from the table: "channel_post_reaction" */
  channel_post_reaction_aggregate: Channel_Post_Reaction_Aggregate;
  /** fetch data from the table: "channel_post_reaction" using primary key columns */
  channel_post_reaction_by_pk?: Maybe<Channel_Post_Reaction>;
  /** fetch data from the table: "channel_post_type" */
  channel_post_type: Array<Channel_Post_Type>;
  /** fetch aggregated fields from the table: "channel_post_type" */
  channel_post_type_aggregate: Channel_Post_Type_Aggregate;
  /** fetch data from the table: "channel_post_type" using primary key columns */
  channel_post_type_by_pk?: Maybe<Channel_Post_Type>;
  /** fetch data from the table: "channel_type" */
  channel_type: Array<Channel_Type>;
  /** fetch aggregated fields from the table: "channel_type" */
  channel_type_aggregate: Channel_Type_Aggregate;
  /** fetch data from the table: "channel_type" using primary key columns */
  channel_type_by_pk?: Maybe<Channel_Type>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** retrieve the result of action: "deactivate_account" */
  deactivate_account?: Maybe<Deactivate_Account>;
  /** fetch data from the table: "event_" */
  event_: Array<Event_>;
  /** fetch aggregated fields from the table: "event_" */
  event__aggregate: Event__Aggregate;
  /** fetch data from the table: "event_" using primary key columns */
  event__by_pk?: Maybe<Event_>;
  /** fetch data from the table: "event_rsvp" */
  event_rsvp: Array<Event_Rsvp>;
  /** fetch aggregated fields from the table: "event_rsvp" */
  event_rsvp_aggregate: Event_Rsvp_Aggregate;
  /** fetch data from the table: "event_rsvp" using primary key columns */
  event_rsvp_by_pk?: Maybe<Event_Rsvp>;
  /** fetch data from the table: "feature_gate" */
  feature_gate: Array<Feature_Gate>;
  /** fetch aggregated fields from the table: "feature_gate" */
  feature_gate_aggregate: Feature_Gate_Aggregate;
  /** fetch data from the table: "feature_gate" using primary key columns */
  feature_gate_by_pk?: Maybe<Feature_Gate>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "global_notification_control" */
  global_notification_control: Array<Global_Notification_Control>;
  /** fetch aggregated fields from the table: "global_notification_control" */
  global_notification_control_aggregate: Global_Notification_Control_Aggregate;
  /** fetch data from the table: "global_notification_control" using primary key columns */
  global_notification_control_by_pk?: Maybe<Global_Notification_Control>;
  /** fetch data from the table: "global_notification_type" */
  global_notification_type: Array<Global_Notification_Type>;
  /** fetch aggregated fields from the table: "global_notification_type" */
  global_notification_type_aggregate: Global_Notification_Type_Aggregate;
  /** fetch data from the table: "global_notification_type" using primary key columns */
  global_notification_type_by_pk?: Maybe<Global_Notification_Type>;
  /** fetch data from the table: "group_" */
  group_: Array<Group_>;
  /** fetch aggregated fields from the table: "group_" */
  group__aggregate: Group__Aggregate;
  /** fetch data from the table: "group_" using primary key columns */
  group__by_pk?: Maybe<Group_>;
  /** fetch data from the table: "group_badge_type" */
  group_badge_type: Array<Group_Badge_Type>;
  /** fetch aggregated fields from the table: "group_badge_type" */
  group_badge_type_aggregate: Group_Badge_Type_Aggregate;
  /** fetch data from the table: "group_badge_type" using primary key columns */
  group_badge_type_by_pk?: Maybe<Group_Badge_Type>;
  /** fetch data from the table: "group_join_request" */
  group_join_request: Array<Group_Join_Request>;
  /** fetch aggregated fields from the table: "group_join_request" */
  group_join_request_aggregate: Group_Join_Request_Aggregate;
  /** fetch data from the table: "group_join_request" using primary key columns */
  group_join_request_by_pk?: Maybe<Group_Join_Request>;
  /** fetch data from the table: "group_join_request_type" */
  group_join_request_type: Array<Group_Join_Request_Type>;
  /** fetch aggregated fields from the table: "group_join_request_type" */
  group_join_request_type_aggregate: Group_Join_Request_Type_Aggregate;
  /** fetch data from the table: "group_join_request_type" using primary key columns */
  group_join_request_type_by_pk?: Maybe<Group_Join_Request_Type>;
  /** fetch data from the table: "group_join_title" */
  group_join_title: Array<Group_Join_Title>;
  /** fetch aggregated fields from the table: "group_join_title" */
  group_join_title_aggregate: Group_Join_Title_Aggregate;
  /** fetch data from the table: "group_join_title" using primary key columns */
  group_join_title_by_pk?: Maybe<Group_Join_Title>;
  /** fetch data from the table: "group_role" */
  group_role: Array<Group_Role>;
  /** fetch aggregated fields from the table: "group_role" */
  group_role_aggregate: Group_Role_Aggregate;
  /** fetch data from the table: "group_role" using primary key columns */
  group_role_by_pk?: Maybe<Group_Role>;
  /** fetch data from the table: "hangout" */
  hangout: Array<Hangout>;
  /** fetch aggregated fields from the table: "hangout" */
  hangout_aggregate: Hangout_Aggregate;
  /** fetch data from the table: "hangout" using primary key columns */
  hangout_by_pk?: Maybe<Hangout>;
  /** fetch data from the table: "hangout_requirement" */
  hangout_requirement: Array<Hangout_Requirement>;
  /** fetch aggregated fields from the table: "hangout_requirement" */
  hangout_requirement_aggregate: Hangout_Requirement_Aggregate;
  /** fetch data from the table: "hangout_requirement" using primary key columns */
  hangout_requirement_by_pk?: Maybe<Hangout_Requirement>;
  /** fetch data from the table: "internal_notification" */
  internal_notification: Array<Internal_Notification>;
  /** fetch aggregated fields from the table: "internal_notification" */
  internal_notification_aggregate: Internal_Notification_Aggregate;
  /** fetch data from the table: "internal_notification" using primary key columns */
  internal_notification_by_pk?: Maybe<Internal_Notification>;
  /** retrieve the result of action: "log_amplitude_event" */
  log_amplitude_event?: Maybe<Log_Amplitude_Event>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "poll_options" */
  poll_options: Array<Poll_Options>;
  /** fetch aggregated fields from the table: "poll_options" */
  poll_options_aggregate: Poll_Options_Aggregate;
  /** fetch data from the table: "poll_options" using primary key columns */
  poll_options_by_pk?: Maybe<Poll_Options>;
  /** fetch data from the table: "poll_responses" */
  poll_responses: Array<Poll_Responses>;
  /** fetch aggregated fields from the table: "poll_responses" */
  poll_responses_aggregate: Poll_Responses_Aggregate;
  /** fetch data from the table: "poll_responses" using primary key columns */
  poll_responses_by_pk?: Maybe<Poll_Responses>;
  /** fetch data from the table: "reaction" */
  reaction: Array<Reaction>;
  /** fetch aggregated fields from the table: "reaction" */
  reaction_aggregate: Reaction_Aggregate;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction_by_pk?: Maybe<Reaction>;
  /** fetch data from the table: "reaction_type" */
  reaction_type: Array<Reaction_Type>;
  /** fetch aggregated fields from the table: "reaction_type" */
  reaction_type_aggregate: Reaction_Type_Aggregate;
  /** fetch data from the table: "reaction_type" using primary key columns */
  reaction_type_by_pk?: Maybe<Reaction_Type>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "social_profile" */
  social_profile: Array<Social_Profile>;
  /** fetch aggregated fields from the table: "social_profile" */
  social_profile_aggregate: Social_Profile_Aggregate;
  /** fetch data from the table: "social_profile" using primary key columns */
  social_profile_by_pk?: Maybe<Social_Profile>;
  /** fetch data from the table: "user_" */
  user_: Array<User_>;
  /** fetch aggregated fields from the table: "user_" */
  user__aggregate: User__Aggregate;
  /** fetch data from the table: "user_" using primary key columns */
  user__by_pk?: Maybe<User_>;
  /** fetch data from the table: "user_acquisition_type" */
  user_acquisition_type: Array<User_Acquisition_Type>;
  /** fetch aggregated fields from the table: "user_acquisition_type" */
  user_acquisition_type_aggregate: User_Acquisition_Type_Aggregate;
  /** fetch data from the table: "user_acquisition_type" using primary key columns */
  user_acquisition_type_by_pk?: Maybe<User_Acquisition_Type>;
  /** fetch data from the table: "user_badge" */
  user_badge: Array<User_Badge>;
  /** fetch aggregated fields from the table: "user_badge" */
  user_badge_aggregate: User_Badge_Aggregate;
  /** fetch data from the table: "user_badge" using primary key columns */
  user_badge_by_pk?: Maybe<User_Badge>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
};


/** subscription root */
export type Subscription_RootAccomplishment_Badge_TypeArgs = {
  distinct_on?: Maybe<Array<Accomplishment_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accomplishment_Badge_Type_Order_By>>;
  where?: Maybe<Accomplishment_Badge_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccomplishment_Badge_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Accomplishment_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accomplishment_Badge_Type_Order_By>>;
  where?: Maybe<Accomplishment_Badge_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccomplishment_Badge_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootAnnouncement_Args = {
  distinct_on?: Maybe<Array<Announcement__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement__Order_By>>;
  where?: Maybe<Announcement__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnouncement__AggregateArgs = {
  distinct_on?: Maybe<Array<Announcement__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement__Order_By>>;
  where?: Maybe<Announcement__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnouncement__By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAnnouncement_FileArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnouncement_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Announcement_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcement_File_Order_By>>;
  where?: Maybe<Announcement_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnouncement_File_By_PkArgs = {
  announcement_id: Scalars['uuid'];
  file_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBlacklistArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlacklist_AggregateArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlacklist_By_PkArgs = {
  blockUserId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallengeArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_ChannelArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Channel_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Channel_Order_By>>;
  where?: Maybe<Challenge_Channel_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Channel_By_PkArgs = {
  channelId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_EntryArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_Entry_CommentArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Comment_Order_By>>;
  where?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Comment_Order_By>>;
  where?: Maybe<Challenge_Entry_Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_Comment_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  commentId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_Entry_FileArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_File_Order_By>>;
  where?: Maybe<Challenge_Entry_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_File_Order_By>>;
  where?: Maybe<Challenge_Entry_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_File_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_Entry_ReactionArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Reaction_Order_By>>;
  where?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Reaction_Order_By>>;
  where?: Maybe<Challenge_Entry_Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Entry_Reaction_By_PkArgs = {
  challengeEntryId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_FileArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_File_Order_By>>;
  where?: Maybe<Challenge_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_File_By_PkArgs = {
  challengeId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_GroupArgs = {
  distinct_on?: Maybe<Array<Challenge_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Group_Order_By>>;
  where?: Maybe<Challenge_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Group_Order_By>>;
  where?: Maybe<Challenge_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_PointsArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Points_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Points_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_SeriesArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Order_By>>;
  where?: Maybe<Challenge_Series_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Series_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Order_By>>;
  where?: Maybe<Challenge_Series_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Series_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChallenge_Series_ChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Series_Challenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Series_Challenges_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Series_Challenges_Order_By>>;
  where?: Maybe<Challenge_Series_Challenges_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChallenge_Series_Challenges_By_PkArgs = {
  challengeId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChannelArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChannel_FileArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_File_Order_By>>;
  where?: Maybe<Channel_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_File_By_PkArgs = {
  channelId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChannel_MemberArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Member_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Member_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChannel_Member_TypingArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Typing_Order_By>>;
  where?: Maybe<Channel_Member_Typing_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Member_Typing_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Typing_Order_By>>;
  where?: Maybe<Channel_Member_Typing_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_PostArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Order_By>>;
  where?: Maybe<Channel_Post_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChannel_Post_FileArgs = {
  distinct_on?: Maybe<Array<Channel_Post_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_File_Order_By>>;
  where?: Maybe<Channel_Post_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_File_Order_By>>;
  where?: Maybe<Channel_Post_File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_File_By_PkArgs = {
  channelPostId: Scalars['uuid'];
  fileId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChannel_Post_ReactionArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Reaction_Order_By>>;
  where?: Maybe<Channel_Post_Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Reaction_Order_By>>;
  where?: Maybe<Channel_Post_Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_Reaction_By_PkArgs = {
  channelPostId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChannel_Post_TypeArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Type_Order_By>>;
  where?: Maybe<Channel_Post_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Post_Type_Order_By>>;
  where?: Maybe<Channel_Post_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootChannel_TypeArgs = {
  distinct_on?: Maybe<Array<Channel_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Type_Order_By>>;
  where?: Maybe<Channel_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Type_Order_By>>;
  where?: Maybe<Channel_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootCommentArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDeactivate_AccountArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootEvent_Args = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEvent__AggregateArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEvent__By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootEvent_RsvpArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEvent_Rsvp_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEvent_Rsvp_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFeature_GateArgs = {
  distinct_on?: Maybe<Array<Feature_Gate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Gate_Order_By>>;
  where?: Maybe<Feature_Gate_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFeature_Gate_AggregateArgs = {
  distinct_on?: Maybe<Array<Feature_Gate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Gate_Order_By>>;
  where?: Maybe<Feature_Gate_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFeature_Gate_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFileArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGlobal_Notification_ControlArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Control_Order_By>>;
  where?: Maybe<Global_Notification_Control_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGlobal_Notification_Control_AggregateArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Control_Order_By>>;
  where?: Maybe<Global_Notification_Control_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGlobal_Notification_Control_By_PkArgs = {
  userId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGlobal_Notification_TypeArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Type_Order_By>>;
  where?: Maybe<Global_Notification_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGlobal_Notification_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Global_Notification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Global_Notification_Type_Order_By>>;
  where?: Maybe<Global_Notification_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGlobal_Notification_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGroup_Args = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup__AggregateArgs = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup__By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_Badge_TypeArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Badge_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Badge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Badge_Type_Order_By>>;
  where?: Maybe<Group_Badge_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Badge_Type_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_Join_RequestArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_TypeArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Type_Order_By>>;
  where?: Maybe<Group_Join_Request_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Type_Order_By>>;
  where?: Maybe<Group_Join_Request_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGroup_Join_TitleArgs = {
  distinct_on?: Maybe<Array<Group_Join_Title_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Title_Order_By>>;
  where?: Maybe<Group_Join_Title_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Title_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Title_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Title_Order_By>>;
  where?: Maybe<Group_Join_Title_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Title_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGroup_RoleArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootHangoutArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHangout_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHangout_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootHangout_RequirementArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHangout_Requirement_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHangout_Requirement_By_PkArgs = {
  hangout_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootInternal_NotificationArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInternal_Notification_AggregateArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInternal_Notification_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootLog_Amplitude_EventArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPoll_OptionsArgs = {
  distinct_on?: Maybe<Array<Poll_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Options_Order_By>>;
  where?: Maybe<Poll_Options_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Options_Order_By>>;
  where?: Maybe<Poll_Options_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPoll_ResponsesArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Responses_By_PkArgs = {
  optionId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootReactionArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootReaction_TypeArgs = {
  distinct_on?: Maybe<Array<Reaction_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Type_Order_By>>;
  where?: Maybe<Reaction_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReaction_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Type_Order_By>>;
  where?: Maybe<Reaction_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReaction_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootReportArgs = {
  distinct_on?: Maybe<Array<Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Report_Order_By>>;
  where?: Maybe<Report_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReport_AggregateArgs = {
  distinct_on?: Maybe<Array<Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Report_Order_By>>;
  where?: Maybe<Report_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReport_By_PkArgs = {
  groupId: Scalars['uuid'];
  reporterId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootSocial_ProfileArgs = {
  distinct_on?: Maybe<Array<Social_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Social_Profile_Order_By>>;
  where?: Maybe<Social_Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSocial_Profile_AggregateArgs = {
  distinct_on?: Maybe<Array<Social_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Social_Profile_Order_By>>;
  where?: Maybe<Social_Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSocial_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_Args = {
  distinct_on?: Maybe<Array<User__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User__Order_By>>;
  where?: Maybe<User__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser__AggregateArgs = {
  distinct_on?: Maybe<Array<User__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User__Order_By>>;
  where?: Maybe<User__Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser__By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_Acquisition_TypeArgs = {
  distinct_on?: Maybe<Array<User_Acquisition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Acquisition_Type_Order_By>>;
  where?: Maybe<User_Acquisition_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Acquisition_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Acquisition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Acquisition_Type_Order_By>>;
  where?: Maybe<User_Acquisition_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Acquisition_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUser_BadgeArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Badge_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Badge_By_PkArgs = {
  groupBadgeTypeId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_GroupArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Group_By_PkArgs = {
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ = {
  __typename?: 'user_';
  acquisitionChannel: User_Acquisition_Type_Enum;
  activeAt?: Maybe<Scalars['timestamptz']>;
  auth0UserId?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['date']>;
  /** An array relationship */
  blacklist: Array<Blacklist>;
  /** An aggregated array relationship */
  blacklist_aggregate: Blacklist_Aggregate;
  /** An array relationship */
  blockedBy: Array<Blacklist>;
  /** An aggregated array relationship */
  blockedBy_aggregate: Blacklist_Aggregate;
  /** An array relationship */
  challengeEntries: Array<Challenge_Entry>;
  /** An aggregated array relationship */
  challengeEntries_aggregate: Challenge_Entry_Aggregate;
  /** An array relationship */
  challenge_points: Array<Challenge_Points>;
  /** An aggregated array relationship */
  challenge_points_aggregate: Challenge_Points_Aggregate;
  /** An object relationship */
  channel: User_Acquisition_Type;
  /** An array relationship */
  channelMembers: Array<Channel_Member>;
  /** An aggregated array relationship */
  channelMembers_aggregate: Channel_Member_Aggregate;
  /** An array relationship */
  channels: Array<Channel>;
  /** An aggregated array relationship */
  channels_aggregate: Channel_Aggregate;
  /** An array relationship */
  comments: Array<Comment>;
  /** An aggregated array relationship */
  comments_aggregate: Comment_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  created_hangouts: Array<Hangout>;
  /** An aggregated array relationship */
  created_hangouts_aggregate: Hangout_Aggregate;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  employee: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  /** An array relationship */
  events: Array<Event_>;
  /** An aggregated array relationship */
  events_aggregate: Event__Aggregate;
  facebookUserId?: Maybe<Scalars['String']>;
  firebaseUserId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** An array relationship */
  groups: Array<User_Group>;
  /** An aggregated array relationship */
  groups_aggregate: User_Group_Aggregate;
  /** An array relationship */
  hangout_requirements: Array<Hangout_Requirement>;
  /** An aggregated array relationship */
  hangout_requirements_aggregate: Hangout_Requirement_Aggregate;
  id: Scalars['uuid'];
  interests?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  joinRequests: Array<Group_Join_Request>;
  /** An aggregated array relationship */
  joinRequests_aggregate: Group_Join_Request_Aggregate;
  lastName?: Maybe<Scalars['String']>;
  /** An array relationship */
  ledGroups: Array<Group_>;
  /** An aggregated array relationship */
  ledGroups_aggregate: Group__Aggregate;
  /** An object relationship */
  notificationControls?: Maybe<Global_Notification_Control>;
  onesignalPlayerId?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  pollVotedOptions: Array<Poll_Responses>;
  /** An aggregated array relationship */
  pollVotedOptions_aggregate: Poll_Responses_Aggregate;
  prismaId?: Maybe<Scalars['String']>;
  /** An array relationship */
  reactions: Array<Reaction>;
  /** An aggregated array relationship */
  reactions_aggregate: Reaction_Aggregate;
  /** An array relationship */
  receivedNotifications: Array<Internal_Notification>;
  /** An aggregated array relationship */
  receivedNotifications_aggregate: Internal_Notification_Aggregate;
  /** An array relationship */
  roles: Array<Group_Role>;
  /** An aggregated array relationship */
  roles_aggregate: Group_Role_Aggregate;
  /** An array relationship */
  rsvps: Array<Event_Rsvp>;
  /** An aggregated array relationship */
  rsvps_aggregate: Event_Rsvp_Aggregate;
  /** An array relationship */
  sentNotifications: Array<Internal_Notification>;
  /** An aggregated array relationship */
  sentNotifications_aggregate: Internal_Notification_Aggregate;
  /** An object relationship */
  socialProfile?: Maybe<Social_Profile>;
  social_profile_id?: Maybe<Scalars['uuid']>;
  subscribed: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userBadges: Array<User_Badge>;
  /** An aggregated array relationship */
  userBadges_aggregate: User_Badge_Aggregate;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_BlacklistArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Blacklist_AggregateArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_BlockedByArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_BlockedBy_AggregateArgs = {
  distinct_on?: Maybe<Array<Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blacklist_Order_By>>;
  where?: Maybe<Blacklist_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ChallengeEntriesArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ChallengeEntries_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Entry_Order_By>>;
  where?: Maybe<Challenge_Entry_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Challenge_PointsArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Challenge_Points_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Points_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Points_Order_By>>;
  where?: Maybe<Challenge_Points_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ChannelMembersArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ChannelMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Member_Order_By>>;
  where?: Maybe<Channel_Member_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ChannelsArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_CommentsArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Created_HangoutsArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Created_Hangouts_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Order_By>>;
  where?: Maybe<Hangout_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_EventsArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Events_AggregateArgs = {
  distinct_on?: Maybe<Array<Event__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event__Order_By>>;
  where?: Maybe<Event__Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_GroupsArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Hangout_RequirementsArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Hangout_Requirements_AggregateArgs = {
  distinct_on?: Maybe<Array<Hangout_Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hangout_Requirement_Order_By>>;
  where?: Maybe<Hangout_Requirement_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_InterestsArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_JoinRequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_JoinRequests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Order_By>>;
  where?: Maybe<Group_Join_Request_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_LedGroupsArgs = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_LedGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group__Order_By>>;
  where?: Maybe<Group__Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_PhotosArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_PollVotedOptionsArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_PollVotedOptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Responses_Order_By>>;
  where?: Maybe<Poll_Responses_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ReactionsArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ReceivedNotificationsArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_ReceivedNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_RolesArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_RsvpsArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_Rsvps_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Rsvp_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Rsvp_Order_By>>;
  where?: Maybe<Event_Rsvp_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_SentNotificationsArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_SentNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Internal_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Internal_Notification_Order_By>>;
  where?: Maybe<Internal_Notification_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_UserBadgesArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};


/**
 * users
 *
 *
 * columns and relationships of "user_"
 */
export type User_UserBadges_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Badge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Badge_Order_By>>;
  where?: Maybe<User_Badge_Bool_Exp>;
};

/** aggregated selection of "user_" */
export type User__Aggregate = {
  __typename?: 'user__aggregate';
  aggregate?: Maybe<User__Aggregate_Fields>;
  nodes: Array<User_>;
};

/** aggregate fields of "user_" */
export type User__Aggregate_Fields = {
  __typename?: 'user__aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User__Max_Fields>;
  min?: Maybe<User__Min_Fields>;
};


/** aggregate fields of "user_" */
export type User__Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User__Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_" */
export type User__Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User__Max_Order_By>;
  min?: Maybe<User__Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User__Append_Input = {
  interests?: Maybe<Scalars['jsonb']>;
  photos?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "user_" */
export type User__Arr_Rel_Insert_Input = {
  data: Array<User__Insert_Input>;
  on_conflict?: Maybe<User__On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_". All fields are combined with a logical 'AND'. */
export type User__Bool_Exp = {
  _and?: Maybe<Array<Maybe<User__Bool_Exp>>>;
  _not?: Maybe<User__Bool_Exp>;
  _or?: Maybe<Array<Maybe<User__Bool_Exp>>>;
  acquisitionChannel?: Maybe<User_Acquisition_Type_Enum_Comparison_Exp>;
  activeAt?: Maybe<Timestamptz_Comparison_Exp>;
  auth0UserId?: Maybe<String_Comparison_Exp>;
  birthday?: Maybe<Date_Comparison_Exp>;
  blacklist?: Maybe<Blacklist_Bool_Exp>;
  blockedBy?: Maybe<Blacklist_Bool_Exp>;
  challengeEntries?: Maybe<Challenge_Entry_Bool_Exp>;
  challenge_points?: Maybe<Challenge_Points_Bool_Exp>;
  channel?: Maybe<User_Acquisition_Type_Bool_Exp>;
  channelMembers?: Maybe<Channel_Member_Bool_Exp>;
  channels?: Maybe<Channel_Bool_Exp>;
  comments?: Maybe<Comment_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  created_hangouts?: Maybe<Hangout_Bool_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  employee?: Maybe<Boolean_Comparison_Exp>;
  enabled?: Maybe<Boolean_Comparison_Exp>;
  events?: Maybe<Event__Bool_Exp>;
  facebookUserId?: Maybe<String_Comparison_Exp>;
  firebaseUserId?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<String_Comparison_Exp>;
  groups?: Maybe<User_Group_Bool_Exp>;
  hangout_requirements?: Maybe<Hangout_Requirement_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  interests?: Maybe<Jsonb_Comparison_Exp>;
  joinRequests?: Maybe<Group_Join_Request_Bool_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  ledGroups?: Maybe<Group__Bool_Exp>;
  notificationControls?: Maybe<Global_Notification_Control_Bool_Exp>;
  onesignalPlayerId?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  phoneNumber?: Maybe<String_Comparison_Exp>;
  photos?: Maybe<Jsonb_Comparison_Exp>;
  pollVotedOptions?: Maybe<Poll_Responses_Bool_Exp>;
  prismaId?: Maybe<String_Comparison_Exp>;
  reactions?: Maybe<Reaction_Bool_Exp>;
  receivedNotifications?: Maybe<Internal_Notification_Bool_Exp>;
  roles?: Maybe<Group_Role_Bool_Exp>;
  rsvps?: Maybe<Event_Rsvp_Bool_Exp>;
  sentNotifications?: Maybe<Internal_Notification_Bool_Exp>;
  socialProfile?: Maybe<Social_Profile_Bool_Exp>;
  social_profile_id?: Maybe<Uuid_Comparison_Exp>;
  subscribed?: Maybe<Boolean_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userBadges?: Maybe<User_Badge_Bool_Exp>;
};

/** unique or primary key constraints on table "user_" */
export enum User__Constraint {
  /** unique or primary key constraint */
  UserAuth0UserIdKey = 'user__auth0_user_id_key',
  /** unique or primary key constraint */
  UserEmailKey = 'user__email_key',
  /** unique or primary key constraint */
  UserFacebookUserIdKey = 'user__facebook_user_id_key',
  /** unique or primary key constraint */
  UserPhoneNumberKey = 'user__phone_number_key',
  /** unique or primary key constraint */
  UserPkey = 'user__pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User__Delete_At_Path_Input = {
  interests?: Maybe<Array<Maybe<Scalars['String']>>>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User__Delete_Elem_Input = {
  interests?: Maybe<Scalars['Int']>;
  photos?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User__Delete_Key_Input = {
  interests?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "user_" */
export type User__Insert_Input = {
  acquisitionChannel?: Maybe<User_Acquisition_Type_Enum>;
  activeAt?: Maybe<Scalars['timestamptz']>;
  auth0UserId?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['date']>;
  blacklist?: Maybe<Blacklist_Arr_Rel_Insert_Input>;
  blockedBy?: Maybe<Blacklist_Arr_Rel_Insert_Input>;
  challengeEntries?: Maybe<Challenge_Entry_Arr_Rel_Insert_Input>;
  challenge_points?: Maybe<Challenge_Points_Arr_Rel_Insert_Input>;
  channel?: Maybe<User_Acquisition_Type_Obj_Rel_Insert_Input>;
  channelMembers?: Maybe<Channel_Member_Arr_Rel_Insert_Input>;
  channels?: Maybe<Channel_Arr_Rel_Insert_Input>;
  comments?: Maybe<Comment_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_hangouts?: Maybe<Hangout_Arr_Rel_Insert_Input>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  events?: Maybe<Event__Arr_Rel_Insert_Input>;
  facebookUserId?: Maybe<Scalars['String']>;
  firebaseUserId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  groups?: Maybe<User_Group_Arr_Rel_Insert_Input>;
  hangout_requirements?: Maybe<Hangout_Requirement_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  interests?: Maybe<Scalars['jsonb']>;
  joinRequests?: Maybe<Group_Join_Request_Arr_Rel_Insert_Input>;
  lastName?: Maybe<Scalars['String']>;
  ledGroups?: Maybe<Group__Arr_Rel_Insert_Input>;
  notificationControls?: Maybe<Global_Notification_Control_Obj_Rel_Insert_Input>;
  onesignalPlayerId?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['jsonb']>;
  pollVotedOptions?: Maybe<Poll_Responses_Arr_Rel_Insert_Input>;
  prismaId?: Maybe<Scalars['String']>;
  reactions?: Maybe<Reaction_Arr_Rel_Insert_Input>;
  receivedNotifications?: Maybe<Internal_Notification_Arr_Rel_Insert_Input>;
  roles?: Maybe<Group_Role_Arr_Rel_Insert_Input>;
  rsvps?: Maybe<Event_Rsvp_Arr_Rel_Insert_Input>;
  sentNotifications?: Maybe<Internal_Notification_Arr_Rel_Insert_Input>;
  socialProfile?: Maybe<Social_Profile_Obj_Rel_Insert_Input>;
  social_profile_id?: Maybe<Scalars['uuid']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userBadges?: Maybe<User_Badge_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User__Max_Fields = {
  __typename?: 'user__max_fields';
  activeAt?: Maybe<Scalars['timestamptz']>;
  auth0UserId?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  facebookUserId?: Maybe<Scalars['String']>;
  firebaseUserId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  onesignalPlayerId?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  social_profile_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user_" */
export type User__Max_Order_By = {
  activeAt?: Maybe<Order_By>;
  auth0UserId?: Maybe<Order_By>;
  birthday?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  facebookUserId?: Maybe<Order_By>;
  firebaseUserId?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  onesignalPlayerId?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  social_profile_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User__Min_Fields = {
  __typename?: 'user__min_fields';
  activeAt?: Maybe<Scalars['timestamptz']>;
  auth0UserId?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  facebookUserId?: Maybe<Scalars['String']>;
  firebaseUserId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  onesignalPlayerId?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  prismaId?: Maybe<Scalars['String']>;
  social_profile_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user_" */
export type User__Min_Order_By = {
  activeAt?: Maybe<Order_By>;
  auth0UserId?: Maybe<Order_By>;
  birthday?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  facebookUserId?: Maybe<Order_By>;
  firebaseUserId?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  onesignalPlayerId?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  prismaId?: Maybe<Order_By>;
  social_profile_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_" */
export type User__Mutation_Response = {
  __typename?: 'user__mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_>;
};

/** input type for inserting object relation for remote table "user_" */
export type User__Obj_Rel_Insert_Input = {
  data: User__Insert_Input;
  on_conflict?: Maybe<User__On_Conflict>;
};

/** on conflict condition type for table "user_" */
export type User__On_Conflict = {
  constraint: User__Constraint;
  update_columns: Array<User__Update_Column>;
  where?: Maybe<User__Bool_Exp>;
};

/** ordering options when selecting data from "user_" */
export type User__Order_By = {
  acquisitionChannel?: Maybe<Order_By>;
  activeAt?: Maybe<Order_By>;
  auth0UserId?: Maybe<Order_By>;
  birthday?: Maybe<Order_By>;
  blacklist_aggregate?: Maybe<Blacklist_Aggregate_Order_By>;
  blockedBy_aggregate?: Maybe<Blacklist_Aggregate_Order_By>;
  challengeEntries_aggregate?: Maybe<Challenge_Entry_Aggregate_Order_By>;
  challenge_points_aggregate?: Maybe<Challenge_Points_Aggregate_Order_By>;
  channel?: Maybe<User_Acquisition_Type_Order_By>;
  channelMembers_aggregate?: Maybe<Channel_Member_Aggregate_Order_By>;
  channels_aggregate?: Maybe<Channel_Aggregate_Order_By>;
  comments_aggregate?: Maybe<Comment_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  created_hangouts_aggregate?: Maybe<Hangout_Aggregate_Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  employee?: Maybe<Order_By>;
  enabled?: Maybe<Order_By>;
  events_aggregate?: Maybe<Event__Aggregate_Order_By>;
  facebookUserId?: Maybe<Order_By>;
  firebaseUserId?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  groups_aggregate?: Maybe<User_Group_Aggregate_Order_By>;
  hangout_requirements_aggregate?: Maybe<Hangout_Requirement_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  interests?: Maybe<Order_By>;
  joinRequests_aggregate?: Maybe<Group_Join_Request_Aggregate_Order_By>;
  lastName?: Maybe<Order_By>;
  ledGroups_aggregate?: Maybe<Group__Aggregate_Order_By>;
  notificationControls?: Maybe<Global_Notification_Control_Order_By>;
  onesignalPlayerId?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  photos?: Maybe<Order_By>;
  pollVotedOptions_aggregate?: Maybe<Poll_Responses_Aggregate_Order_By>;
  prismaId?: Maybe<Order_By>;
  reactions_aggregate?: Maybe<Reaction_Aggregate_Order_By>;
  receivedNotifications_aggregate?: Maybe<Internal_Notification_Aggregate_Order_By>;
  roles_aggregate?: Maybe<Group_Role_Aggregate_Order_By>;
  rsvps_aggregate?: Maybe<Event_Rsvp_Aggregate_Order_By>;
  sentNotifications_aggregate?: Maybe<Internal_Notification_Aggregate_Order_By>;
  socialProfile?: Maybe<Social_Profile_Order_By>;
  social_profile_id?: Maybe<Order_By>;
  subscribed?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userBadges_aggregate?: Maybe<User_Badge_Aggregate_Order_By>;
};

/** primary key columns input for table: "user_" */
export type User__Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User__Prepend_Input = {
  interests?: Maybe<Scalars['jsonb']>;
  photos?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "user_" */
export enum User__Select_Column {
  /** column name */
  AcquisitionChannel = 'acquisitionChannel',
  /** column name */
  ActiveAt = 'activeAt',
  /** column name */
  Auth0UserId = 'auth0UserId',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Employee = 'employee',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  FacebookUserId = 'facebookUserId',
  /** column name */
  FirebaseUserId = 'firebaseUserId',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Interests = 'interests',
  /** column name */
  LastName = 'lastName',
  /** column name */
  OnesignalPlayerId = 'onesignalPlayerId',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Photos = 'photos',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  SocialProfileId = 'social_profile_id',
  /** column name */
  Subscribed = 'subscribed',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user_" */
export type User__Set_Input = {
  acquisitionChannel?: Maybe<User_Acquisition_Type_Enum>;
  activeAt?: Maybe<Scalars['timestamptz']>;
  auth0UserId?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  facebookUserId?: Maybe<Scalars['String']>;
  firebaseUserId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  interests?: Maybe<Scalars['jsonb']>;
  lastName?: Maybe<Scalars['String']>;
  onesignalPlayerId?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['jsonb']>;
  prismaId?: Maybe<Scalars['String']>;
  social_profile_id?: Maybe<Scalars['uuid']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "user_" */
export enum User__Update_Column {
  /** column name */
  AcquisitionChannel = 'acquisitionChannel',
  /** column name */
  ActiveAt = 'activeAt',
  /** column name */
  Auth0UserId = 'auth0UserId',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Employee = 'employee',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  FacebookUserId = 'facebookUserId',
  /** column name */
  FirebaseUserId = 'firebaseUserId',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Interests = 'interests',
  /** column name */
  LastName = 'lastName',
  /** column name */
  OnesignalPlayerId = 'onesignalPlayerId',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Photos = 'photos',
  /** column name */
  PrismaId = 'prismaId',
  /** column name */
  SocialProfileId = 'social_profile_id',
  /** column name */
  Subscribed = 'subscribed',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/**
 * how user was obtained
 *
 *
 * columns and relationships of "user_acquisition_type"
 */
export type User_Acquisition_Type = {
  __typename?: 'user_acquisition_type';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  users: Array<User_>;
  /** An aggregated array relationship */
  users_aggregate: User__Aggregate;
  value: Scalars['String'];
};


/**
 * how user was obtained
 *
 *
 * columns and relationships of "user_acquisition_type"
 */
export type User_Acquisition_TypeUsersArgs = {
  distinct_on?: Maybe<Array<User__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User__Order_By>>;
  where?: Maybe<User__Bool_Exp>;
};


/**
 * how user was obtained
 *
 *
 * columns and relationships of "user_acquisition_type"
 */
export type User_Acquisition_TypeUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User__Order_By>>;
  where?: Maybe<User__Bool_Exp>;
};

/** aggregated selection of "user_acquisition_type" */
export type User_Acquisition_Type_Aggregate = {
  __typename?: 'user_acquisition_type_aggregate';
  aggregate?: Maybe<User_Acquisition_Type_Aggregate_Fields>;
  nodes: Array<User_Acquisition_Type>;
};

/** aggregate fields of "user_acquisition_type" */
export type User_Acquisition_Type_Aggregate_Fields = {
  __typename?: 'user_acquisition_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Acquisition_Type_Max_Fields>;
  min?: Maybe<User_Acquisition_Type_Min_Fields>;
};


/** aggregate fields of "user_acquisition_type" */
export type User_Acquisition_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Acquisition_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_acquisition_type" */
export type User_Acquisition_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Acquisition_Type_Max_Order_By>;
  min?: Maybe<User_Acquisition_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_acquisition_type" */
export type User_Acquisition_Type_Arr_Rel_Insert_Input = {
  data: Array<User_Acquisition_Type_Insert_Input>;
  on_conflict?: Maybe<User_Acquisition_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_acquisition_type". All fields are combined with a logical 'AND'. */
export type User_Acquisition_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Acquisition_Type_Bool_Exp>>>;
  _not?: Maybe<User_Acquisition_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Acquisition_Type_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  users?: Maybe<User__Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_acquisition_type" */
export enum User_Acquisition_Type_Constraint {
  /** unique or primary key constraint */
  UserAcquisitionTypePkey = 'user_acquisition_type_pkey'
}

export enum User_Acquisition_Type_Enum {
  MagicLink = 'magic_link',
  Organic = 'organic',
  WebRsvp = 'web_rsvp'
}

/** expression to compare columns of type user_acquisition_type_enum. All fields are combined with logical 'AND'. */
export type User_Acquisition_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Acquisition_Type_Enum>;
  _in?: Maybe<Array<User_Acquisition_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Acquisition_Type_Enum>;
  _nin?: Maybe<Array<User_Acquisition_Type_Enum>>;
};

/** input type for inserting data into table "user_acquisition_type" */
export type User_Acquisition_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  users?: Maybe<User__Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Acquisition_Type_Max_Fields = {
  __typename?: 'user_acquisition_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_acquisition_type" */
export type User_Acquisition_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Acquisition_Type_Min_Fields = {
  __typename?: 'user_acquisition_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_acquisition_type" */
export type User_Acquisition_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_acquisition_type" */
export type User_Acquisition_Type_Mutation_Response = {
  __typename?: 'user_acquisition_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Acquisition_Type>;
};

/** input type for inserting object relation for remote table "user_acquisition_type" */
export type User_Acquisition_Type_Obj_Rel_Insert_Input = {
  data: User_Acquisition_Type_Insert_Input;
  on_conflict?: Maybe<User_Acquisition_Type_On_Conflict>;
};

/** on conflict condition type for table "user_acquisition_type" */
export type User_Acquisition_Type_On_Conflict = {
  constraint: User_Acquisition_Type_Constraint;
  update_columns: Array<User_Acquisition_Type_Update_Column>;
  where?: Maybe<User_Acquisition_Type_Bool_Exp>;
};

/** ordering options when selecting data from "user_acquisition_type" */
export type User_Acquisition_Type_Order_By = {
  description?: Maybe<Order_By>;
  users_aggregate?: Maybe<User__Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_acquisition_type" */
export type User_Acquisition_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_acquisition_type" */
export enum User_Acquisition_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_acquisition_type" */
export type User_Acquisition_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "user_acquisition_type" */
export enum User_Acquisition_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "user_badge" */
export type User_Badge = {
  __typename?: 'user_badge';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  groupBadge: Group_Badge_Type;
  groupBadgeTypeId: Scalars['uuid'];
  /** An object relationship */
  user: User_;
  userId: Scalars['uuid'];
};

/** aggregated selection of "user_badge" */
export type User_Badge_Aggregate = {
  __typename?: 'user_badge_aggregate';
  aggregate?: Maybe<User_Badge_Aggregate_Fields>;
  nodes: Array<User_Badge>;
};

/** aggregate fields of "user_badge" */
export type User_Badge_Aggregate_Fields = {
  __typename?: 'user_badge_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Badge_Max_Fields>;
  min?: Maybe<User_Badge_Min_Fields>;
};


/** aggregate fields of "user_badge" */
export type User_Badge_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Badge_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_badge" */
export type User_Badge_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Badge_Max_Order_By>;
  min?: Maybe<User_Badge_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_badge" */
export type User_Badge_Arr_Rel_Insert_Input = {
  data: Array<User_Badge_Insert_Input>;
  on_conflict?: Maybe<User_Badge_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_badge". All fields are combined with a logical 'AND'. */
export type User_Badge_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Badge_Bool_Exp>>>;
  _not?: Maybe<User_Badge_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Badge_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  groupBadge?: Maybe<Group_Badge_Type_Bool_Exp>;
  groupBadgeTypeId?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User__Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_badge" */
export enum User_Badge_Constraint {
  /** unique or primary key constraint */
  UserBadgePkey = 'user_badge_pkey'
}

/** input type for inserting data into table "user_badge" */
export type User_Badge_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupBadge?: Maybe<Group_Badge_Type_Obj_Rel_Insert_Input>;
  groupBadgeTypeId?: Maybe<Scalars['uuid']>;
  user?: Maybe<User__Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Badge_Max_Fields = {
  __typename?: 'user_badge_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupBadgeTypeId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_badge" */
export type User_Badge_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupBadgeTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Badge_Min_Fields = {
  __typename?: 'user_badge_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupBadgeTypeId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_badge" */
export type User_Badge_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupBadgeTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_badge" */
export type User_Badge_Mutation_Response = {
  __typename?: 'user_badge_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Badge>;
};

/** input type for inserting object relation for remote table "user_badge" */
export type User_Badge_Obj_Rel_Insert_Input = {
  data: User_Badge_Insert_Input;
  on_conflict?: Maybe<User_Badge_On_Conflict>;
};

/** on conflict condition type for table "user_badge" */
export type User_Badge_On_Conflict = {
  constraint: User_Badge_Constraint;
  update_columns: Array<User_Badge_Update_Column>;
  where?: Maybe<User_Badge_Bool_Exp>;
};

/** ordering options when selecting data from "user_badge" */
export type User_Badge_Order_By = {
  createdAt?: Maybe<Order_By>;
  groupBadge?: Maybe<Group_Badge_Type_Order_By>;
  groupBadgeTypeId?: Maybe<Order_By>;
  user?: Maybe<User__Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_badge" */
export type User_Badge_Pk_Columns_Input = {
  groupBadgeTypeId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "user_badge" */
export enum User_Badge_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupBadgeTypeId = 'groupBadgeTypeId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_badge" */
export type User_Badge_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  groupBadgeTypeId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_badge" */
export enum User_Badge_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GroupBadgeTypeId = 'groupBadgeTypeId',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "user_group" */
export type User_Group = {
  __typename?: 'user_group';
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  group: Group_;
  groupId: Scalars['uuid'];
  /** monthly points for leaderboard */
  monthlyPoints: Scalars['numeric'];
  prismaUserId?: Maybe<Scalars['String']>;
  userId: Scalars['uuid'];
  /** An object relationship */
  user_: User_;
  /** weekly points for leaderboard */
  weeklyPoints: Scalars['numeric'];
};

/** aggregated selection of "user_group" */
export type User_Group_Aggregate = {
  __typename?: 'user_group_aggregate';
  aggregate?: Maybe<User_Group_Aggregate_Fields>;
  nodes: Array<User_Group>;
};

/** aggregate fields of "user_group" */
export type User_Group_Aggregate_Fields = {
  __typename?: 'user_group_aggregate_fields';
  avg?: Maybe<User_Group_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Group_Max_Fields>;
  min?: Maybe<User_Group_Min_Fields>;
  stddev?: Maybe<User_Group_Stddev_Fields>;
  stddev_pop?: Maybe<User_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Group_Stddev_Samp_Fields>;
  sum?: Maybe<User_Group_Sum_Fields>;
  var_pop?: Maybe<User_Group_Var_Pop_Fields>;
  var_samp?: Maybe<User_Group_Var_Samp_Fields>;
  variance?: Maybe<User_Group_Variance_Fields>;
};


/** aggregate fields of "user_group" */
export type User_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_group" */
export type User_Group_Aggregate_Order_By = {
  avg?: Maybe<User_Group_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Group_Max_Order_By>;
  min?: Maybe<User_Group_Min_Order_By>;
  stddev?: Maybe<User_Group_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Group_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Group_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Group_Sum_Order_By>;
  var_pop?: Maybe<User_Group_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Group_Var_Samp_Order_By>;
  variance?: Maybe<User_Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_group" */
export type User_Group_Arr_Rel_Insert_Input = {
  data: Array<User_Group_Insert_Input>;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Group_Avg_Fields = {
  __typename?: 'user_group_avg_fields';
  monthlyPoints?: Maybe<Scalars['Float']>;
  weeklyPoints?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_group" */
export type User_Group_Avg_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_group". All fields are combined with a logical 'AND'. */
export type User_Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Group_Bool_Exp>>>;
  _not?: Maybe<User_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Group_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamp_Comparison_Exp>;
  group?: Maybe<Group__Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  monthlyPoints?: Maybe<Numeric_Comparison_Exp>;
  prismaUserId?: Maybe<String_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  user_?: Maybe<User__Bool_Exp>;
  weeklyPoints?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_group" */
export enum User_Group_Constraint {
  /** unique or primary key constraint */
  UserGroupPkey = 'user_group_pkey',
  /** unique or primary key constraint */
  UserGroupUserIdGroupIdKey = 'user_group_user_id_group_id_key'
}

/** input type for incrementing integer column in table "user_group" */
export type User_Group_Inc_Input = {
  monthlyPoints?: Maybe<Scalars['numeric']>;
  weeklyPoints?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "user_group" */
export type User_Group_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  group?: Maybe<Group__Obj_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  monthlyPoints?: Maybe<Scalars['numeric']>;
  prismaUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
  user_?: Maybe<User__Obj_Rel_Insert_Input>;
  weeklyPoints?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type User_Group_Max_Fields = {
  __typename?: 'user_group_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  groupId?: Maybe<Scalars['uuid']>;
  monthlyPoints?: Maybe<Scalars['numeric']>;
  prismaUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
  weeklyPoints?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "user_group" */
export type User_Group_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  monthlyPoints?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Group_Min_Fields = {
  __typename?: 'user_group_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  groupId?: Maybe<Scalars['uuid']>;
  monthlyPoints?: Maybe<Scalars['numeric']>;
  prismaUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
  weeklyPoints?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "user_group" */
export type User_Group_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  monthlyPoints?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_group" */
export type User_Group_Mutation_Response = {
  __typename?: 'user_group_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Group>;
};

/** input type for inserting object relation for remote table "user_group" */
export type User_Group_Obj_Rel_Insert_Input = {
  data: User_Group_Insert_Input;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};

/** on conflict condition type for table "user_group" */
export type User_Group_On_Conflict = {
  constraint: User_Group_Constraint;
  update_columns: Array<User_Group_Update_Column>;
  where?: Maybe<User_Group_Bool_Exp>;
};

/** ordering options when selecting data from "user_group" */
export type User_Group_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  group?: Maybe<Group__Order_By>;
  groupId?: Maybe<Order_By>;
  monthlyPoints?: Maybe<Order_By>;
  prismaUserId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  user_?: Maybe<User__Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_group" */
export type User_Group_Pk_Columns_Input = {
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "user_group" */
export enum User_Group_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  MonthlyPoints = 'monthlyPoints',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UserId = 'userId',
  /** column name */
  WeeklyPoints = 'weeklyPoints'
}

/** input type for updating data in table "user_group" */
export type User_Group_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  groupId?: Maybe<Scalars['uuid']>;
  monthlyPoints?: Maybe<Scalars['numeric']>;
  prismaUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
  weeklyPoints?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type User_Group_Stddev_Fields = {
  __typename?: 'user_group_stddev_fields';
  monthlyPoints?: Maybe<Scalars['Float']>;
  weeklyPoints?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_group" */
export type User_Group_Stddev_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Group_Stddev_Pop_Fields = {
  __typename?: 'user_group_stddev_pop_fields';
  monthlyPoints?: Maybe<Scalars['Float']>;
  weeklyPoints?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_group" */
export type User_Group_Stddev_Pop_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Group_Stddev_Samp_Fields = {
  __typename?: 'user_group_stddev_samp_fields';
  monthlyPoints?: Maybe<Scalars['Float']>;
  weeklyPoints?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_group" */
export type User_Group_Stddev_Samp_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Group_Sum_Fields = {
  __typename?: 'user_group_sum_fields';
  monthlyPoints?: Maybe<Scalars['numeric']>;
  weeklyPoints?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "user_group" */
export type User_Group_Sum_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** update columns of table "user_group" */
export enum User_Group_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  MonthlyPoints = 'monthlyPoints',
  /** column name */
  PrismaUserId = 'prismaUserId',
  /** column name */
  UserId = 'userId',
  /** column name */
  WeeklyPoints = 'weeklyPoints'
}

/** aggregate var_pop on columns */
export type User_Group_Var_Pop_Fields = {
  __typename?: 'user_group_var_pop_fields';
  monthlyPoints?: Maybe<Scalars['Float']>;
  weeklyPoints?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_group" */
export type User_Group_Var_Pop_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Group_Var_Samp_Fields = {
  __typename?: 'user_group_var_samp_fields';
  monthlyPoints?: Maybe<Scalars['Float']>;
  weeklyPoints?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_group" */
export type User_Group_Var_Samp_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Group_Variance_Fields = {
  __typename?: 'user_group_variance_fields';
  monthlyPoints?: Maybe<Scalars['Float']>;
  weeklyPoints?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_group" */
export type User_Group_Variance_Order_By = {
  monthlyPoints?: Maybe<Order_By>;
  weeklyPoints?: Maybe<Order_By>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type UpsertUserMutationMutationVariables = Exact<{
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  photos: Scalars['jsonb'];
  userId: Scalars['uuid'];
}>;


export type UpsertUserMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_user__by_pk?: Maybe<(
    { __typename?: 'user_' }
    & Pick<User_, 'id'>
  )> }
);

export type CreateChallengeGroupMutationMutationVariables = Exact<{
  groupId: Scalars['uuid'];
}>;


export type CreateChallengeGroupMutationMutation = (
  { __typename?: 'mutation_root' }
  & { challengeGroup?: Maybe<(
    { __typename?: 'challenge_group_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge_group' }
      & Pick<Challenge_Group, 'id' | 'groupId'>
    )> }
  )> }
);

export type CreateChallengeWithoutSeriesMutationMutationVariables = Exact<{
  challengeGroupId: Scalars['uuid'];
  description: Scalars['String'];
  title: Scalars['String'];
  endAt: Scalars['timestamptz'];
  prize: Scalars['String'];
  createChannel?: Maybe<Scalars['Boolean']>;
  file: File_Insert_Input;
}>;


export type CreateChallengeWithoutSeriesMutationMutation = (
  { __typename?: 'mutation_root' }
  & { createC?: Maybe<(
    { __typename?: 'challenge_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge' }
      & Pick<Challenge, 'id'>
    )> }
  )> }
);

export type InsertGroupMutationMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  worldChatName?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  alphaName?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  prismaSecret?: Maybe<Scalars['String']>;
  demonym?: Maybe<Scalars['String']>;
  leaderUserId?: Maybe<Scalars['uuid']>;
  demonymPlural?: Maybe<Scalars['String']>;
}>;


export type InsertGroupMutationMutation = (
  { __typename?: 'mutation_root' }
  & { group?: Maybe<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id' | 'name'>
  )> }
);

export type PinnedAnnouncementFragment = (
  { __typename?: 'announcement_' }
  & Pick<Announcement_, 'id' | 'name' | 'text' | 'subtitle'>
);

export type PinnedAnnouncementQueryQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type PinnedAnnouncementQueryQuery = (
  { __typename?: 'query_root' }
  & { groups: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { pinnedAnnouncement?: Maybe<(
      { __typename?: 'announcement_' }
      & PinnedAnnouncementFragment
    )> }
  )> }
);

export type FamGetMyChallengeEntryQueryVariables = Exact<{
  userId: Scalars['uuid'];
  challengeId: Scalars['uuid'];
}>;


export type FamGetMyChallengeEntryQuery = (
  { __typename?: 'query_root' }
  & { myEntries: Array<(
    { __typename?: 'challenge_entry' }
    & Pick<Challenge_Entry, 'id' | 'completedAt'>
  )> }
);

export type FamAcceptChallengeMutationVariables = Exact<{
  userId: Scalars['uuid'];
  challengeId: Scalars['uuid'];
}>;


export type FamAcceptChallengeMutation = (
  { __typename?: 'mutation_root' }
  & { myEntry?: Maybe<(
    { __typename?: 'challenge_entry' }
    & Pick<Challenge_Entry, 'id'>
  )> }
);

export type FamGetChallengeDetailsQueryVariables = Exact<{
  challengeId: Scalars['uuid'];
}>;


export type FamGetChallengeDetailsQuery = (
  { __typename?: 'query_root' }
  & { challenge?: Maybe<(
    { __typename?: 'challenge' }
    & ChallengeDetailsFragment
  )> }
);

export type FamChallengeEntryFragment = (
  { __typename?: 'challenge_entry' }
  & Pick<Challenge_Entry, 'id' | 'createdAt'>
);

export type FamGetChallengeEntriesQueryVariables = Exact<{
  challengeId: Scalars['uuid'];
  before?: Maybe<Scalars['timestamptz']>;
  limit: Scalars['Int'];
}>;


export type FamGetChallengeEntriesQuery = (
  { __typename?: 'query_root' }
  & { challengeEntries: Array<(
    { __typename?: 'challenge_entry' }
    & FamChallengeEntryFragment
  )> }
);

export type FamGetChallengeEntriesSubscriptionSubscriptionVariables = Exact<{
  challengeId: Scalars['uuid'];
}>;


export type FamGetChallengeEntriesSubscriptionSubscription = (
  { __typename?: 'subscription_root' }
  & { challengeEntries: Array<(
    { __typename?: 'challenge_entry' }
    & FamChallengeEntryFragment
  )> }
);

export type ChallengeEntryGetStatsQueryVariables = Exact<{
  challengeEntryId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type ChallengeEntryGetStatsQuery = (
  { __typename?: 'query_root' }
  & { entry?: Maybe<(
    { __typename?: 'challenge_entry' }
    & Pick<Challenge_Entry, 'id'>
    & { commentCount: (
      { __typename?: 'challenge_entry_comment_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'challenge_entry_comment_aggregate_fields' }
        & Pick<Challenge_Entry_Comment_Aggregate_Fields, 'count'>
      )> }
    ), reactionCount: (
      { __typename?: 'challenge_entry_reaction_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'challenge_entry_reaction_aggregate_fields' }
        & Pick<Challenge_Entry_Reaction_Aggregate_Fields, 'count'>
      )> }
    ), myReactions: Array<(
      { __typename?: 'challenge_entry_reaction' }
      & Pick<Challenge_Entry_Reaction, 'reactionId'>
    )> }
  )> }
);

export type ChallengeEntryCreateReactionMutationVariables = Exact<{
  userId: Scalars['uuid'];
  challengeEntryId: Scalars['uuid'];
}>;


export type ChallengeEntryCreateReactionMutation = (
  { __typename?: 'mutation_root' }
  & { reaction?: Maybe<(
    { __typename?: 'challenge_entry_reaction' }
    & Pick<Challenge_Entry_Reaction, 'reactionId'>
  )> }
);

export type ChallengeEntryDeleteReactionMutationVariables = Exact<{
  reactionId: Scalars['uuid'];
  challengeEntryId: Scalars['uuid'];
}>;


export type ChallengeEntryDeleteReactionMutation = (
  { __typename?: 'mutation_root' }
  & { reaction?: Maybe<(
    { __typename?: 'challenge_entry_reaction' }
    & Pick<Challenge_Entry_Reaction, 'reactionId'>
  )> }
);

export type FamChallengeEntryDetailsFragment = (
  { __typename?: 'challenge_entry' }
  & Pick<Challenge_Entry, 'id' | 'createdAt' | 'completedAt' | 'text'>
  & { files: Array<(
    { __typename?: 'challenge_entry_file' }
    & { file?: Maybe<(
      { __typename?: 'file' }
      & Pick<File, 'id' | 'path' | 'mimeType'>
    )> }
  )>, user?: Maybe<(
    { __typename?: 'user_' }
    & Pick<User_, 'id' | 'firstName' | 'lastName' | 'photos'>
  )> }
);

export type FamGetChallengeEntryDetailsQueryVariables = Exact<{
  challengeEntryId: Scalars['uuid'];
}>;


export type FamGetChallengeEntryDetailsQuery = (
  { __typename?: 'query_root' }
  & { challengeEntry?: Maybe<(
    { __typename?: 'challenge_entry' }
    & FamChallengeEntryDetailsFragment
  )> }
);

export type CompleteChallengeEntryMutationVariables = Exact<{
  challengeId: Scalars['uuid'];
  userId: Scalars['uuid'];
  text?: Maybe<Scalars['String']>;
}>;


export type CompleteChallengeEntryMutation = (
  { __typename?: 'mutation_root' }
  & { challengeEntry?: Maybe<(
    { __typename?: 'challenge_entry_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge_entry' }
      & Pick<Challenge_Entry, 'id'>
    )> }
  )> }
);

export type CreateChallengeEntryFilesMutationVariables = Exact<{
  challengeEntryFiles: Array<Challenge_Entry_File_Insert_Input> | Challenge_Entry_File_Insert_Input;
}>;


export type CreateChallengeEntryFilesMutation = (
  { __typename?: 'mutation_root' }
  & { files?: Maybe<(
    { __typename?: 'challenge_entry_file_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge_entry_file' }
      & Pick<Challenge_Entry_File, 'challengeEntryId'>
    )> }
  )> }
);

export type FamChallengeFragment = (
  { __typename?: 'challenge' }
  & Pick<Challenge, 'id' | 'createdAt'>
);

export type FamGetChallengesQueryVariables = Exact<{
  alphaName: Scalars['String'];
  before?: Maybe<Scalars['timestamptz']>;
  limit: Scalars['Int'];
}>;


export type FamGetChallengesQuery = (
  { __typename?: 'query_root' }
  & { challenges: Array<(
    { __typename?: 'challenge' }
    & FamChallengeFragment
  )> }
);

export type WinnerUserFragment = (
  { __typename?: 'user_' }
  & Pick<User_, 'id' | 'firstName' | 'lastName' | 'photos'>
);

export type ChallengeDetailsFragment = (
  { __typename?: 'challenge' }
  & Pick<Challenge, 'id' | 'title' | 'description' | 'prize' | 'endAt'>
  & { files: Array<(
    { __typename?: 'challenge_file' }
    & { file: (
      { __typename?: 'file' }
      & Pick<File, 'id' | 'mimeType' | 'path' | 'width' | 'height'>
    ) }
  )>, winner: Array<(
    { __typename?: 'challenge_entry' }
    & Pick<Challenge_Entry, 'id'>
    & { user?: Maybe<(
      { __typename?: 'user_' }
      & WinnerUserFragment
    )> }
  )>, acceptedCount: (
    { __typename?: 'challenge_entry_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'challenge_entry_aggregate_fields' }
      & Pick<Challenge_Entry_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type FamGetChallengeQueryVariables = Exact<{
  challengeId: Scalars['uuid'];
}>;


export type FamGetChallengeQuery = (
  { __typename?: 'query_root' }
  & { challenge?: Maybe<(
    { __typename?: 'challenge' }
    & ChallengeDetailsFragment
  )> }
);

export type MessageFragment = (
  { __typename?: 'channel_post' }
  & Pick<Channel_Post, 'id' | 'createdAt' | 'type' | 'message'>
  & { files: Array<(
    { __typename?: 'channel_post_file' }
    & { file?: Maybe<(
      { __typename?: 'file' }
      & Pick<File, 'id' | 'mimeType' | 'path' | 'width' | 'height'>
    )> }
  )>, member?: Maybe<(
    { __typename?: 'channel_member' }
    & Pick<Channel_Member, 'id'>
    & { user?: Maybe<(
      { __typename?: 'user_' }
      & Pick<User_, 'id' | 'firstName' | 'lastName' | 'photos' | 'activeAt'>
    )> }
  )> }
);

export type ChatGetChannelPostsQueryVariables = Exact<{
  channelId: Scalars['uuid'];
  limit: Scalars['Int'];
  before?: Maybe<Scalars['timestamptz']>;
  after?: Maybe<Scalars['timestamptz']>;
}>;


export type ChatGetChannelPostsQuery = (
  { __typename?: 'query_root' }
  & { channelPosts?: Maybe<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id'>
    & { posts: Array<(
      { __typename?: 'channel_post' }
      & MessageFragment
    )> }
  )> }
);

export type ChatReceiveChannelPostsSubscriptionVariables = Exact<{
  channelId: Scalars['uuid'];
  limit: Scalars['Int'];
}>;


export type ChatReceiveChannelPostsSubscription = (
  { __typename?: 'subscription_root' }
  & { channelPosts?: Maybe<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id'>
    & { posts: Array<(
      { __typename?: 'channel_post' }
      & MessageFragment
    )> }
  )> }
);

export type ChatUpdateLastViewedAtMutationVariables = Exact<{
  memberId: Scalars['uuid'];
}>;


export type ChatUpdateLastViewedAtMutation = (
  { __typename?: 'mutation_root' }
  & { member?: Maybe<(
    { __typename?: 'channel_member' }
    & Pick<Channel_Member, 'id' | 'lastViewedAt'>
  )> }
);

export type ChatGetChannelMemberQueryVariables = Exact<{
  userId: Scalars['uuid'];
  channelId: Scalars['uuid'];
}>;


export type ChatGetChannelMemberQuery = (
  { __typename?: 'query_root' }
  & { channel_member: Array<(
    { __typename?: 'channel_member' }
    & Pick<Channel_Member, 'id'>
  )> }
);

export type ChatGetHeaderDataQueryVariables = Exact<{
  channelId: Scalars['uuid'];
}>;


export type ChatGetHeaderDataQuery = (
  { __typename?: 'query_root' }
  & { channel?: Maybe<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id' | 'name'>
  )> }
);

export type ChatInsertChannelPostMutationVariables = Exact<{
  message?: Maybe<Scalars['String']>;
  memberId: Scalars['uuid'];
  channelId: Scalars['uuid'];
  type?: Maybe<Channel_Post_Type_Enum>;
}>;


export type ChatInsertChannelPostMutation = (
  { __typename?: 'mutation_root' }
  & { post?: Maybe<(
    { __typename?: 'channel_post' }
    & MessageFragment
  )> }
);

export type FamGetChatInfoQueryVariables = Exact<{
  channelId: Scalars['uuid'];
}>;


export type FamGetChatInfoQuery = (
  { __typename?: 'query_root' }
  & { channel?: Maybe<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id' | 'name' | 'description' | 'memberCount'>
    & { channelGroup?: Maybe<(
      { __typename?: 'group_' }
      & Pick<Group_, 'id' | 'imageUrl' | 'demonymPlural'>
    )>, channelFile?: Maybe<(
      { __typename?: 'channel_file' }
      & { file?: Maybe<(
        { __typename?: 'file' }
        & Pick<File, 'id' | 'path' | 'mimeType'>
      )> }
    )>, events: Array<(
      { __typename?: 'event_' }
      & Pick<Event_, 'id'>
    )> }
  )> }
);

export type SideMenuRsvpForMeetupMutationVariables = Exact<{
  userId: Scalars['uuid'];
  eventId: Scalars['uuid'];
}>;


export type SideMenuRsvpForMeetupMutation = (
  { __typename?: 'mutation_root' }
  & { myRsvp?: Maybe<(
    { __typename?: 'event_rsvp' }
    & Pick<Event_Rsvp, 'id'>
  )> }
);

export type SideMenuDeleteRsvpMutationVariables = Exact<{
  rsvpId: Scalars['uuid'];
}>;


export type SideMenuDeleteRsvpMutation = (
  { __typename?: 'mutation_root' }
  & { myRsvp?: Maybe<(
    { __typename?: 'event_rsvp' }
    & Pick<Event_Rsvp, 'id'>
  )> }
);

export type ChannelMeetupFragment = (
  { __typename?: 'event_' }
  & Pick<Event_, 'id' | 'name' | 'description' | 'location' | 'time'>
  & { file: (
    { __typename?: 'file' }
    & Pick<File, 'id' | 'path' | 'mimeType'>
  ), rsvpCount: (
    { __typename?: 'event_rsvp_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'event_rsvp_aggregate_fields' }
      & Pick<Event_Rsvp_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type SideMenuGetMeetupQueryVariables = Exact<{
  eventId: Scalars['uuid'];
}>;


export type SideMenuGetMeetupQuery = (
  { __typename?: 'query_root' }
  & { event?: Maybe<(
    { __typename?: 'event_' }
    & ChannelMeetupFragment
  )> }
);

export type SideMenuGetMyMeetupRsvpQueryVariables = Exact<{
  userId: Scalars['uuid'];
  eventId: Scalars['uuid'];
}>;


export type SideMenuGetMyMeetupRsvpQuery = (
  { __typename?: 'query_root' }
  & { myRsvps: Array<(
    { __typename?: 'event_rsvp' }
    & Pick<Event_Rsvp, 'id'>
  )> }
);

export type NavCircleListItemFragment = (
  { __typename?: 'channel' }
  & Pick<Channel, 'id' | 'createdAt' | 'name'>
  & { members: Array<(
    { __typename?: 'channel_member' }
    & Pick<Channel_Member, 'id' | 'lastViewedAt'>
  )>, posts: Array<(
    { __typename?: 'channel_post' }
    & Pick<Channel_Post, 'id' | 'createdAt' | 'message'>
  )>, files: Array<(
    { __typename?: 'channel_file' }
    & { file?: Maybe<(
      { __typename?: 'file' }
      & Pick<File, 'id' | 'path'>
    )> }
  )> }
);

export type FamBarGetCircleListQueryVariables = Exact<{
  alphaName: Scalars['String'];
  userId?: Maybe<Scalars['uuid']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type FamBarGetCircleListQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id' | 'imageUrl'>
    & { channels: Array<(
      { __typename?: 'channel' }
      & NavCircleListItemFragment
    )> }
  )> }
);

export type FamBarGetChannelMembershipsQueryVariables = Exact<{
  userId: Scalars['uuid'];
  alphaName: Scalars['String'];
}>;


export type FamBarGetChannelMembershipsQuery = (
  { __typename?: 'query_root' }
  & { memberships: Array<(
    { __typename?: 'channel_member' }
    & Pick<Channel_Member, 'id' | 'channelId'>
  )> }
);

export type FamBarJoinChannelMutationVariables = Exact<{
  channelId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type FamBarJoinChannelMutation = (
  { __typename?: 'mutation_root' }
  & { channelMember?: Maybe<(
    { __typename?: 'channel_member' }
    & Pick<Channel_Member, 'id'>
  )> }
);

export type FamBarGetGroupStatsQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type FamBarGetGroupStatsQuery = (
  { __typename?: 'query_root' }
  & { group_: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { users_aggregate: (
      { __typename?: 'user_group_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'user_group_aggregate_fields' }
        & Pick<User_Group_Aggregate_Fields, 'count'>
      )> }
    ), challengeGroup?: Maybe<(
      { __typename?: 'challenge_group' }
      & Pick<Challenge_Group, 'id'>
      & { challenges_aggregate: (
        { __typename?: 'challenge_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'challenge_aggregate_fields' }
          & Pick<Challenge_Aggregate_Fields, 'count'>
        )> }
      ) }
    )> }
  )> }
);

export type FamBarGetGroupJoinRequestStatusQueryVariables = Exact<{
  userId: Scalars['uuid'];
  groupId: Scalars['uuid'];
}>;


export type FamBarGetGroupJoinRequestStatusQuery = (
  { __typename?: 'query_root' }
  & { joinRequest: Array<(
    { __typename?: 'group_join_request' }
    & Pick<Group_Join_Request, 'id' | 'status'>
  )> }
);

export type FamBarLeaveGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type FamBarLeaveGroupMutation = (
  { __typename?: 'mutation_root' }
  & { channelMembers?: Maybe<(
    { __typename?: 'channel_member_mutation_response' }
    & { returning: Array<(
      { __typename?: 'channel_member' }
      & Pick<Channel_Member, 'id'>
    )> }
  )>, joinRequests?: Maybe<(
    { __typename?: 'group_join_request_mutation_response' }
    & { returning: Array<(
      { __typename?: 'group_join_request' }
      & Pick<Group_Join_Request, 'id'>
    )> }
  )>, groupRoles?: Maybe<(
    { __typename?: 'group_role_mutation_response' }
    & { returning: Array<(
      { __typename?: 'group_role' }
      & Pick<Group_Role, 'id'>
    )> }
  )>, userGroup?: Maybe<(
    { __typename?: 'user_group' }
    & Pick<User_Group, 'userId' | 'groupId'>
    & { user: (
      { __typename?: 'user_' }
      & { groups: Array<(
        { __typename?: 'user_group' }
        & { group: (
          { __typename?: 'group_' }
          & Pick<Group_, 'id'>
        ) }
      )> }
    ) }
  )> }
);

export type FamBarJoinGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type FamBarJoinGroupMutation = (
  { __typename?: 'mutation_root' }
  & { joinRequest?: Maybe<(
    { __typename?: 'group_join_request' }
    & Pick<Group_Join_Request, 'id'>
  )> }
);

export type CancelJoinGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type CancelJoinGroupMutation = (
  { __typename?: 'mutation_root' }
  & { joinRequests?: Maybe<(
    { __typename?: 'group_join_request_mutation_response' }
    & Pick<Group_Join_Request_Mutation_Response, 'affected_rows'>
  )> }
);

export type FamBarGetGroupQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type FamBarGetGroupQuery = (
  { __typename?: 'query_root' }
  & { group_: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id' | 'alphaName' | 'description' | 'imageUrl' | 'name' | 'userCount'>
    & { leader_?: Maybe<(
      { __typename?: 'user_' }
      & Pick<User_, 'id' | 'firstName' | 'lastName' | 'photos'>
    )> }
  )> }
);

export type NavGroupFragment = (
  { __typename?: 'group_' }
  & Pick<Group_, 'id' | 'name' | 'alphaName' | 'imageUrl'>
  & { channels: Array<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id'>
  )> }
);

export type NavGetUserGroupsQueryVariables = Exact<{
  userId: Scalars['uuid'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type NavGetUserGroupsQuery = (
  { __typename?: 'query_root' }
  & { groups: Array<(
    { __typename?: 'user_group' }
    & { group: (
      { __typename?: 'group_' }
      & NavGroupFragment
    ) }
  )> }
);

export type NavGetPendingUserGroupsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type NavGetPendingUserGroupsQuery = (
  { __typename?: 'query_root' }
  & { pendingGroups: Array<(
    { __typename?: 'group_join_request' }
    & { group?: Maybe<(
      { __typename?: 'group_' }
      & NavGroupFragment
    )> }
  )> }
);

export type NonMemberGetGroupJoinRequestStatusQueryVariables = Exact<{
  userId: Scalars['uuid'];
  groupId: Scalars['uuid'];
}>;


export type NonMemberGetGroupJoinRequestStatusQuery = (
  { __typename?: 'query_root' }
  & { joinRequest: Array<(
    { __typename?: 'group_join_request' }
    & Pick<Group_Join_Request, 'id' | 'status'>
  )> }
);

export type NonMemberGetGroupIdQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type NonMemberGetGroupIdQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
  )> }
);

export type NonMemberJoinGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type NonMemberJoinGroupMutation = (
  { __typename?: 'mutation_root' }
  & { joinRequest?: Maybe<(
    { __typename?: 'group_join_request' }
    & Pick<Group_Join_Request, 'id'>
  )> }
);

export type FamGetFirstChannelQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type FamGetFirstChannelQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { channels: Array<(
      { __typename?: 'channel' }
      & Pick<Channel, 'id'>
    )> }
  )> }
);

export type SettingsGetAnnouncementByIdQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type SettingsGetAnnouncementByIdQuery = (
  { __typename?: 'query_root' }
  & { announcement?: Maybe<(
    { __typename?: 'announcement_' }
    & Pick<Announcement_, 'id' | 'name' | 'subtitle' | 'text' | 'channelId' | 'updatedAt' | 'createdAt'>
    & { files: Array<(
      { __typename?: 'announcement_file' }
      & { file: (
        { __typename?: 'file' }
        & Pick<File, 'id' | 'path'>
      ) }
    )> }
  )> }
);

export type SettingsGetGroupByAlphaNameQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsGetGroupByAlphaNameQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
  )> }
);

export type SettingsPinAnnouncementMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  announcementId: Scalars['uuid'];
}>;


export type SettingsPinAnnouncementMutation = (
  { __typename?: 'mutation_root' }
  & { group?: Maybe<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id' | 'pinnedAnnouncementId'>
  )> }
);

export type SettingsUpdateAnnouncementMutationVariables = Exact<{
  announcementId: Scalars['uuid'];
  data: Announcement__Set_Input;
  fileId: Scalars['uuid'];
  fileData: File_Set_Input;
}>;


export type SettingsUpdateAnnouncementMutation = (
  { __typename?: 'mutation_root' }
  & { file?: Maybe<(
    { __typename?: 'file' }
    & Pick<File, 'id'>
  )>, announcement?: Maybe<(
    { __typename?: 'announcement_' }
    & Pick<Announcement_, 'id' | 'name' | 'subtitle' | 'text'>
    & { files: Array<(
      { __typename?: 'announcement_file' }
      & { file: (
        { __typename?: 'file' }
        & Pick<File, 'id' | 'path'>
      ) }
    )> }
  )> }
);

export type SettingsCreateAnnouncementMutationVariables = Exact<{
  data: Announcement__Insert_Input;
}>;


export type SettingsCreateAnnouncementMutation = (
  { __typename?: 'mutation_root' }
  & { announcement?: Maybe<(
    { __typename?: 'announcement_' }
    & Pick<Announcement_, 'id'>
  )> }
);

export type SettingsAnnouncementFragment = (
  { __typename?: 'announcement_' }
  & Pick<Announcement_, 'id' | 'groupId' | 'name' | 'subtitle' | 'createdAt'>
);

export type SettingsUnpinGroupAnnouncementMutationVariables = Exact<{
  groupId: Scalars['uuid'];
}>;


export type SettingsUnpinGroupAnnouncementMutation = (
  { __typename?: 'mutation_root' }
  & { group?: Maybe<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
  )> }
);

export type SettingsGetGroupAnnouncementsQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsGetGroupAnnouncementsQuery = (
  { __typename?: 'query_root' }
  & { announcements: Array<(
    { __typename?: 'announcement_' }
    & SettingsAnnouncementFragment
  )> }
);

export type SettingsDeleteGroupAnnouncementsMutationVariables = Exact<{
  uuids: Array<Scalars['uuid']> | Scalars['uuid'];
}>;


export type SettingsDeleteGroupAnnouncementsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_announcement_?: Maybe<(
    { __typename?: 'announcement__mutation_response' }
    & { returning: Array<(
      { __typename?: 'announcement_' }
      & Pick<Announcement_, 'id'>
    )> }
  )> }
);

export type SettingsGetChallengeFilesQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type SettingsGetChallengeFilesQuery = (
  { __typename?: 'query_root' }
  & { challenge_by_pk?: Maybe<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'id' | 'title'>
    & { entries: Array<(
      { __typename?: 'challenge_entry' }
      & Pick<Challenge_Entry, 'id' | 'text'>
      & { files: Array<(
        { __typename?: 'challenge_entry_file' }
        & { file?: Maybe<(
          { __typename?: 'file' }
          & Pick<File, 'id' | 'name' | 'path' | 'mimeType' | 'extension' | 'height' | 'createdAt' | 'previewPath' | 'prismaId' | 'size' | 'thumbnailPath' | 'updatedAt' | 'width'>
        )> }
      )>, user?: Maybe<(
        { __typename?: 'user_' }
        & Pick<User_, 'id' | 'firstName' | 'lastName'>
      )> }
    )> }
  )> }
);

export type SettingsGetGroupChallengeSeriesQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsGetGroupChallengeSeriesQuery = (
  { __typename?: 'query_root' }
  & { details: Array<(
    { __typename?: 'group_' }
    & { challengeGroup?: Maybe<(
      { __typename?: 'challenge_group' }
      & { challenge_series: Array<(
        { __typename?: 'challenge_series' }
        & Pick<Challenge_Series, 'id' | 'title'>
      )> }
    )> }
  )> }
);

export type SettingsGetChallengeByIdQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type SettingsGetChallengeByIdQuery = (
  { __typename?: 'query_root' }
  & { challenge?: Maybe<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'id' | 'title' | 'description' | 'prize' | 'createdAt' | 'endAt'>
    & { challenge_series_challenges: Array<(
      { __typename?: 'challenge_series_challenges' }
      & Pick<Challenge_Series_Challenges, 'challengeSeriesId'>
    )>, files: Array<(
      { __typename?: 'challenge_file' }
      & { file: (
        { __typename?: 'file' }
        & Pick<File, 'id' | 'path'>
      ) }
    )> }
  )> }
);

export type SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsChallengesGetChallengeGroupByAlphaNameQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { challengeGroup?: Maybe<(
      { __typename?: 'challenge_group' }
      & Pick<Challenge_Group, 'id'>
    )> }
  )> }
);

export type SettingsDeleteChallengeMutationVariables = Exact<{
  challengeId: Scalars['uuid'];
}>;


export type SettingsDeleteChallengeMutation = (
  { __typename?: 'mutation_root' }
  & { delete_challenge_entry_comment?: Maybe<(
    { __typename?: 'challenge_entry_comment_mutation_response' }
    & Pick<Challenge_Entry_Comment_Mutation_Response, 'affected_rows'>
  )>, delete_challenge_entry_reaction?: Maybe<(
    { __typename?: 'challenge_entry_reaction_mutation_response' }
    & Pick<Challenge_Entry_Reaction_Mutation_Response, 'affected_rows'>
  )>, delete_challenge_entry_file?: Maybe<(
    { __typename?: 'challenge_entry_file_mutation_response' }
    & Pick<Challenge_Entry_File_Mutation_Response, 'affected_rows'>
  )>, delete_challenge_entry?: Maybe<(
    { __typename?: 'challenge_entry_mutation_response' }
    & Pick<Challenge_Entry_Mutation_Response, 'affected_rows'>
  )>, delete_challenge_series_challenges?: Maybe<(
    { __typename?: 'challenge_series_challenges_mutation_response' }
    & Pick<Challenge_Series_Challenges_Mutation_Response, 'affected_rows'>
  )>, delete_challenge_file?: Maybe<(
    { __typename?: 'challenge_file_mutation_response' }
    & Pick<Challenge_File_Mutation_Response, 'affected_rows'>
  )>, delete_challenge_channel?: Maybe<(
    { __typename?: 'challenge_channel_mutation_response' }
    & Pick<Challenge_Channel_Mutation_Response, 'affected_rows'>
  )>, delete_challenge_points?: Maybe<(
    { __typename?: 'challenge_points_mutation_response' }
    & Pick<Challenge_Points_Mutation_Response, 'affected_rows'>
  )>, challenge?: Maybe<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'id'>
  )> }
);

export type SettingsCreateChallengeMutationVariables = Exact<{
  challengeGroupId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
  description: Scalars['String'];
  title: Scalars['String'];
  prize: Scalars['String'];
  endAt: Scalars['timestamptz'];
  createChannel?: Maybe<Scalars['Boolean']>;
  fileData: File_Insert_Input;
}>;


export type SettingsCreateChallengeMutation = (
  { __typename?: 'mutation_root' }
  & { challenge?: Maybe<(
    { __typename?: 'challenge_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge' }
      & Pick<Challenge, 'id'>
    )> }
  )> }
);

export type SettingsCreateChallengeWithoutSeriesMutationVariables = Exact<{
  challengeGroupId: Scalars['uuid'];
  description: Scalars['String'];
  title: Scalars['String'];
  prize: Scalars['String'];
  endAt: Scalars['timestamptz'];
  createChannel?: Maybe<Scalars['Boolean']>;
  fileData: File_Insert_Input;
}>;


export type SettingsCreateChallengeWithoutSeriesMutation = (
  { __typename?: 'mutation_root' }
  & { challenge?: Maybe<(
    { __typename?: 'challenge_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge' }
      & Pick<Challenge, 'id'>
    )> }
  )> }
);

export type SettingsUpdateChallengeMutationVariables = Exact<{
  challengeId: Scalars['uuid'];
  title: Scalars['String'];
  description: Scalars['String'];
  prize: Scalars['String'];
  endAt: Scalars['timestamptz'];
  fileId: Scalars['uuid'];
  fileData: File_Set_Input;
}>;


export type SettingsUpdateChallengeMutation = (
  { __typename?: 'mutation_root' }
  & { challengeSeries?: Maybe<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'id' | 'description' | 'title' | 'prize' | 'endAt'>
  )>, file?: Maybe<(
    { __typename?: 'file' }
    & Pick<File, 'id'>
  )> }
);

export type SettingsUpdateChallengeSeriesIdMutationVariables = Exact<{
  challengeId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
  newChallengeSeriesId?: Maybe<Scalars['uuid']>;
}>;


export type SettingsUpdateChallengeSeriesIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_challenge_series_challenges?: Maybe<(
    { __typename?: 'challenge_series_challenges_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge_series_challenges' }
      & { challenge: (
        { __typename?: 'challenge' }
        & Pick<Challenge, 'id'>
        & { challenge_series_challenges: Array<(
          { __typename?: 'challenge_series_challenges' }
          & Pick<Challenge_Series_Challenges, 'challengeSeriesId'>
        )> }
      ) }
    )> }
  )> }
);

export type SettingsCreateChallengeSeriesIdMutationVariables = Exact<{
  challengeId: Scalars['uuid'];
  newChallengeSeriesId: Scalars['uuid'];
}>;


export type SettingsCreateChallengeSeriesIdMutation = (
  { __typename?: 'mutation_root' }
  & { insert_challenge_series_challenges?: Maybe<(
    { __typename?: 'challenge_series_challenges_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge_series_challenges' }
      & { challenge: (
        { __typename?: 'challenge' }
        & Pick<Challenge, 'id'>
        & { challenge_series_challenges: Array<(
          { __typename?: 'challenge_series_challenges' }
          & Pick<Challenge_Series_Challenges, 'challengeSeriesId'>
        )> }
      ) }
    )> }
  )> }
);

export type SettingsDeleteChallengeSeriesIdMutationVariables = Exact<{
  challengeId: Scalars['uuid'];
  challengeSeriesId: Scalars['uuid'];
}>;


export type SettingsDeleteChallengeSeriesIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_challenge_series_challenges?: Maybe<(
    { __typename?: 'challenge_series_challenges_mutation_response' }
    & Pick<Challenge_Series_Challenges_Mutation_Response, 'affected_rows'>
  )> }
);

export type SettingsGetChallengeSeriesByIdQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type SettingsGetChallengeSeriesByIdQuery = (
  { __typename?: 'query_root' }
  & { challengeSeries?: Maybe<(
    { __typename?: 'challenge_series' }
    & Pick<Challenge_Series, 'id' | 'title' | 'description'>
  )> }
);

export type SettingsGetChallengeGroupByAlphaNameQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsGetChallengeGroupByAlphaNameQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { challengeGroup?: Maybe<(
      { __typename?: 'challenge_group' }
      & Pick<Challenge_Group, 'id'>
    )> }
  )> }
);

export type SettingsUpdateChallengeSeriesMutationVariables = Exact<{
  id: Scalars['uuid'];
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type SettingsUpdateChallengeSeriesMutation = (
  { __typename?: 'mutation_root' }
  & { challengeSeries?: Maybe<(
    { __typename?: 'challenge_series' }
    & Pick<Challenge_Series, 'id' | 'description' | 'title'>
  )> }
);

export type SettingsCreateChallengeSeriesMutationVariables = Exact<{
  challengeGroupId: Scalars['uuid'];
  description: Scalars['String'];
  title: Scalars['String'];
}>;


export type SettingsCreateChallengeSeriesMutation = (
  { __typename?: 'mutation_root' }
  & { challengeSeries?: Maybe<(
    { __typename?: 'challenge_series_mutation_response' }
    & { returning: Array<(
      { __typename?: 'challenge_series' }
      & Pick<Challenge_Series, 'id'>
    )> }
  )> }
);

export type SettingsChallengeSeriesFragment = (
  { __typename?: 'challenge_series' }
  & Pick<Challenge_Series, 'id' | 'title'>
);

export type SettingsChallengeFragment = (
  { __typename?: 'challenge' }
  & Pick<Challenge, 'id' | 'title' | 'prize' | 'endAt'>
  & { entries_aggregate: (
    { __typename?: 'challenge_entry_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'challenge_entry_aggregate_fields' }
      & Pick<Challenge_Entry_Aggregate_Fields, 'count'>
    )> }
  ), files: Array<(
    { __typename?: 'challenge_file' }
    & { file: (
      { __typename?: 'file' }
      & Pick<File, 'id' | 'path'>
    ) }
  )>, challenge_series_challenges: Array<(
    { __typename?: 'challenge_series_challenges' }
    & { challenge_series: (
      { __typename?: 'challenge_series' }
      & Pick<Challenge_Series, 'id' | 'title'>
    ) }
  )> }
);

export type SettingsGetGroupChallengesQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsGetGroupChallengesQuery = (
  { __typename?: 'query_root' }
  & { details: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { challengeGroup?: Maybe<(
      { __typename?: 'challenge_group' }
      & Pick<Challenge_Group, 'id'>
      & { challenges: Array<(
        { __typename?: 'challenge' }
        & SettingsChallengeFragment
      )>, challenge_series: Array<(
        { __typename?: 'challenge_series' }
        & SettingsChallengeSeriesFragment
      )> }
    )> }
  )> }
);

export type SettingsGetChannelByIdQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type SettingsGetChannelByIdQuery = (
  { __typename?: 'query_root' }
  & { channel?: Maybe<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id' | 'name' | 'description' | 'private' | 'default'>
    & { files: Array<(
      { __typename?: 'channel_file' }
      & { file?: Maybe<(
        { __typename?: 'file' }
        & Pick<File, 'id' | 'path'>
      )> }
    )> }
  )> }
);

export type SettingsChannelGetGroupByAlphaNameQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsChannelGetGroupByAlphaNameQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
  )> }
);

export type SettingsChannelCreateChannelMutationVariables = Exact<{
  data: Channel_Insert_Input;
}>;


export type SettingsChannelCreateChannelMutation = (
  { __typename?: 'mutation_root' }
  & { channel?: Maybe<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id'>
  )> }
);

export type SettingsChannelUpdateChannelMutationVariables = Exact<{
  channelId: Scalars['uuid'];
  data: Channel_Set_Input;
}>;


export type SettingsChannelUpdateChannelMutation = (
  { __typename?: 'mutation_root' }
  & { channel?: Maybe<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id' | 'name' | 'description' | 'private' | 'default'>
    & { files: Array<(
      { __typename?: 'channel_file' }
      & { file?: Maybe<(
        { __typename?: 'file' }
        & Pick<File, 'id' | 'path'>
      )> }
    )> }
  )> }
);

export type SettingsChannelCreateChannelFileMutationVariables = Exact<{
  file: File_Insert_Input;
}>;


export type SettingsChannelCreateChannelFileMutation = (
  { __typename?: 'mutation_root' }
  & { file?: Maybe<(
    { __typename?: 'file' }
    & Pick<File, 'id' | 'path'>
  )> }
);

export type SettingsChannelUpdateChannelFileMutationVariables = Exact<{
  fileId: Scalars['uuid'];
  channelId: Scalars['uuid'];
}>;


export type SettingsChannelUpdateChannelFileMutation = (
  { __typename?: 'mutation_root' }
  & { insert_channel_file_one?: Maybe<(
    { __typename?: 'channel_file' }
    & Pick<Channel_File, 'fileId' | 'channelId'>
  )> }
);

export type SettingsDeleteGroupChannelMutationVariables = Exact<{
  uuids: Array<Scalars['uuid']> | Scalars['uuid'];
}>;


export type SettingsDeleteGroupChannelMutation = (
  { __typename?: 'mutation_root' }
  & { updateReplies?: Maybe<(
    { __typename?: 'channel_post_mutation_response' }
    & { returning: Array<(
      { __typename?: 'channel_post' }
      & Pick<Channel_Post, 'id'>
    )> }
  )>, deleteReactions?: Maybe<(
    { __typename?: 'channel_post_reaction_mutation_response' }
    & { returning: Array<(
      { __typename?: 'channel_post_reaction' }
      & Pick<Channel_Post_Reaction, 'channelPostId' | 'reactionId'>
    )> }
  )>, deleteAllPosts?: Maybe<(
    { __typename?: 'channel_post_mutation_response' }
    & { returning: Array<(
      { __typename?: 'channel_post' }
      & Pick<Channel_Post, 'id'>
    )> }
  )>, deleteMembers?: Maybe<(
    { __typename?: 'channel_member_mutation_response' }
    & { returning: Array<(
      { __typename?: 'channel_member' }
      & Pick<Channel_Member, 'id'>
    )> }
  )>, deleteChannels?: Maybe<(
    { __typename?: 'channel_mutation_response' }
    & { returning: Array<(
      { __typename?: 'channel' }
      & Pick<Channel, 'id' | 'name'>
    )> }
  )> }
);

export type SettingsGetGroupChannelsQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsGetGroupChannelsQuery = (
  { __typename?: 'query_root' }
  & { channels: Array<(
    { __typename?: 'channel' }
    & Pick<Channel, 'id' | 'name' | 'memberCount' | 'default' | 'private'>
    & { posts_aggregate: (
      { __typename?: 'channel_post_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'channel_post_aggregate_fields' }
        & Pick<Channel_Post_Aggregate_Fields, 'count'>
      )> }
    ), owner?: Maybe<(
      { __typename?: 'user_' }
      & Pick<User_, 'firstName' | 'lastName'>
    )> }
  )> }
);

export type SettingsExportedGroupUserFragment = (
  { __typename?: 'user_group' }
  & Pick<User_Group, 'createdAt' | 'weeklyPoints' | 'monthlyPoints'>
  & { user: (
    { __typename?: 'user_' }
    & Pick<User_, 'id' | 'firstName' | 'lastName' | 'email'>
    & { roles: Array<(
      { __typename?: 'group_role' }
      & Pick<Group_Role, 'id'>
      & { roleType: (
        { __typename?: 'role' }
        & Pick<Role, 'value' | 'description'>
      ) }
    )> }
  ) }
);

export type SettingsExportGroupMembersQueryVariables = Exact<{
  alphaName: Scalars['String'];
  loggedInUserId: Scalars['uuid'];
}>;


export type SettingsExportGroupMembersQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { users: Array<(
      { __typename?: 'user_group' }
      & SettingsExportedGroupUserFragment
    )> }
  )> }
);

export type SettingsGroupUserFragment = (
  { __typename?: 'user_group' }
  & Pick<User_Group, 'createdAt' | 'weeklyPoints' | 'monthlyPoints'>
  & { user: (
    { __typename?: 'user_' }
    & Pick<User_, 'id' | 'firstName' | 'lastName'>
    & { roles: Array<(
      { __typename?: 'group_role' }
      & Pick<Group_Role, 'id'>
      & { roleType: (
        { __typename?: 'role' }
        & Pick<Role, 'value' | 'description'>
      ) }
    )> }
  ) }
);

export type SettingsGetGroupMembersQueryVariables = Exact<{
  alphaName: Scalars['String'];
  loggedInUserId: Scalars['uuid'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type SettingsGetGroupMembersQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { users: Array<(
      { __typename?: 'user_group' }
      & SettingsGroupUserFragment
    )> }
  )> }
);

export type SettingsDeleteGroupMembersMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userIds: Array<Scalars['uuid']> | Scalars['uuid'];
}>;


export type SettingsDeleteGroupMembersMutation = (
  { __typename?: 'mutation_root' }
  & { deletePosts?: Maybe<(
    { __typename?: 'channel_post_mutation_response' }
    & Pick<Channel_Post_Mutation_Response, 'affected_rows'>
  )>, deleteChannelMembers?: Maybe<(
    { __typename?: 'channel_member_mutation_response' }
    & Pick<Channel_Member_Mutation_Response, 'affected_rows'>
  )>, deleteJoinRequests?: Maybe<(
    { __typename?: 'group_join_request_mutation_response' }
    & Pick<Group_Join_Request_Mutation_Response, 'affected_rows'>
  )>, deleteRoles?: Maybe<(
    { __typename?: 'group_role_mutation_response' }
    & Pick<Group_Role_Mutation_Response, 'affected_rows'>
  )>, deleteUserGroup?: Maybe<(
    { __typename?: 'user_group_mutation_response' }
    & { returning: Array<(
      { __typename?: 'user_group' }
      & Pick<User_Group, 'userId' | 'groupId'>
    )> }
  )> }
);

export type SettingsGetGroupLeaderQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type SettingsGetGroupLeaderQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id' | 'leaderUserId'>
  )> }
);

export type ModalUpdateUserDetailsMutationVariables = Exact<{
  userId: Scalars['uuid'];
  data: User__Set_Input;
}>;


export type ModalUpdateUserDetailsMutation = (
  { __typename?: 'mutation_root' }
  & { updatedUser?: Maybe<(
    { __typename?: 'user_' }
    & Pick<User_, 'id' | 'firstName' | 'lastName' | 'photos'>
  )> }
);

export type NonMemberGetGroupLeaderQueryVariables = Exact<{
  alphaName: Scalars['String'];
}>;


export type NonMemberGetGroupLeaderQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id'>
    & { leader_?: Maybe<(
      { __typename?: 'user_' }
      & Pick<User_, 'id' | 'photos'>
    )> }
  )> }
);

export type ContextGetUserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ContextGetUserQuery = (
  { __typename?: 'query_root' }
  & { user__by_pk?: Maybe<(
    { __typename?: 'user_' }
    & UserFragment
  )> }
);

export type UserFragment = (
  { __typename?: 'user_' }
  & Pick<User_, 'id' | 'email' | 'firstName' | 'lastName' | 'photos' | 'employee'>
);

export type ContextUpdateUserActiveMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type ContextUpdateUserActiveMutation = (
  { __typename?: 'mutation_root' }
  & { user?: Maybe<(
    { __typename?: 'user_' }
    & Pick<User_, 'id' | 'activeAt'>
  )> }
);

export type CheckGroupMembershipQueryVariables = Exact<{
  alphaName: Scalars['String'];
  userId: Scalars['uuid'];
}>;


export type CheckGroupMembershipQuery = (
  { __typename?: 'query_root' }
  & { group: Array<(
    { __typename?: 'group_' }
    & Pick<Group_, 'id' | 'leaderUserId'>
    & { users: Array<(
      { __typename?: 'user_group' }
      & Pick<User_Group, 'userId'>
    )> }
  )> }
);

export const PinnedAnnouncementFragmentDoc = gql`
    fragment PinnedAnnouncement on announcement_ {
  id
  name
  text
  subtitle
}
    `;
export const FamChallengeEntryFragmentDoc = gql`
    fragment famChallengeEntry on challenge_entry {
  id
  createdAt
}
    `;
export const FamChallengeEntryDetailsFragmentDoc = gql`
    fragment famChallengeEntryDetails on challenge_entry {
  id
  createdAt
  completedAt
  text
  files {
    file {
      id
      path
      mimeType
    }
  }
  user: user_ {
    id
    firstName
    lastName
    photos
  }
}
    `;
export const FamChallengeFragmentDoc = gql`
    fragment famChallenge on challenge {
  id
  createdAt
}
    `;
export const WinnerUserFragmentDoc = gql`
    fragment winnerUser on user_ {
  id
  firstName
  lastName
  photos
}
    `;
export const ChallengeDetailsFragmentDoc = gql`
    fragment challengeDetails on challenge {
  id
  title
  description
  prize
  endAt
  files {
    file {
      id
      mimeType
      path
      width
      height
    }
  }
  winner: entries(
    where: {completedAt: {_is_null: false}}
    order_by: {reactions_aggregate: {count: desc}}
    limit: 1
  ) {
    id
    user: user_ {
      ...winnerUser
    }
  }
  acceptedCount: entries_aggregate {
    aggregate {
      count
    }
  }
}
    ${WinnerUserFragmentDoc}`;
export const MessageFragmentDoc = gql`
    fragment Message on channel_post {
  id
  createdAt
  type
  message
  files {
    file {
      id
      mimeType
      path
      width
      height
    }
  }
  member {
    id
    user: user_ {
      id
      firstName
      lastName
      photos
      activeAt
    }
  }
}
    `;
export const ChannelMeetupFragmentDoc = gql`
    fragment channelMeetup on event_ {
  id
  name
  description
  file {
    id
    path
    mimeType
  }
  location
  time
  rsvpCount: rsvps_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const NavCircleListItemFragmentDoc = gql`
    fragment NavCircleListItem on channel {
  id
  createdAt
  name
  members(where: {userId: {_eq: $userId}}) {
    id
    lastViewedAt
  }
  posts(
    limit: 1
    order_by: {createdAt: desc}
    where: {deletedAt: {_is_null: true}, type: {_neq: poll}}
  ) {
    id
    createdAt
    message
  }
  files {
    file {
      id
      path
    }
  }
}
    `;
export const NavGroupFragmentDoc = gql`
    fragment NavGroup on group_ {
  id
  name
  alphaName
  imageUrl
  channels(
    where: {private: {_eq: false}}
    order_by: {default: desc, members_aggregate: {count: desc}}
    limit: 1
  ) {
    id
  }
}
    `;
export const SettingsAnnouncementFragmentDoc = gql`
    fragment SettingsAnnouncement on announcement_ {
  id
  groupId
  name
  subtitle
  createdAt
}
    `;
export const SettingsChallengeSeriesFragmentDoc = gql`
    fragment SettingsChallengeSeries on challenge_series {
  id
  title
}
    `;
export const SettingsChallengeFragmentDoc = gql`
    fragment SettingsChallenge on challenge {
  id
  title
  prize
  endAt
  entries_aggregate {
    aggregate {
      count
    }
  }
  files {
    file {
      id
      path
    }
  }
  challenge_series_challenges {
    challenge_series {
      id
      title
    }
  }
}
    `;
export const SettingsExportedGroupUserFragmentDoc = gql`
    fragment SettingsExportedGroupUser on user_group {
  createdAt
  weeklyPoints
  monthlyPoints
  user: user_ {
    id
    firstName
    lastName
    email
    roles {
      id
      roleType {
        value
        description
      }
    }
  }
}
    `;
export const SettingsGroupUserFragmentDoc = gql`
    fragment SettingsGroupUser on user_group {
  createdAt
  weeklyPoints
  monthlyPoints
  user: user_ {
    id
    firstName
    lastName
    roles {
      id
      roleType {
        value
        description
      }
    }
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment User on user_ {
  id
  email
  firstName
  lastName
  photos
  employee
}
    `;
export const UpsertUserMutationDocument = gql`
    mutation UpsertUserMutation($lastName: String!, $firstName: String!, $photos: jsonb!, $userId: uuid!) {
  update_user__by_pk(
    pk_columns: {id: $userId}
    _set: {firstName: $firstName, lastName: $lastName, photos: $photos}
  ) {
    id
  }
}
    `;
export type UpsertUserMutationMutationFn = Apollo.MutationFunction<UpsertUserMutationMutation, UpsertUserMutationMutationVariables>;

/**
 * __useUpsertUserMutationMutation__
 *
 * To run a mutation, you first call `useUpsertUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserMutationMutation, { data, loading, error }] = useUpsertUserMutationMutation({
 *   variables: {
 *      lastName: // value for 'lastName'
 *      firstName: // value for 'firstName'
 *      photos: // value for 'photos'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpsertUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpsertUserMutationMutation, UpsertUserMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertUserMutationMutation, UpsertUserMutationMutationVariables>(UpsertUserMutationDocument, options);
      }
export type UpsertUserMutationMutationHookResult = ReturnType<typeof useUpsertUserMutationMutation>;
export type UpsertUserMutationMutationResult = Apollo.MutationResult<UpsertUserMutationMutation>;
export type UpsertUserMutationMutationOptions = Apollo.BaseMutationOptions<UpsertUserMutationMutation, UpsertUserMutationMutationVariables>;
export const CreateChallengeGroupMutationDocument = gql`
    mutation CreateChallengeGroupMutation($groupId: uuid!) {
  challengeGroup: insert_challenge_group(
    objects: {groupId: $groupId, challenge_series: {data: {title: "Level 1", description: "Welcome! Use this to track your growth"}}}
    on_conflict: {constraint: challenge_group_group_id_key, update_columns: updatedAt}
  ) {
    returning {
      id
      groupId
    }
  }
}
    `;
export type CreateChallengeGroupMutationMutationFn = Apollo.MutationFunction<CreateChallengeGroupMutationMutation, CreateChallengeGroupMutationMutationVariables>;

/**
 * __useCreateChallengeGroupMutationMutation__
 *
 * To run a mutation, you first call `useCreateChallengeGroupMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChallengeGroupMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChallengeGroupMutationMutation, { data, loading, error }] = useCreateChallengeGroupMutationMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useCreateChallengeGroupMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateChallengeGroupMutationMutation, CreateChallengeGroupMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChallengeGroupMutationMutation, CreateChallengeGroupMutationMutationVariables>(CreateChallengeGroupMutationDocument, options);
      }
export type CreateChallengeGroupMutationMutationHookResult = ReturnType<typeof useCreateChallengeGroupMutationMutation>;
export type CreateChallengeGroupMutationMutationResult = Apollo.MutationResult<CreateChallengeGroupMutationMutation>;
export type CreateChallengeGroupMutationMutationOptions = Apollo.BaseMutationOptions<CreateChallengeGroupMutationMutation, CreateChallengeGroupMutationMutationVariables>;
export const CreateChallengeWithoutSeriesMutationDocument = gql`
    mutation CreateChallengeWithoutSeriesMutation($challengeGroupId: uuid!, $description: String!, $title: String!, $endAt: timestamptz!, $prize: String!, $createChannel: Boolean = false, $file: file_insert_input!) {
  createC: insert_challenge(
    objects: {challengeGroupId: $challengeGroupId, endAt: $endAt, title: $title, prize: $prize, createChannel: $createChannel, description: $description, files: {data: {file: {data: $file}}, on_conflict: {constraint: challenge_file_challenge_id_key, update_columns: fileId}}}
    on_conflict: {constraint: challenge_pkey, update_columns: [description, title, prize, endAt]}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateChallengeWithoutSeriesMutationMutationFn = Apollo.MutationFunction<CreateChallengeWithoutSeriesMutationMutation, CreateChallengeWithoutSeriesMutationMutationVariables>;

/**
 * __useCreateChallengeWithoutSeriesMutationMutation__
 *
 * To run a mutation, you first call `useCreateChallengeWithoutSeriesMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChallengeWithoutSeriesMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChallengeWithoutSeriesMutationMutation, { data, loading, error }] = useCreateChallengeWithoutSeriesMutationMutation({
 *   variables: {
 *      challengeGroupId: // value for 'challengeGroupId'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      endAt: // value for 'endAt'
 *      prize: // value for 'prize'
 *      createChannel: // value for 'createChannel'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useCreateChallengeWithoutSeriesMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateChallengeWithoutSeriesMutationMutation, CreateChallengeWithoutSeriesMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChallengeWithoutSeriesMutationMutation, CreateChallengeWithoutSeriesMutationMutationVariables>(CreateChallengeWithoutSeriesMutationDocument, options);
      }
export type CreateChallengeWithoutSeriesMutationMutationHookResult = ReturnType<typeof useCreateChallengeWithoutSeriesMutationMutation>;
export type CreateChallengeWithoutSeriesMutationMutationResult = Apollo.MutationResult<CreateChallengeWithoutSeriesMutationMutation>;
export type CreateChallengeWithoutSeriesMutationMutationOptions = Apollo.BaseMutationOptions<CreateChallengeWithoutSeriesMutationMutation, CreateChallengeWithoutSeriesMutationMutationVariables>;
export const InsertGroupMutationDocument = gql`
    mutation InsertGroupMutation($name: String, $worldChatName: String, $shortName: String, $description: String, $alphaName: String, $imageUrl: String, $prismaSecret: String, $demonym: String, $leaderUserId: uuid, $demonymPlural: String) {
  group: insert_group__one(
    object: {name: $name, shortName: $shortName, description: $description, alphaName: $alphaName, imageUrl: $imageUrl, tilted: true, tiltThreshold: 1, prismaSecret: $prismaSecret, demonym: $demonym, demonymPlural: $demonymPlural, leaderUserId: $leaderUserId, users: {data: {userId: $leaderUserId}}, channels: {data: {default: true, type: world, totalPosts: 1, name: $worldChatName, members: {data: {userId: $leaderUserId, deletedAt: null}}, ownerId: $leaderUserId}}}
  ) {
    id
    name
  }
}
    `;
export type InsertGroupMutationMutationFn = Apollo.MutationFunction<InsertGroupMutationMutation, InsertGroupMutationMutationVariables>;

/**
 * __useInsertGroupMutationMutation__
 *
 * To run a mutation, you first call `useInsertGroupMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGroupMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGroupMutationMutation, { data, loading, error }] = useInsertGroupMutationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      worldChatName: // value for 'worldChatName'
 *      shortName: // value for 'shortName'
 *      description: // value for 'description'
 *      alphaName: // value for 'alphaName'
 *      imageUrl: // value for 'imageUrl'
 *      prismaSecret: // value for 'prismaSecret'
 *      demonym: // value for 'demonym'
 *      leaderUserId: // value for 'leaderUserId'
 *      demonymPlural: // value for 'demonymPlural'
 *   },
 * });
 */
export function useInsertGroupMutationMutation(baseOptions?: Apollo.MutationHookOptions<InsertGroupMutationMutation, InsertGroupMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertGroupMutationMutation, InsertGroupMutationMutationVariables>(InsertGroupMutationDocument, options);
      }
export type InsertGroupMutationMutationHookResult = ReturnType<typeof useInsertGroupMutationMutation>;
export type InsertGroupMutationMutationResult = Apollo.MutationResult<InsertGroupMutationMutation>;
export type InsertGroupMutationMutationOptions = Apollo.BaseMutationOptions<InsertGroupMutationMutation, InsertGroupMutationMutationVariables>;
export const PinnedAnnouncementQueryDocument = gql`
    query PinnedAnnouncementQuery($alphaName: String!) {
  groups: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    pinnedAnnouncement {
      ...PinnedAnnouncement
    }
  }
}
    ${PinnedAnnouncementFragmentDoc}`;

/**
 * __usePinnedAnnouncementQueryQuery__
 *
 * To run a query within a React component, call `usePinnedAnnouncementQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePinnedAnnouncementQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePinnedAnnouncementQueryQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function usePinnedAnnouncementQueryQuery(baseOptions: Apollo.QueryHookOptions<PinnedAnnouncementQueryQuery, PinnedAnnouncementQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PinnedAnnouncementQueryQuery, PinnedAnnouncementQueryQueryVariables>(PinnedAnnouncementQueryDocument, options);
      }
export function usePinnedAnnouncementQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PinnedAnnouncementQueryQuery, PinnedAnnouncementQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PinnedAnnouncementQueryQuery, PinnedAnnouncementQueryQueryVariables>(PinnedAnnouncementQueryDocument, options);
        }
export type PinnedAnnouncementQueryQueryHookResult = ReturnType<typeof usePinnedAnnouncementQueryQuery>;
export type PinnedAnnouncementQueryLazyQueryHookResult = ReturnType<typeof usePinnedAnnouncementQueryLazyQuery>;
export type PinnedAnnouncementQueryQueryResult = Apollo.QueryResult<PinnedAnnouncementQueryQuery, PinnedAnnouncementQueryQueryVariables>;
export const FamGetMyChallengeEntryDocument = gql`
    query FamGetMyChallengeEntry($userId: uuid!, $challengeId: uuid!) {
  myEntries: challenge_entry(
    where: {userId: {_eq: $userId}, challengeId: {_eq: $challengeId}}
    order_by: {createdAt: desc}
    limit: 1
  ) {
    id
    completedAt
  }
}
    `;

/**
 * __useFamGetMyChallengeEntryQuery__
 *
 * To run a query within a React component, call `useFamGetMyChallengeEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetMyChallengeEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetMyChallengeEntryQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      challengeId: // value for 'challengeId'
 *   },
 * });
 */
export function useFamGetMyChallengeEntryQuery(baseOptions: Apollo.QueryHookOptions<FamGetMyChallengeEntryQuery, FamGetMyChallengeEntryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetMyChallengeEntryQuery, FamGetMyChallengeEntryQueryVariables>(FamGetMyChallengeEntryDocument, options);
      }
export function useFamGetMyChallengeEntryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetMyChallengeEntryQuery, FamGetMyChallengeEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetMyChallengeEntryQuery, FamGetMyChallengeEntryQueryVariables>(FamGetMyChallengeEntryDocument, options);
        }
export type FamGetMyChallengeEntryQueryHookResult = ReturnType<typeof useFamGetMyChallengeEntryQuery>;
export type FamGetMyChallengeEntryLazyQueryHookResult = ReturnType<typeof useFamGetMyChallengeEntryLazyQuery>;
export type FamGetMyChallengeEntryQueryResult = Apollo.QueryResult<FamGetMyChallengeEntryQuery, FamGetMyChallengeEntryQueryVariables>;
export const FamAcceptChallengeDocument = gql`
    mutation FamAcceptChallenge($userId: uuid!, $challengeId: uuid!) {
  myEntry: insert_challenge_entry_one(
    object: {userId: $userId, challengeId: $challengeId, completedAt: null}
  ) {
    id
  }
}
    `;
export type FamAcceptChallengeMutationFn = Apollo.MutationFunction<FamAcceptChallengeMutation, FamAcceptChallengeMutationVariables>;

/**
 * __useFamAcceptChallengeMutation__
 *
 * To run a mutation, you first call `useFamAcceptChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFamAcceptChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [famAcceptChallengeMutation, { data, loading, error }] = useFamAcceptChallengeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      challengeId: // value for 'challengeId'
 *   },
 * });
 */
export function useFamAcceptChallengeMutation(baseOptions?: Apollo.MutationHookOptions<FamAcceptChallengeMutation, FamAcceptChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FamAcceptChallengeMutation, FamAcceptChallengeMutationVariables>(FamAcceptChallengeDocument, options);
      }
export type FamAcceptChallengeMutationHookResult = ReturnType<typeof useFamAcceptChallengeMutation>;
export type FamAcceptChallengeMutationResult = Apollo.MutationResult<FamAcceptChallengeMutation>;
export type FamAcceptChallengeMutationOptions = Apollo.BaseMutationOptions<FamAcceptChallengeMutation, FamAcceptChallengeMutationVariables>;
export const FamGetChallengeDetailsDocument = gql`
    query FamGetChallengeDetails($challengeId: uuid!) {
  challenge: challenge_by_pk(id: $challengeId) {
    ...challengeDetails
  }
}
    ${ChallengeDetailsFragmentDoc}`;

/**
 * __useFamGetChallengeDetailsQuery__
 *
 * To run a query within a React component, call `useFamGetChallengeDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetChallengeDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetChallengeDetailsQuery({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *   },
 * });
 */
export function useFamGetChallengeDetailsQuery(baseOptions: Apollo.QueryHookOptions<FamGetChallengeDetailsQuery, FamGetChallengeDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetChallengeDetailsQuery, FamGetChallengeDetailsQueryVariables>(FamGetChallengeDetailsDocument, options);
      }
export function useFamGetChallengeDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetChallengeDetailsQuery, FamGetChallengeDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetChallengeDetailsQuery, FamGetChallengeDetailsQueryVariables>(FamGetChallengeDetailsDocument, options);
        }
export type FamGetChallengeDetailsQueryHookResult = ReturnType<typeof useFamGetChallengeDetailsQuery>;
export type FamGetChallengeDetailsLazyQueryHookResult = ReturnType<typeof useFamGetChallengeDetailsLazyQuery>;
export type FamGetChallengeDetailsQueryResult = Apollo.QueryResult<FamGetChallengeDetailsQuery, FamGetChallengeDetailsQueryVariables>;
export const FamGetChallengeEntriesDocument = gql`
    query FamGetChallengeEntries($challengeId: uuid!, $before: timestamptz, $limit: Int!) {
  challengeEntries: challenge_entry(
    where: {challengeId: {_eq: $challengeId}, completedAt: {_is_null: false}, createdAt: {_lt: $before}}
    order_by: {createdAt: desc}
    limit: $limit
  ) {
    ...famChallengeEntry
  }
}
    ${FamChallengeEntryFragmentDoc}`;

/**
 * __useFamGetChallengeEntriesQuery__
 *
 * To run a query within a React component, call `useFamGetChallengeEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetChallengeEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetChallengeEntriesQuery({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFamGetChallengeEntriesQuery(baseOptions: Apollo.QueryHookOptions<FamGetChallengeEntriesQuery, FamGetChallengeEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetChallengeEntriesQuery, FamGetChallengeEntriesQueryVariables>(FamGetChallengeEntriesDocument, options);
      }
export function useFamGetChallengeEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetChallengeEntriesQuery, FamGetChallengeEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetChallengeEntriesQuery, FamGetChallengeEntriesQueryVariables>(FamGetChallengeEntriesDocument, options);
        }
export type FamGetChallengeEntriesQueryHookResult = ReturnType<typeof useFamGetChallengeEntriesQuery>;
export type FamGetChallengeEntriesLazyQueryHookResult = ReturnType<typeof useFamGetChallengeEntriesLazyQuery>;
export type FamGetChallengeEntriesQueryResult = Apollo.QueryResult<FamGetChallengeEntriesQuery, FamGetChallengeEntriesQueryVariables>;
export const FamGetChallengeEntriesSubscriptionDocument = gql`
    subscription FamGetChallengeEntriesSubscription($challengeId: uuid!) {
  challengeEntries: challenge_entry(
    where: {challengeId: {_eq: $challengeId}, completedAt: {_is_null: false}}
    order_by: {createdAt: desc}
    limit: 1
  ) {
    ...famChallengeEntry
  }
}
    ${FamChallengeEntryFragmentDoc}`;

/**
 * __useFamGetChallengeEntriesSubscriptionSubscription__
 *
 * To run a query within a React component, call `useFamGetChallengeEntriesSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFamGetChallengeEntriesSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetChallengeEntriesSubscriptionSubscription({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *   },
 * });
 */
export function useFamGetChallengeEntriesSubscriptionSubscription(baseOptions: Apollo.SubscriptionHookOptions<FamGetChallengeEntriesSubscriptionSubscription, FamGetChallengeEntriesSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<FamGetChallengeEntriesSubscriptionSubscription, FamGetChallengeEntriesSubscriptionSubscriptionVariables>(FamGetChallengeEntriesSubscriptionDocument, options);
      }
export type FamGetChallengeEntriesSubscriptionSubscriptionHookResult = ReturnType<typeof useFamGetChallengeEntriesSubscriptionSubscription>;
export type FamGetChallengeEntriesSubscriptionSubscriptionResult = Apollo.SubscriptionResult<FamGetChallengeEntriesSubscriptionSubscription>;
export const ChallengeEntryGetStatsDocument = gql`
    query ChallengeEntryGetStats($challengeEntryId: uuid!, $userId: uuid!) {
  entry: challenge_entry_by_pk(id: $challengeEntryId) {
    id
    commentCount: comments_aggregate {
      aggregate {
        count
      }
    }
    reactionCount: reactions_aggregate {
      aggregate {
        count
      }
    }
    myReactions: reactions(where: {reaction: {userId: {_eq: $userId}}}, limit: 1) {
      reactionId
    }
  }
}
    `;

/**
 * __useChallengeEntryGetStatsQuery__
 *
 * To run a query within a React component, call `useChallengeEntryGetStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeEntryGetStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeEntryGetStatsQuery({
 *   variables: {
 *      challengeEntryId: // value for 'challengeEntryId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useChallengeEntryGetStatsQuery(baseOptions: Apollo.QueryHookOptions<ChallengeEntryGetStatsQuery, ChallengeEntryGetStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeEntryGetStatsQuery, ChallengeEntryGetStatsQueryVariables>(ChallengeEntryGetStatsDocument, options);
      }
export function useChallengeEntryGetStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeEntryGetStatsQuery, ChallengeEntryGetStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeEntryGetStatsQuery, ChallengeEntryGetStatsQueryVariables>(ChallengeEntryGetStatsDocument, options);
        }
export type ChallengeEntryGetStatsQueryHookResult = ReturnType<typeof useChallengeEntryGetStatsQuery>;
export type ChallengeEntryGetStatsLazyQueryHookResult = ReturnType<typeof useChallengeEntryGetStatsLazyQuery>;
export type ChallengeEntryGetStatsQueryResult = Apollo.QueryResult<ChallengeEntryGetStatsQuery, ChallengeEntryGetStatsQueryVariables>;
export const ChallengeEntryCreateReactionDocument = gql`
    mutation ChallengeEntryCreateReaction($userId: uuid!, $challengeEntryId: uuid!) {
  reaction: insert_challenge_entry_reaction_one(
    object: {challengeEntryId: $challengeEntryId, reaction: {data: {userId: $userId, type: heart}}}
  ) {
    reactionId
  }
}
    `;
export type ChallengeEntryCreateReactionMutationFn = Apollo.MutationFunction<ChallengeEntryCreateReactionMutation, ChallengeEntryCreateReactionMutationVariables>;

/**
 * __useChallengeEntryCreateReactionMutation__
 *
 * To run a mutation, you first call `useChallengeEntryCreateReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChallengeEntryCreateReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [challengeEntryCreateReactionMutation, { data, loading, error }] = useChallengeEntryCreateReactionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      challengeEntryId: // value for 'challengeEntryId'
 *   },
 * });
 */
export function useChallengeEntryCreateReactionMutation(baseOptions?: Apollo.MutationHookOptions<ChallengeEntryCreateReactionMutation, ChallengeEntryCreateReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChallengeEntryCreateReactionMutation, ChallengeEntryCreateReactionMutationVariables>(ChallengeEntryCreateReactionDocument, options);
      }
export type ChallengeEntryCreateReactionMutationHookResult = ReturnType<typeof useChallengeEntryCreateReactionMutation>;
export type ChallengeEntryCreateReactionMutationResult = Apollo.MutationResult<ChallengeEntryCreateReactionMutation>;
export type ChallengeEntryCreateReactionMutationOptions = Apollo.BaseMutationOptions<ChallengeEntryCreateReactionMutation, ChallengeEntryCreateReactionMutationVariables>;
export const ChallengeEntryDeleteReactionDocument = gql`
    mutation ChallengeEntryDeleteReaction($reactionId: uuid!, $challengeEntryId: uuid!) {
  reaction: delete_challenge_entry_reaction_by_pk(
    challengeEntryId: $challengeEntryId
    reactionId: $reactionId
  ) {
    reactionId
  }
}
    `;
export type ChallengeEntryDeleteReactionMutationFn = Apollo.MutationFunction<ChallengeEntryDeleteReactionMutation, ChallengeEntryDeleteReactionMutationVariables>;

/**
 * __useChallengeEntryDeleteReactionMutation__
 *
 * To run a mutation, you first call `useChallengeEntryDeleteReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChallengeEntryDeleteReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [challengeEntryDeleteReactionMutation, { data, loading, error }] = useChallengeEntryDeleteReactionMutation({
 *   variables: {
 *      reactionId: // value for 'reactionId'
 *      challengeEntryId: // value for 'challengeEntryId'
 *   },
 * });
 */
export function useChallengeEntryDeleteReactionMutation(baseOptions?: Apollo.MutationHookOptions<ChallengeEntryDeleteReactionMutation, ChallengeEntryDeleteReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChallengeEntryDeleteReactionMutation, ChallengeEntryDeleteReactionMutationVariables>(ChallengeEntryDeleteReactionDocument, options);
      }
export type ChallengeEntryDeleteReactionMutationHookResult = ReturnType<typeof useChallengeEntryDeleteReactionMutation>;
export type ChallengeEntryDeleteReactionMutationResult = Apollo.MutationResult<ChallengeEntryDeleteReactionMutation>;
export type ChallengeEntryDeleteReactionMutationOptions = Apollo.BaseMutationOptions<ChallengeEntryDeleteReactionMutation, ChallengeEntryDeleteReactionMutationVariables>;
export const FamGetChallengeEntryDetailsDocument = gql`
    query FamGetChallengeEntryDetails($challengeEntryId: uuid!) {
  challengeEntry: challenge_entry_by_pk(id: $challengeEntryId) {
    ...famChallengeEntryDetails
  }
}
    ${FamChallengeEntryDetailsFragmentDoc}`;

/**
 * __useFamGetChallengeEntryDetailsQuery__
 *
 * To run a query within a React component, call `useFamGetChallengeEntryDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetChallengeEntryDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetChallengeEntryDetailsQuery({
 *   variables: {
 *      challengeEntryId: // value for 'challengeEntryId'
 *   },
 * });
 */
export function useFamGetChallengeEntryDetailsQuery(baseOptions: Apollo.QueryHookOptions<FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables>(FamGetChallengeEntryDetailsDocument, options);
      }
export function useFamGetChallengeEntryDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables>(FamGetChallengeEntryDetailsDocument, options);
        }
export type FamGetChallengeEntryDetailsQueryHookResult = ReturnType<typeof useFamGetChallengeEntryDetailsQuery>;
export type FamGetChallengeEntryDetailsLazyQueryHookResult = ReturnType<typeof useFamGetChallengeEntryDetailsLazyQuery>;
export type FamGetChallengeEntryDetailsQueryResult = Apollo.QueryResult<FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables>;
export const CompleteChallengeEntryDocument = gql`
    mutation CompleteChallengeEntry($challengeId: uuid!, $userId: uuid!, $text: String) {
  challengeEntry: update_challenge_entry(
    where: {_and: [{challengeId: {_eq: $challengeId}}, {userId: {_eq: $userId}}]}
    _set: {text: $text, completedAt: "now()"}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CompleteChallengeEntryMutationFn = Apollo.MutationFunction<CompleteChallengeEntryMutation, CompleteChallengeEntryMutationVariables>;

/**
 * __useCompleteChallengeEntryMutation__
 *
 * To run a mutation, you first call `useCompleteChallengeEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteChallengeEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeChallengeEntryMutation, { data, loading, error }] = useCompleteChallengeEntryMutation({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *      userId: // value for 'userId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCompleteChallengeEntryMutation(baseOptions?: Apollo.MutationHookOptions<CompleteChallengeEntryMutation, CompleteChallengeEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteChallengeEntryMutation, CompleteChallengeEntryMutationVariables>(CompleteChallengeEntryDocument, options);
      }
export type CompleteChallengeEntryMutationHookResult = ReturnType<typeof useCompleteChallengeEntryMutation>;
export type CompleteChallengeEntryMutationResult = Apollo.MutationResult<CompleteChallengeEntryMutation>;
export type CompleteChallengeEntryMutationOptions = Apollo.BaseMutationOptions<CompleteChallengeEntryMutation, CompleteChallengeEntryMutationVariables>;
export const CreateChallengeEntryFilesDocument = gql`
    mutation CreateChallengeEntryFiles($challengeEntryFiles: [challenge_entry_file_insert_input!]!) {
  files: insert_challenge_entry_file(
    objects: $challengeEntryFiles
    on_conflict: {constraint: challenge_entry_file_pkey, update_columns: [fileId]}
  ) {
    returning {
      challengeEntryId
    }
  }
}
    `;
export type CreateChallengeEntryFilesMutationFn = Apollo.MutationFunction<CreateChallengeEntryFilesMutation, CreateChallengeEntryFilesMutationVariables>;

/**
 * __useCreateChallengeEntryFilesMutation__
 *
 * To run a mutation, you first call `useCreateChallengeEntryFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChallengeEntryFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChallengeEntryFilesMutation, { data, loading, error }] = useCreateChallengeEntryFilesMutation({
 *   variables: {
 *      challengeEntryFiles: // value for 'challengeEntryFiles'
 *   },
 * });
 */
export function useCreateChallengeEntryFilesMutation(baseOptions?: Apollo.MutationHookOptions<CreateChallengeEntryFilesMutation, CreateChallengeEntryFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChallengeEntryFilesMutation, CreateChallengeEntryFilesMutationVariables>(CreateChallengeEntryFilesDocument, options);
      }
export type CreateChallengeEntryFilesMutationHookResult = ReturnType<typeof useCreateChallengeEntryFilesMutation>;
export type CreateChallengeEntryFilesMutationResult = Apollo.MutationResult<CreateChallengeEntryFilesMutation>;
export type CreateChallengeEntryFilesMutationOptions = Apollo.BaseMutationOptions<CreateChallengeEntryFilesMutation, CreateChallengeEntryFilesMutationVariables>;
export const FamGetChallengesDocument = gql`
    query FamGetChallenges($alphaName: String!, $before: timestamptz, $limit: Int!) {
  challenges: challenge(
    where: {challengeGroup: {group_: {alphaName: {_eq: $alphaName}}}, createdAt: {_lt: $before}}
    order_by: {createdAt: desc}
    limit: $limit
  ) {
    ...famChallenge
  }
}
    ${FamChallengeFragmentDoc}`;

/**
 * __useFamGetChallengesQuery__
 *
 * To run a query within a React component, call `useFamGetChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetChallengesQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFamGetChallengesQuery(baseOptions: Apollo.QueryHookOptions<FamGetChallengesQuery, FamGetChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetChallengesQuery, FamGetChallengesQueryVariables>(FamGetChallengesDocument, options);
      }
export function useFamGetChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetChallengesQuery, FamGetChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetChallengesQuery, FamGetChallengesQueryVariables>(FamGetChallengesDocument, options);
        }
export type FamGetChallengesQueryHookResult = ReturnType<typeof useFamGetChallengesQuery>;
export type FamGetChallengesLazyQueryHookResult = ReturnType<typeof useFamGetChallengesLazyQuery>;
export type FamGetChallengesQueryResult = Apollo.QueryResult<FamGetChallengesQuery, FamGetChallengesQueryVariables>;
export const FamGetChallengeDocument = gql`
    query FamGetChallenge($challengeId: uuid!) {
  challenge: challenge_by_pk(id: $challengeId) {
    ...challengeDetails
  }
}
    ${ChallengeDetailsFragmentDoc}`;

/**
 * __useFamGetChallengeQuery__
 *
 * To run a query within a React component, call `useFamGetChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetChallengeQuery({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *   },
 * });
 */
export function useFamGetChallengeQuery(baseOptions: Apollo.QueryHookOptions<FamGetChallengeQuery, FamGetChallengeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetChallengeQuery, FamGetChallengeQueryVariables>(FamGetChallengeDocument, options);
      }
export function useFamGetChallengeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetChallengeQuery, FamGetChallengeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetChallengeQuery, FamGetChallengeQueryVariables>(FamGetChallengeDocument, options);
        }
export type FamGetChallengeQueryHookResult = ReturnType<typeof useFamGetChallengeQuery>;
export type FamGetChallengeLazyQueryHookResult = ReturnType<typeof useFamGetChallengeLazyQuery>;
export type FamGetChallengeQueryResult = Apollo.QueryResult<FamGetChallengeQuery, FamGetChallengeQueryVariables>;
export const ChatGetChannelPostsDocument = gql`
    query ChatGetChannelPosts($channelId: uuid!, $limit: Int!, $before: timestamptz, $after: timestamptz) {
  channelPosts: channel_by_pk(id: $channelId) {
    id
    posts(
      where: {createdAt: {_lt: $before, _gt: $after}, deletedAt: {_is_null: true}, member: {user_: {deleted_at: {_is_null: true}}}}
      order_by: {createdAt: desc}
      limit: $limit
    ) {
      ...Message
    }
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useChatGetChannelPostsQuery__
 *
 * To run a query within a React component, call `useChatGetChannelPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatGetChannelPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatGetChannelPostsQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useChatGetChannelPostsQuery(baseOptions: Apollo.QueryHookOptions<ChatGetChannelPostsQuery, ChatGetChannelPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatGetChannelPostsQuery, ChatGetChannelPostsQueryVariables>(ChatGetChannelPostsDocument, options);
      }
export function useChatGetChannelPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatGetChannelPostsQuery, ChatGetChannelPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatGetChannelPostsQuery, ChatGetChannelPostsQueryVariables>(ChatGetChannelPostsDocument, options);
        }
export type ChatGetChannelPostsQueryHookResult = ReturnType<typeof useChatGetChannelPostsQuery>;
export type ChatGetChannelPostsLazyQueryHookResult = ReturnType<typeof useChatGetChannelPostsLazyQuery>;
export type ChatGetChannelPostsQueryResult = Apollo.QueryResult<ChatGetChannelPostsQuery, ChatGetChannelPostsQueryVariables>;
export const ChatReceiveChannelPostsDocument = gql`
    subscription ChatReceiveChannelPosts($channelId: uuid!, $limit: Int!) {
  channelPosts: channel_by_pk(id: $channelId) {
    id
    posts(
      where: {member: {user_: {deleted_at: {_is_null: true}}}}
      order_by: {updatedAt: desc}
      limit: $limit
    ) {
      ...Message
    }
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useChatReceiveChannelPostsSubscription__
 *
 * To run a query within a React component, call `useChatReceiveChannelPostsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatReceiveChannelPostsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatReceiveChannelPostsSubscription({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useChatReceiveChannelPostsSubscription(baseOptions: Apollo.SubscriptionHookOptions<ChatReceiveChannelPostsSubscription, ChatReceiveChannelPostsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatReceiveChannelPostsSubscription, ChatReceiveChannelPostsSubscriptionVariables>(ChatReceiveChannelPostsDocument, options);
      }
export type ChatReceiveChannelPostsSubscriptionHookResult = ReturnType<typeof useChatReceiveChannelPostsSubscription>;
export type ChatReceiveChannelPostsSubscriptionResult = Apollo.SubscriptionResult<ChatReceiveChannelPostsSubscription>;
export const ChatUpdateLastViewedAtDocument = gql`
    mutation ChatUpdateLastViewedAt($memberId: uuid!) {
  member: update_channel_member_by_pk(
    pk_columns: {id: $memberId}
    _set: {lastViewedAt: "now()"}
  ) {
    id
    lastViewedAt
  }
}
    `;
export type ChatUpdateLastViewedAtMutationFn = Apollo.MutationFunction<ChatUpdateLastViewedAtMutation, ChatUpdateLastViewedAtMutationVariables>;

/**
 * __useChatUpdateLastViewedAtMutation__
 *
 * To run a mutation, you first call `useChatUpdateLastViewedAtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChatUpdateLastViewedAtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [chatUpdateLastViewedAtMutation, { data, loading, error }] = useChatUpdateLastViewedAtMutation({
 *   variables: {
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useChatUpdateLastViewedAtMutation(baseOptions?: Apollo.MutationHookOptions<ChatUpdateLastViewedAtMutation, ChatUpdateLastViewedAtMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChatUpdateLastViewedAtMutation, ChatUpdateLastViewedAtMutationVariables>(ChatUpdateLastViewedAtDocument, options);
      }
export type ChatUpdateLastViewedAtMutationHookResult = ReturnType<typeof useChatUpdateLastViewedAtMutation>;
export type ChatUpdateLastViewedAtMutationResult = Apollo.MutationResult<ChatUpdateLastViewedAtMutation>;
export type ChatUpdateLastViewedAtMutationOptions = Apollo.BaseMutationOptions<ChatUpdateLastViewedAtMutation, ChatUpdateLastViewedAtMutationVariables>;
export const ChatGetChannelMemberDocument = gql`
    query ChatGetChannelMember($userId: uuid!, $channelId: uuid!) {
  channel_member(
    where: {channelId: {_eq: $channelId}, userId: {_eq: $userId}, deletedAt: {_is_null: true}}
  ) {
    id
  }
}
    `;

/**
 * __useChatGetChannelMemberQuery__
 *
 * To run a query within a React component, call `useChatGetChannelMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatGetChannelMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatGetChannelMemberQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useChatGetChannelMemberQuery(baseOptions: Apollo.QueryHookOptions<ChatGetChannelMemberQuery, ChatGetChannelMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatGetChannelMemberQuery, ChatGetChannelMemberQueryVariables>(ChatGetChannelMemberDocument, options);
      }
export function useChatGetChannelMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatGetChannelMemberQuery, ChatGetChannelMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatGetChannelMemberQuery, ChatGetChannelMemberQueryVariables>(ChatGetChannelMemberDocument, options);
        }
export type ChatGetChannelMemberQueryHookResult = ReturnType<typeof useChatGetChannelMemberQuery>;
export type ChatGetChannelMemberLazyQueryHookResult = ReturnType<typeof useChatGetChannelMemberLazyQuery>;
export type ChatGetChannelMemberQueryResult = Apollo.QueryResult<ChatGetChannelMemberQuery, ChatGetChannelMemberQueryVariables>;
export const ChatGetHeaderDataDocument = gql`
    query ChatGetHeaderData($channelId: uuid!) {
  channel: channel_by_pk(id: $channelId) {
    id
    name
  }
}
    `;

/**
 * __useChatGetHeaderDataQuery__
 *
 * To run a query within a React component, call `useChatGetHeaderDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatGetHeaderDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatGetHeaderDataQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useChatGetHeaderDataQuery(baseOptions: Apollo.QueryHookOptions<ChatGetHeaderDataQuery, ChatGetHeaderDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatGetHeaderDataQuery, ChatGetHeaderDataQueryVariables>(ChatGetHeaderDataDocument, options);
      }
export function useChatGetHeaderDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatGetHeaderDataQuery, ChatGetHeaderDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatGetHeaderDataQuery, ChatGetHeaderDataQueryVariables>(ChatGetHeaderDataDocument, options);
        }
export type ChatGetHeaderDataQueryHookResult = ReturnType<typeof useChatGetHeaderDataQuery>;
export type ChatGetHeaderDataLazyQueryHookResult = ReturnType<typeof useChatGetHeaderDataLazyQuery>;
export type ChatGetHeaderDataQueryResult = Apollo.QueryResult<ChatGetHeaderDataQuery, ChatGetHeaderDataQueryVariables>;
export const ChatInsertChannelPostDocument = gql`
    mutation ChatInsertChannelPost($message: String = "", $memberId: uuid!, $channelId: uuid!, $type: channel_post_type_enum = message) {
  post: insert_channel_post_one(
    object: {channelId: $channelId, memberId: $memberId, message: $message, type: $type}
  ) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export type ChatInsertChannelPostMutationFn = Apollo.MutationFunction<ChatInsertChannelPostMutation, ChatInsertChannelPostMutationVariables>;

/**
 * __useChatInsertChannelPostMutation__
 *
 * To run a mutation, you first call `useChatInsertChannelPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChatInsertChannelPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [chatInsertChannelPostMutation, { data, loading, error }] = useChatInsertChannelPostMutation({
 *   variables: {
 *      message: // value for 'message'
 *      memberId: // value for 'memberId'
 *      channelId: // value for 'channelId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useChatInsertChannelPostMutation(baseOptions?: Apollo.MutationHookOptions<ChatInsertChannelPostMutation, ChatInsertChannelPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChatInsertChannelPostMutation, ChatInsertChannelPostMutationVariables>(ChatInsertChannelPostDocument, options);
      }
export type ChatInsertChannelPostMutationHookResult = ReturnType<typeof useChatInsertChannelPostMutation>;
export type ChatInsertChannelPostMutationResult = Apollo.MutationResult<ChatInsertChannelPostMutation>;
export type ChatInsertChannelPostMutationOptions = Apollo.BaseMutationOptions<ChatInsertChannelPostMutation, ChatInsertChannelPostMutationVariables>;
export const FamGetChatInfoDocument = gql`
    query FamGetChatInfo($channelId: uuid!) {
  channel: channel_by_pk(id: $channelId) {
    id
    name
    description
    memberCount
    channelGroup: group_ {
      id
      imageUrl
      demonymPlural
    }
    channelFile {
      file {
        id
        path
        mimeType
      }
    }
    events(limit: 2, order_by: {createdAt: desc}) {
      id
    }
  }
}
    `;

/**
 * __useFamGetChatInfoQuery__
 *
 * To run a query within a React component, call `useFamGetChatInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetChatInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetChatInfoQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFamGetChatInfoQuery(baseOptions: Apollo.QueryHookOptions<FamGetChatInfoQuery, FamGetChatInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetChatInfoQuery, FamGetChatInfoQueryVariables>(FamGetChatInfoDocument, options);
      }
export function useFamGetChatInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetChatInfoQuery, FamGetChatInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetChatInfoQuery, FamGetChatInfoQueryVariables>(FamGetChatInfoDocument, options);
        }
export type FamGetChatInfoQueryHookResult = ReturnType<typeof useFamGetChatInfoQuery>;
export type FamGetChatInfoLazyQueryHookResult = ReturnType<typeof useFamGetChatInfoLazyQuery>;
export type FamGetChatInfoQueryResult = Apollo.QueryResult<FamGetChatInfoQuery, FamGetChatInfoQueryVariables>;
export const SideMenuRsvpForMeetupDocument = gql`
    mutation SideMenuRsvpForMeetup($userId: uuid!, $eventId: uuid!) {
  myRsvp: insert_event_rsvp_one(object: {eventId: $eventId, userId: $userId}) {
    id
  }
}
    `;
export type SideMenuRsvpForMeetupMutationFn = Apollo.MutationFunction<SideMenuRsvpForMeetupMutation, SideMenuRsvpForMeetupMutationVariables>;

/**
 * __useSideMenuRsvpForMeetupMutation__
 *
 * To run a mutation, you first call `useSideMenuRsvpForMeetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSideMenuRsvpForMeetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sideMenuRsvpForMeetupMutation, { data, loading, error }] = useSideMenuRsvpForMeetupMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useSideMenuRsvpForMeetupMutation(baseOptions?: Apollo.MutationHookOptions<SideMenuRsvpForMeetupMutation, SideMenuRsvpForMeetupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SideMenuRsvpForMeetupMutation, SideMenuRsvpForMeetupMutationVariables>(SideMenuRsvpForMeetupDocument, options);
      }
export type SideMenuRsvpForMeetupMutationHookResult = ReturnType<typeof useSideMenuRsvpForMeetupMutation>;
export type SideMenuRsvpForMeetupMutationResult = Apollo.MutationResult<SideMenuRsvpForMeetupMutation>;
export type SideMenuRsvpForMeetupMutationOptions = Apollo.BaseMutationOptions<SideMenuRsvpForMeetupMutation, SideMenuRsvpForMeetupMutationVariables>;
export const SideMenuDeleteRsvpDocument = gql`
    mutation SideMenuDeleteRsvp($rsvpId: uuid!) {
  myRsvp: delete_event_rsvp_by_pk(id: $rsvpId) {
    id
  }
}
    `;
export type SideMenuDeleteRsvpMutationFn = Apollo.MutationFunction<SideMenuDeleteRsvpMutation, SideMenuDeleteRsvpMutationVariables>;

/**
 * __useSideMenuDeleteRsvpMutation__
 *
 * To run a mutation, you first call `useSideMenuDeleteRsvpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSideMenuDeleteRsvpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sideMenuDeleteRsvpMutation, { data, loading, error }] = useSideMenuDeleteRsvpMutation({
 *   variables: {
 *      rsvpId: // value for 'rsvpId'
 *   },
 * });
 */
export function useSideMenuDeleteRsvpMutation(baseOptions?: Apollo.MutationHookOptions<SideMenuDeleteRsvpMutation, SideMenuDeleteRsvpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SideMenuDeleteRsvpMutation, SideMenuDeleteRsvpMutationVariables>(SideMenuDeleteRsvpDocument, options);
      }
export type SideMenuDeleteRsvpMutationHookResult = ReturnType<typeof useSideMenuDeleteRsvpMutation>;
export type SideMenuDeleteRsvpMutationResult = Apollo.MutationResult<SideMenuDeleteRsvpMutation>;
export type SideMenuDeleteRsvpMutationOptions = Apollo.BaseMutationOptions<SideMenuDeleteRsvpMutation, SideMenuDeleteRsvpMutationVariables>;
export const SideMenuGetMeetupDocument = gql`
    query SideMenuGetMeetup($eventId: uuid!) {
  event: event__by_pk(id: $eventId) {
    ...channelMeetup
  }
}
    ${ChannelMeetupFragmentDoc}`;

/**
 * __useSideMenuGetMeetupQuery__
 *
 * To run a query within a React component, call `useSideMenuGetMeetupQuery` and pass it any options that fit your needs.
 * When your component renders, `useSideMenuGetMeetupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSideMenuGetMeetupQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useSideMenuGetMeetupQuery(baseOptions: Apollo.QueryHookOptions<SideMenuGetMeetupQuery, SideMenuGetMeetupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SideMenuGetMeetupQuery, SideMenuGetMeetupQueryVariables>(SideMenuGetMeetupDocument, options);
      }
export function useSideMenuGetMeetupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SideMenuGetMeetupQuery, SideMenuGetMeetupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SideMenuGetMeetupQuery, SideMenuGetMeetupQueryVariables>(SideMenuGetMeetupDocument, options);
        }
export type SideMenuGetMeetupQueryHookResult = ReturnType<typeof useSideMenuGetMeetupQuery>;
export type SideMenuGetMeetupLazyQueryHookResult = ReturnType<typeof useSideMenuGetMeetupLazyQuery>;
export type SideMenuGetMeetupQueryResult = Apollo.QueryResult<SideMenuGetMeetupQuery, SideMenuGetMeetupQueryVariables>;
export const SideMenuGetMyMeetupRsvpDocument = gql`
    query SideMenuGetMyMeetupRsvp($userId: uuid!, $eventId: uuid!) {
  myRsvps: event_rsvp(where: {eventId: {_eq: $eventId}, userId: {_eq: $userId}}) {
    id
  }
}
    `;

/**
 * __useSideMenuGetMyMeetupRsvpQuery__
 *
 * To run a query within a React component, call `useSideMenuGetMyMeetupRsvpQuery` and pass it any options that fit your needs.
 * When your component renders, `useSideMenuGetMyMeetupRsvpQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSideMenuGetMyMeetupRsvpQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useSideMenuGetMyMeetupRsvpQuery(baseOptions: Apollo.QueryHookOptions<SideMenuGetMyMeetupRsvpQuery, SideMenuGetMyMeetupRsvpQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SideMenuGetMyMeetupRsvpQuery, SideMenuGetMyMeetupRsvpQueryVariables>(SideMenuGetMyMeetupRsvpDocument, options);
      }
export function useSideMenuGetMyMeetupRsvpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SideMenuGetMyMeetupRsvpQuery, SideMenuGetMyMeetupRsvpQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SideMenuGetMyMeetupRsvpQuery, SideMenuGetMyMeetupRsvpQueryVariables>(SideMenuGetMyMeetupRsvpDocument, options);
        }
export type SideMenuGetMyMeetupRsvpQueryHookResult = ReturnType<typeof useSideMenuGetMyMeetupRsvpQuery>;
export type SideMenuGetMyMeetupRsvpLazyQueryHookResult = ReturnType<typeof useSideMenuGetMyMeetupRsvpLazyQuery>;
export type SideMenuGetMyMeetupRsvpQueryResult = Apollo.QueryResult<SideMenuGetMyMeetupRsvpQuery, SideMenuGetMyMeetupRsvpQueryVariables>;
export const FamBarGetCircleListDocument = gql`
    query FamBarGetCircleList($alphaName: String!, $userId: uuid, $limit: Int!, $offset: Int!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    imageUrl
    channels(
      where: {private: {_eq: false}}
      order_by: {default: desc, members_aggregate: {count: desc}}
      limit: $limit
      offset: $offset
    ) {
      ...NavCircleListItem
    }
  }
}
    ${NavCircleListItemFragmentDoc}`;

/**
 * __useFamBarGetCircleListQuery__
 *
 * To run a query within a React component, call `useFamBarGetCircleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamBarGetCircleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamBarGetCircleListQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFamBarGetCircleListQuery(baseOptions: Apollo.QueryHookOptions<FamBarGetCircleListQuery, FamBarGetCircleListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamBarGetCircleListQuery, FamBarGetCircleListQueryVariables>(FamBarGetCircleListDocument, options);
      }
export function useFamBarGetCircleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamBarGetCircleListQuery, FamBarGetCircleListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamBarGetCircleListQuery, FamBarGetCircleListQueryVariables>(FamBarGetCircleListDocument, options);
        }
export type FamBarGetCircleListQueryHookResult = ReturnType<typeof useFamBarGetCircleListQuery>;
export type FamBarGetCircleListLazyQueryHookResult = ReturnType<typeof useFamBarGetCircleListLazyQuery>;
export type FamBarGetCircleListQueryResult = Apollo.QueryResult<FamBarGetCircleListQuery, FamBarGetCircleListQueryVariables>;
export const FamBarGetChannelMembershipsDocument = gql`
    query FamBarGetChannelMemberships($userId: uuid!, $alphaName: String!) {
  memberships: channel_member(
    where: {userId: {_eq: $userId}, deletedAt: {_is_null: true}, channel: {group_: {alphaName: {_eq: $alphaName}}}}
  ) {
    id
    channelId
  }
}
    `;

/**
 * __useFamBarGetChannelMembershipsQuery__
 *
 * To run a query within a React component, call `useFamBarGetChannelMembershipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamBarGetChannelMembershipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamBarGetChannelMembershipsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useFamBarGetChannelMembershipsQuery(baseOptions: Apollo.QueryHookOptions<FamBarGetChannelMembershipsQuery, FamBarGetChannelMembershipsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamBarGetChannelMembershipsQuery, FamBarGetChannelMembershipsQueryVariables>(FamBarGetChannelMembershipsDocument, options);
      }
export function useFamBarGetChannelMembershipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamBarGetChannelMembershipsQuery, FamBarGetChannelMembershipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamBarGetChannelMembershipsQuery, FamBarGetChannelMembershipsQueryVariables>(FamBarGetChannelMembershipsDocument, options);
        }
export type FamBarGetChannelMembershipsQueryHookResult = ReturnType<typeof useFamBarGetChannelMembershipsQuery>;
export type FamBarGetChannelMembershipsLazyQueryHookResult = ReturnType<typeof useFamBarGetChannelMembershipsLazyQuery>;
export type FamBarGetChannelMembershipsQueryResult = Apollo.QueryResult<FamBarGetChannelMembershipsQuery, FamBarGetChannelMembershipsQueryVariables>;
export const FamBarJoinChannelDocument = gql`
    mutation FamBarJoinChannel($channelId: uuid!, $userId: uuid!) {
  channelMember: insert_channel_member_one(
    object: {channelId: $channelId, userId: $userId, deletedAt: null}
    on_conflict: {constraint: channel_member_channel_id_user_id_key, update_columns: [deletedAt]}
  ) {
    id
  }
}
    `;
export type FamBarJoinChannelMutationFn = Apollo.MutationFunction<FamBarJoinChannelMutation, FamBarJoinChannelMutationVariables>;

/**
 * __useFamBarJoinChannelMutation__
 *
 * To run a mutation, you first call `useFamBarJoinChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFamBarJoinChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [famBarJoinChannelMutation, { data, loading, error }] = useFamBarJoinChannelMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFamBarJoinChannelMutation(baseOptions?: Apollo.MutationHookOptions<FamBarJoinChannelMutation, FamBarJoinChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FamBarJoinChannelMutation, FamBarJoinChannelMutationVariables>(FamBarJoinChannelDocument, options);
      }
export type FamBarJoinChannelMutationHookResult = ReturnType<typeof useFamBarJoinChannelMutation>;
export type FamBarJoinChannelMutationResult = Apollo.MutationResult<FamBarJoinChannelMutation>;
export type FamBarJoinChannelMutationOptions = Apollo.BaseMutationOptions<FamBarJoinChannelMutation, FamBarJoinChannelMutationVariables>;
export const FamBarGetGroupStatsDocument = gql`
    query FamBarGetGroupStats($alphaName: String!) {
  group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    users_aggregate {
      aggregate {
        count
      }
    }
    challengeGroup {
      id
      challenges_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}
    `;

/**
 * __useFamBarGetGroupStatsQuery__
 *
 * To run a query within a React component, call `useFamBarGetGroupStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamBarGetGroupStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamBarGetGroupStatsQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useFamBarGetGroupStatsQuery(baseOptions: Apollo.QueryHookOptions<FamBarGetGroupStatsQuery, FamBarGetGroupStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamBarGetGroupStatsQuery, FamBarGetGroupStatsQueryVariables>(FamBarGetGroupStatsDocument, options);
      }
export function useFamBarGetGroupStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamBarGetGroupStatsQuery, FamBarGetGroupStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamBarGetGroupStatsQuery, FamBarGetGroupStatsQueryVariables>(FamBarGetGroupStatsDocument, options);
        }
export type FamBarGetGroupStatsQueryHookResult = ReturnType<typeof useFamBarGetGroupStatsQuery>;
export type FamBarGetGroupStatsLazyQueryHookResult = ReturnType<typeof useFamBarGetGroupStatsLazyQuery>;
export type FamBarGetGroupStatsQueryResult = Apollo.QueryResult<FamBarGetGroupStatsQuery, FamBarGetGroupStatsQueryVariables>;
export const FamBarGetGroupJoinRequestStatusDocument = gql`
    query FamBarGetGroupJoinRequestStatus($userId: uuid!, $groupId: uuid!) {
  joinRequest: group_join_request(
    where: {userId: {_eq: $userId}, groupId: {_eq: $groupId}}
  ) {
    id
    status
  }
}
    `;

/**
 * __useFamBarGetGroupJoinRequestStatusQuery__
 *
 * To run a query within a React component, call `useFamBarGetGroupJoinRequestStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamBarGetGroupJoinRequestStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamBarGetGroupJoinRequestStatusQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useFamBarGetGroupJoinRequestStatusQuery(baseOptions: Apollo.QueryHookOptions<FamBarGetGroupJoinRequestStatusQuery, FamBarGetGroupJoinRequestStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamBarGetGroupJoinRequestStatusQuery, FamBarGetGroupJoinRequestStatusQueryVariables>(FamBarGetGroupJoinRequestStatusDocument, options);
      }
export function useFamBarGetGroupJoinRequestStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamBarGetGroupJoinRequestStatusQuery, FamBarGetGroupJoinRequestStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamBarGetGroupJoinRequestStatusQuery, FamBarGetGroupJoinRequestStatusQueryVariables>(FamBarGetGroupJoinRequestStatusDocument, options);
        }
export type FamBarGetGroupJoinRequestStatusQueryHookResult = ReturnType<typeof useFamBarGetGroupJoinRequestStatusQuery>;
export type FamBarGetGroupJoinRequestStatusLazyQueryHookResult = ReturnType<typeof useFamBarGetGroupJoinRequestStatusLazyQuery>;
export type FamBarGetGroupJoinRequestStatusQueryResult = Apollo.QueryResult<FamBarGetGroupJoinRequestStatusQuery, FamBarGetGroupJoinRequestStatusQueryVariables>;
export const FamBarLeaveGroupDocument = gql`
    mutation FamBarLeaveGroup($groupId: uuid!, $userId: uuid!) {
  channelMembers: update_channel_member(
    where: {_and: [{channel: {_and: [{groupId: {_eq: $groupId}}, {type: {_neq: direct}}]}}, {userId: {_eq: $userId}}]}
    _set: {deletedAt: "now()"}
  ) {
    returning {
      id
    }
  }
  joinRequests: delete_group_join_request(
    where: {groupId: {_eq: $groupId}, userId: {_eq: $userId}}
  ) {
    returning {
      id
    }
  }
  groupRoles: delete_group_role(
    where: {groupId: {_eq: $groupId}, userId: {_eq: $userId}}
  ) {
    returning {
      id
    }
  }
  userGroup: delete_user_group_by_pk(userId: $userId, groupId: $groupId) {
    userId
    groupId
    user: user_ {
      groups(order_by: {group: {name: asc}}, limit: 1) {
        group {
          id
        }
      }
    }
  }
}
    `;
export type FamBarLeaveGroupMutationFn = Apollo.MutationFunction<FamBarLeaveGroupMutation, FamBarLeaveGroupMutationVariables>;

/**
 * __useFamBarLeaveGroupMutation__
 *
 * To run a mutation, you first call `useFamBarLeaveGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFamBarLeaveGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [famBarLeaveGroupMutation, { data, loading, error }] = useFamBarLeaveGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFamBarLeaveGroupMutation(baseOptions?: Apollo.MutationHookOptions<FamBarLeaveGroupMutation, FamBarLeaveGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FamBarLeaveGroupMutation, FamBarLeaveGroupMutationVariables>(FamBarLeaveGroupDocument, options);
      }
export type FamBarLeaveGroupMutationHookResult = ReturnType<typeof useFamBarLeaveGroupMutation>;
export type FamBarLeaveGroupMutationResult = Apollo.MutationResult<FamBarLeaveGroupMutation>;
export type FamBarLeaveGroupMutationOptions = Apollo.BaseMutationOptions<FamBarLeaveGroupMutation, FamBarLeaveGroupMutationVariables>;
export const FamBarJoinGroupDocument = gql`
    mutation FamBarJoinGroup($groupId: uuid!, $userId: uuid!) {
  joinRequest: insert_group_join_request_one(
    object: {groupId: $groupId, userId: $userId, status: pending}
    on_conflict: {constraint: group_join_request_group_id_user_id_key, update_columns: status}
  ) {
    id
  }
}
    `;
export type FamBarJoinGroupMutationFn = Apollo.MutationFunction<FamBarJoinGroupMutation, FamBarJoinGroupMutationVariables>;

/**
 * __useFamBarJoinGroupMutation__
 *
 * To run a mutation, you first call `useFamBarJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFamBarJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [famBarJoinGroupMutation, { data, loading, error }] = useFamBarJoinGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFamBarJoinGroupMutation(baseOptions?: Apollo.MutationHookOptions<FamBarJoinGroupMutation, FamBarJoinGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FamBarJoinGroupMutation, FamBarJoinGroupMutationVariables>(FamBarJoinGroupDocument, options);
      }
export type FamBarJoinGroupMutationHookResult = ReturnType<typeof useFamBarJoinGroupMutation>;
export type FamBarJoinGroupMutationResult = Apollo.MutationResult<FamBarJoinGroupMutation>;
export type FamBarJoinGroupMutationOptions = Apollo.BaseMutationOptions<FamBarJoinGroupMutation, FamBarJoinGroupMutationVariables>;
export const CancelJoinGroupDocument = gql`
    mutation CancelJoinGroup($groupId: uuid!, $userId: uuid!) {
  joinRequests: delete_group_join_request(
    where: {groupId: {_eq: $groupId}, userId: {_eq: $userId}}
  ) {
    affected_rows
  }
}
    `;
export type CancelJoinGroupMutationFn = Apollo.MutationFunction<CancelJoinGroupMutation, CancelJoinGroupMutationVariables>;

/**
 * __useCancelJoinGroupMutation__
 *
 * To run a mutation, you first call `useCancelJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelJoinGroupMutation, { data, loading, error }] = useCancelJoinGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCancelJoinGroupMutation(baseOptions?: Apollo.MutationHookOptions<CancelJoinGroupMutation, CancelJoinGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelJoinGroupMutation, CancelJoinGroupMutationVariables>(CancelJoinGroupDocument, options);
      }
export type CancelJoinGroupMutationHookResult = ReturnType<typeof useCancelJoinGroupMutation>;
export type CancelJoinGroupMutationResult = Apollo.MutationResult<CancelJoinGroupMutation>;
export type CancelJoinGroupMutationOptions = Apollo.BaseMutationOptions<CancelJoinGroupMutation, CancelJoinGroupMutationVariables>;
export const FamBarGetGroupDocument = gql`
    query FamBarGetGroup($alphaName: String!) {
  group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    alphaName
    description
    imageUrl
    name
    userCount
    leader_ {
      id
      firstName
      lastName
      photos
    }
  }
}
    `;

/**
 * __useFamBarGetGroupQuery__
 *
 * To run a query within a React component, call `useFamBarGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamBarGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamBarGetGroupQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useFamBarGetGroupQuery(baseOptions: Apollo.QueryHookOptions<FamBarGetGroupQuery, FamBarGetGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamBarGetGroupQuery, FamBarGetGroupQueryVariables>(FamBarGetGroupDocument, options);
      }
export function useFamBarGetGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamBarGetGroupQuery, FamBarGetGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamBarGetGroupQuery, FamBarGetGroupQueryVariables>(FamBarGetGroupDocument, options);
        }
export type FamBarGetGroupQueryHookResult = ReturnType<typeof useFamBarGetGroupQuery>;
export type FamBarGetGroupLazyQueryHookResult = ReturnType<typeof useFamBarGetGroupLazyQuery>;
export type FamBarGetGroupQueryResult = Apollo.QueryResult<FamBarGetGroupQuery, FamBarGetGroupQueryVariables>;
export const NavGetUserGroupsDocument = gql`
    query NavGetUserGroups($userId: uuid!, $limit: Int!, $offset: Int!) {
  groups: user_group(
    where: {userId: {_eq: $userId}}
    limit: $limit
    offset: $offset
    order_by: {group: {name: asc}}
  ) {
    group {
      ...NavGroup
    }
  }
}
    ${NavGroupFragmentDoc}`;

/**
 * __useNavGetUserGroupsQuery__
 *
 * To run a query within a React component, call `useNavGetUserGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavGetUserGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavGetUserGroupsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useNavGetUserGroupsQuery(baseOptions: Apollo.QueryHookOptions<NavGetUserGroupsQuery, NavGetUserGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NavGetUserGroupsQuery, NavGetUserGroupsQueryVariables>(NavGetUserGroupsDocument, options);
      }
export function useNavGetUserGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavGetUserGroupsQuery, NavGetUserGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NavGetUserGroupsQuery, NavGetUserGroupsQueryVariables>(NavGetUserGroupsDocument, options);
        }
export type NavGetUserGroupsQueryHookResult = ReturnType<typeof useNavGetUserGroupsQuery>;
export type NavGetUserGroupsLazyQueryHookResult = ReturnType<typeof useNavGetUserGroupsLazyQuery>;
export type NavGetUserGroupsQueryResult = Apollo.QueryResult<NavGetUserGroupsQuery, NavGetUserGroupsQueryVariables>;
export const NavGetPendingUserGroupsDocument = gql`
    query NavGetPendingUserGroups($userId: uuid!) {
  pendingGroups: group_join_request(
    where: {userId: {_eq: $userId}, status: {_eq: pending}}
  ) {
    group {
      ...NavGroup
    }
  }
}
    ${NavGroupFragmentDoc}`;

/**
 * __useNavGetPendingUserGroupsQuery__
 *
 * To run a query within a React component, call `useNavGetPendingUserGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavGetPendingUserGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavGetPendingUserGroupsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useNavGetPendingUserGroupsQuery(baseOptions: Apollo.QueryHookOptions<NavGetPendingUserGroupsQuery, NavGetPendingUserGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NavGetPendingUserGroupsQuery, NavGetPendingUserGroupsQueryVariables>(NavGetPendingUserGroupsDocument, options);
      }
export function useNavGetPendingUserGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavGetPendingUserGroupsQuery, NavGetPendingUserGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NavGetPendingUserGroupsQuery, NavGetPendingUserGroupsQueryVariables>(NavGetPendingUserGroupsDocument, options);
        }
export type NavGetPendingUserGroupsQueryHookResult = ReturnType<typeof useNavGetPendingUserGroupsQuery>;
export type NavGetPendingUserGroupsLazyQueryHookResult = ReturnType<typeof useNavGetPendingUserGroupsLazyQuery>;
export type NavGetPendingUserGroupsQueryResult = Apollo.QueryResult<NavGetPendingUserGroupsQuery, NavGetPendingUserGroupsQueryVariables>;
export const NonMemberGetGroupJoinRequestStatusDocument = gql`
    query NonMemberGetGroupJoinRequestStatus($userId: uuid!, $groupId: uuid!) {
  joinRequest: group_join_request(
    where: {userId: {_eq: $userId}, groupId: {_eq: $groupId}}
  ) {
    id
    status
  }
}
    `;

/**
 * __useNonMemberGetGroupJoinRequestStatusQuery__
 *
 * To run a query within a React component, call `useNonMemberGetGroupJoinRequestStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonMemberGetGroupJoinRequestStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonMemberGetGroupJoinRequestStatusQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useNonMemberGetGroupJoinRequestStatusQuery(baseOptions: Apollo.QueryHookOptions<NonMemberGetGroupJoinRequestStatusQuery, NonMemberGetGroupJoinRequestStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NonMemberGetGroupJoinRequestStatusQuery, NonMemberGetGroupJoinRequestStatusQueryVariables>(NonMemberGetGroupJoinRequestStatusDocument, options);
      }
export function useNonMemberGetGroupJoinRequestStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NonMemberGetGroupJoinRequestStatusQuery, NonMemberGetGroupJoinRequestStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NonMemberGetGroupJoinRequestStatusQuery, NonMemberGetGroupJoinRequestStatusQueryVariables>(NonMemberGetGroupJoinRequestStatusDocument, options);
        }
export type NonMemberGetGroupJoinRequestStatusQueryHookResult = ReturnType<typeof useNonMemberGetGroupJoinRequestStatusQuery>;
export type NonMemberGetGroupJoinRequestStatusLazyQueryHookResult = ReturnType<typeof useNonMemberGetGroupJoinRequestStatusLazyQuery>;
export type NonMemberGetGroupJoinRequestStatusQueryResult = Apollo.QueryResult<NonMemberGetGroupJoinRequestStatusQuery, NonMemberGetGroupJoinRequestStatusQueryVariables>;
export const NonMemberGetGroupIdDocument = gql`
    query NonMemberGetGroupId($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
  }
}
    `;

/**
 * __useNonMemberGetGroupIdQuery__
 *
 * To run a query within a React component, call `useNonMemberGetGroupIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonMemberGetGroupIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonMemberGetGroupIdQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useNonMemberGetGroupIdQuery(baseOptions: Apollo.QueryHookOptions<NonMemberGetGroupIdQuery, NonMemberGetGroupIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NonMemberGetGroupIdQuery, NonMemberGetGroupIdQueryVariables>(NonMemberGetGroupIdDocument, options);
      }
export function useNonMemberGetGroupIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NonMemberGetGroupIdQuery, NonMemberGetGroupIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NonMemberGetGroupIdQuery, NonMemberGetGroupIdQueryVariables>(NonMemberGetGroupIdDocument, options);
        }
export type NonMemberGetGroupIdQueryHookResult = ReturnType<typeof useNonMemberGetGroupIdQuery>;
export type NonMemberGetGroupIdLazyQueryHookResult = ReturnType<typeof useNonMemberGetGroupIdLazyQuery>;
export type NonMemberGetGroupIdQueryResult = Apollo.QueryResult<NonMemberGetGroupIdQuery, NonMemberGetGroupIdQueryVariables>;
export const NonMemberJoinGroupDocument = gql`
    mutation NonMemberJoinGroup($groupId: uuid!, $userId: uuid!) {
  joinRequest: insert_group_join_request_one(
    object: {groupId: $groupId, userId: $userId, status: pending}
    on_conflict: {constraint: group_join_request_group_id_user_id_key, update_columns: status}
  ) {
    id
  }
}
    `;
export type NonMemberJoinGroupMutationFn = Apollo.MutationFunction<NonMemberJoinGroupMutation, NonMemberJoinGroupMutationVariables>;

/**
 * __useNonMemberJoinGroupMutation__
 *
 * To run a mutation, you first call `useNonMemberJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNonMemberJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [nonMemberJoinGroupMutation, { data, loading, error }] = useNonMemberJoinGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useNonMemberJoinGroupMutation(baseOptions?: Apollo.MutationHookOptions<NonMemberJoinGroupMutation, NonMemberJoinGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NonMemberJoinGroupMutation, NonMemberJoinGroupMutationVariables>(NonMemberJoinGroupDocument, options);
      }
export type NonMemberJoinGroupMutationHookResult = ReturnType<typeof useNonMemberJoinGroupMutation>;
export type NonMemberJoinGroupMutationResult = Apollo.MutationResult<NonMemberJoinGroupMutation>;
export type NonMemberJoinGroupMutationOptions = Apollo.BaseMutationOptions<NonMemberJoinGroupMutation, NonMemberJoinGroupMutationVariables>;
export const FamGetFirstChannelDocument = gql`
    query FamGetFirstChannel($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    channels(
      where: {private: {_eq: false}}
      order_by: {default: desc, members_aggregate: {count: desc}}
      limit: 1
    ) {
      id
    }
  }
}
    `;

/**
 * __useFamGetFirstChannelQuery__
 *
 * To run a query within a React component, call `useFamGetFirstChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamGetFirstChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamGetFirstChannelQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useFamGetFirstChannelQuery(baseOptions: Apollo.QueryHookOptions<FamGetFirstChannelQuery, FamGetFirstChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamGetFirstChannelQuery, FamGetFirstChannelQueryVariables>(FamGetFirstChannelDocument, options);
      }
export function useFamGetFirstChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamGetFirstChannelQuery, FamGetFirstChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamGetFirstChannelQuery, FamGetFirstChannelQueryVariables>(FamGetFirstChannelDocument, options);
        }
export type FamGetFirstChannelQueryHookResult = ReturnType<typeof useFamGetFirstChannelQuery>;
export type FamGetFirstChannelLazyQueryHookResult = ReturnType<typeof useFamGetFirstChannelLazyQuery>;
export type FamGetFirstChannelQueryResult = Apollo.QueryResult<FamGetFirstChannelQuery, FamGetFirstChannelQueryVariables>;
export const SettingsGetAnnouncementByIdDocument = gql`
    query SettingsGetAnnouncementById($uuid: uuid!) {
  announcement: announcement__by_pk(id: $uuid) {
    id
    name
    subtitle
    text
    channelId
    updatedAt
    createdAt
    files {
      file {
        id
        path
      }
    }
  }
}
    `;

/**
 * __useSettingsGetAnnouncementByIdQuery__
 *
 * To run a query within a React component, call `useSettingsGetAnnouncementByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetAnnouncementByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetAnnouncementByIdQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useSettingsGetAnnouncementByIdQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetAnnouncementByIdQuery, SettingsGetAnnouncementByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetAnnouncementByIdQuery, SettingsGetAnnouncementByIdQueryVariables>(SettingsGetAnnouncementByIdDocument, options);
      }
export function useSettingsGetAnnouncementByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetAnnouncementByIdQuery, SettingsGetAnnouncementByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetAnnouncementByIdQuery, SettingsGetAnnouncementByIdQueryVariables>(SettingsGetAnnouncementByIdDocument, options);
        }
export type SettingsGetAnnouncementByIdQueryHookResult = ReturnType<typeof useSettingsGetAnnouncementByIdQuery>;
export type SettingsGetAnnouncementByIdLazyQueryHookResult = ReturnType<typeof useSettingsGetAnnouncementByIdLazyQuery>;
export type SettingsGetAnnouncementByIdQueryResult = Apollo.QueryResult<SettingsGetAnnouncementByIdQuery, SettingsGetAnnouncementByIdQueryVariables>;
export const SettingsGetGroupByAlphaNameDocument = gql`
    query SettingsGetGroupByAlphaName($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
  }
}
    `;

/**
 * __useSettingsGetGroupByAlphaNameQuery__
 *
 * To run a query within a React component, call `useSettingsGetGroupByAlphaNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetGroupByAlphaNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetGroupByAlphaNameQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsGetGroupByAlphaNameQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetGroupByAlphaNameQuery, SettingsGetGroupByAlphaNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetGroupByAlphaNameQuery, SettingsGetGroupByAlphaNameQueryVariables>(SettingsGetGroupByAlphaNameDocument, options);
      }
export function useSettingsGetGroupByAlphaNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetGroupByAlphaNameQuery, SettingsGetGroupByAlphaNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetGroupByAlphaNameQuery, SettingsGetGroupByAlphaNameQueryVariables>(SettingsGetGroupByAlphaNameDocument, options);
        }
export type SettingsGetGroupByAlphaNameQueryHookResult = ReturnType<typeof useSettingsGetGroupByAlphaNameQuery>;
export type SettingsGetGroupByAlphaNameLazyQueryHookResult = ReturnType<typeof useSettingsGetGroupByAlphaNameLazyQuery>;
export type SettingsGetGroupByAlphaNameQueryResult = Apollo.QueryResult<SettingsGetGroupByAlphaNameQuery, SettingsGetGroupByAlphaNameQueryVariables>;
export const SettingsPinAnnouncementDocument = gql`
    mutation SettingsPinAnnouncement($groupId: uuid!, $announcementId: uuid!) {
  group: update_group__by_pk(
    pk_columns: {id: $groupId}
    _set: {pinnedAnnouncementId: $announcementId}
  ) {
    id
    pinnedAnnouncementId
  }
}
    `;
export type SettingsPinAnnouncementMutationFn = Apollo.MutationFunction<SettingsPinAnnouncementMutation, SettingsPinAnnouncementMutationVariables>;

/**
 * __useSettingsPinAnnouncementMutation__
 *
 * To run a mutation, you first call `useSettingsPinAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsPinAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsPinAnnouncementMutation, { data, loading, error }] = useSettingsPinAnnouncementMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      announcementId: // value for 'announcementId'
 *   },
 * });
 */
export function useSettingsPinAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<SettingsPinAnnouncementMutation, SettingsPinAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsPinAnnouncementMutation, SettingsPinAnnouncementMutationVariables>(SettingsPinAnnouncementDocument, options);
      }
export type SettingsPinAnnouncementMutationHookResult = ReturnType<typeof useSettingsPinAnnouncementMutation>;
export type SettingsPinAnnouncementMutationResult = Apollo.MutationResult<SettingsPinAnnouncementMutation>;
export type SettingsPinAnnouncementMutationOptions = Apollo.BaseMutationOptions<SettingsPinAnnouncementMutation, SettingsPinAnnouncementMutationVariables>;
export const SettingsUpdateAnnouncementDocument = gql`
    mutation SettingsUpdateAnnouncement($announcementId: uuid!, $data: announcement__set_input!, $fileId: uuid!, $fileData: file_set_input!) {
  file: update_file_by_pk(pk_columns: {id: $fileId}, _set: $fileData) {
    id
  }
  announcement: update_announcement__by_pk(
    pk_columns: {id: $announcementId}
    _set: $data
  ) {
    id
    name
    subtitle
    text
    files {
      file {
        id
        path
      }
    }
  }
}
    `;
export type SettingsUpdateAnnouncementMutationFn = Apollo.MutationFunction<SettingsUpdateAnnouncementMutation, SettingsUpdateAnnouncementMutationVariables>;

/**
 * __useSettingsUpdateAnnouncementMutation__
 *
 * To run a mutation, you first call `useSettingsUpdateAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsUpdateAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsUpdateAnnouncementMutation, { data, loading, error }] = useSettingsUpdateAnnouncementMutation({
 *   variables: {
 *      announcementId: // value for 'announcementId'
 *      data: // value for 'data'
 *      fileId: // value for 'fileId'
 *      fileData: // value for 'fileData'
 *   },
 * });
 */
export function useSettingsUpdateAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<SettingsUpdateAnnouncementMutation, SettingsUpdateAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsUpdateAnnouncementMutation, SettingsUpdateAnnouncementMutationVariables>(SettingsUpdateAnnouncementDocument, options);
      }
export type SettingsUpdateAnnouncementMutationHookResult = ReturnType<typeof useSettingsUpdateAnnouncementMutation>;
export type SettingsUpdateAnnouncementMutationResult = Apollo.MutationResult<SettingsUpdateAnnouncementMutation>;
export type SettingsUpdateAnnouncementMutationOptions = Apollo.BaseMutationOptions<SettingsUpdateAnnouncementMutation, SettingsUpdateAnnouncementMutationVariables>;
export const SettingsCreateAnnouncementDocument = gql`
    mutation SettingsCreateAnnouncement($data: announcement__insert_input!) {
  announcement: insert_announcement__one(object: $data) {
    id
  }
}
    `;
export type SettingsCreateAnnouncementMutationFn = Apollo.MutationFunction<SettingsCreateAnnouncementMutation, SettingsCreateAnnouncementMutationVariables>;

/**
 * __useSettingsCreateAnnouncementMutation__
 *
 * To run a mutation, you first call `useSettingsCreateAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsCreateAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsCreateAnnouncementMutation, { data, loading, error }] = useSettingsCreateAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSettingsCreateAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<SettingsCreateAnnouncementMutation, SettingsCreateAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsCreateAnnouncementMutation, SettingsCreateAnnouncementMutationVariables>(SettingsCreateAnnouncementDocument, options);
      }
export type SettingsCreateAnnouncementMutationHookResult = ReturnType<typeof useSettingsCreateAnnouncementMutation>;
export type SettingsCreateAnnouncementMutationResult = Apollo.MutationResult<SettingsCreateAnnouncementMutation>;
export type SettingsCreateAnnouncementMutationOptions = Apollo.BaseMutationOptions<SettingsCreateAnnouncementMutation, SettingsCreateAnnouncementMutationVariables>;
export const SettingsUnpinGroupAnnouncementDocument = gql`
    mutation SettingsUnpinGroupAnnouncement($groupId: uuid!) {
  group: update_group__by_pk(
    pk_columns: {id: $groupId}
    _set: {pinnedAnnouncementId: null}
  ) {
    id
  }
}
    `;
export type SettingsUnpinGroupAnnouncementMutationFn = Apollo.MutationFunction<SettingsUnpinGroupAnnouncementMutation, SettingsUnpinGroupAnnouncementMutationVariables>;

/**
 * __useSettingsUnpinGroupAnnouncementMutation__
 *
 * To run a mutation, you first call `useSettingsUnpinGroupAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsUnpinGroupAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsUnpinGroupAnnouncementMutation, { data, loading, error }] = useSettingsUnpinGroupAnnouncementMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useSettingsUnpinGroupAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<SettingsUnpinGroupAnnouncementMutation, SettingsUnpinGroupAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsUnpinGroupAnnouncementMutation, SettingsUnpinGroupAnnouncementMutationVariables>(SettingsUnpinGroupAnnouncementDocument, options);
      }
export type SettingsUnpinGroupAnnouncementMutationHookResult = ReturnType<typeof useSettingsUnpinGroupAnnouncementMutation>;
export type SettingsUnpinGroupAnnouncementMutationResult = Apollo.MutationResult<SettingsUnpinGroupAnnouncementMutation>;
export type SettingsUnpinGroupAnnouncementMutationOptions = Apollo.BaseMutationOptions<SettingsUnpinGroupAnnouncementMutation, SettingsUnpinGroupAnnouncementMutationVariables>;
export const SettingsGetGroupAnnouncementsDocument = gql`
    query SettingsGetGroupAnnouncements($alphaName: String!) {
  announcements: announcement_(
    where: {group: {alphaName: {_eq: $alphaName}}}
    order_by: {createdAt: desc}
    limit: 1000
  ) {
    ...SettingsAnnouncement
  }
}
    ${SettingsAnnouncementFragmentDoc}`;

/**
 * __useSettingsGetGroupAnnouncementsQuery__
 *
 * To run a query within a React component, call `useSettingsGetGroupAnnouncementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetGroupAnnouncementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetGroupAnnouncementsQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsGetGroupAnnouncementsQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetGroupAnnouncementsQuery, SettingsGetGroupAnnouncementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetGroupAnnouncementsQuery, SettingsGetGroupAnnouncementsQueryVariables>(SettingsGetGroupAnnouncementsDocument, options);
      }
export function useSettingsGetGroupAnnouncementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetGroupAnnouncementsQuery, SettingsGetGroupAnnouncementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetGroupAnnouncementsQuery, SettingsGetGroupAnnouncementsQueryVariables>(SettingsGetGroupAnnouncementsDocument, options);
        }
export type SettingsGetGroupAnnouncementsQueryHookResult = ReturnType<typeof useSettingsGetGroupAnnouncementsQuery>;
export type SettingsGetGroupAnnouncementsLazyQueryHookResult = ReturnType<typeof useSettingsGetGroupAnnouncementsLazyQuery>;
export type SettingsGetGroupAnnouncementsQueryResult = Apollo.QueryResult<SettingsGetGroupAnnouncementsQuery, SettingsGetGroupAnnouncementsQueryVariables>;
export const SettingsDeleteGroupAnnouncementsDocument = gql`
    mutation SettingsDeleteGroupAnnouncements($uuids: [uuid!]!) {
  delete_announcement_(where: {id: {_in: $uuids}}) {
    returning {
      id
    }
  }
}
    `;
export type SettingsDeleteGroupAnnouncementsMutationFn = Apollo.MutationFunction<SettingsDeleteGroupAnnouncementsMutation, SettingsDeleteGroupAnnouncementsMutationVariables>;

/**
 * __useSettingsDeleteGroupAnnouncementsMutation__
 *
 * To run a mutation, you first call `useSettingsDeleteGroupAnnouncementsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsDeleteGroupAnnouncementsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsDeleteGroupAnnouncementsMutation, { data, loading, error }] = useSettingsDeleteGroupAnnouncementsMutation({
 *   variables: {
 *      uuids: // value for 'uuids'
 *   },
 * });
 */
export function useSettingsDeleteGroupAnnouncementsMutation(baseOptions?: Apollo.MutationHookOptions<SettingsDeleteGroupAnnouncementsMutation, SettingsDeleteGroupAnnouncementsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsDeleteGroupAnnouncementsMutation, SettingsDeleteGroupAnnouncementsMutationVariables>(SettingsDeleteGroupAnnouncementsDocument, options);
      }
export type SettingsDeleteGroupAnnouncementsMutationHookResult = ReturnType<typeof useSettingsDeleteGroupAnnouncementsMutation>;
export type SettingsDeleteGroupAnnouncementsMutationResult = Apollo.MutationResult<SettingsDeleteGroupAnnouncementsMutation>;
export type SettingsDeleteGroupAnnouncementsMutationOptions = Apollo.BaseMutationOptions<SettingsDeleteGroupAnnouncementsMutation, SettingsDeleteGroupAnnouncementsMutationVariables>;
export const SettingsGetChallengeFilesDocument = gql`
    query SettingsGetChallengeFiles($id: uuid!) {
  challenge_by_pk(id: $id) {
    id
    title
    entries(order_by: {createdAt: asc}) {
      id
      text
      files {
        file {
          id
          name
          path
          mimeType
          extension
          height
          createdAt
          previewPath
          prismaId
          size
          thumbnailPath
          updatedAt
          width
        }
      }
      user: user_ {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

/**
 * __useSettingsGetChallengeFilesQuery__
 *
 * To run a query within a React component, call `useSettingsGetChallengeFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetChallengeFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetChallengeFilesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSettingsGetChallengeFilesQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetChallengeFilesQuery, SettingsGetChallengeFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetChallengeFilesQuery, SettingsGetChallengeFilesQueryVariables>(SettingsGetChallengeFilesDocument, options);
      }
export function useSettingsGetChallengeFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetChallengeFilesQuery, SettingsGetChallengeFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetChallengeFilesQuery, SettingsGetChallengeFilesQueryVariables>(SettingsGetChallengeFilesDocument, options);
        }
export type SettingsGetChallengeFilesQueryHookResult = ReturnType<typeof useSettingsGetChallengeFilesQuery>;
export type SettingsGetChallengeFilesLazyQueryHookResult = ReturnType<typeof useSettingsGetChallengeFilesLazyQuery>;
export type SettingsGetChallengeFilesQueryResult = Apollo.QueryResult<SettingsGetChallengeFilesQuery, SettingsGetChallengeFilesQueryVariables>;
export const SettingsGetGroupChallengeSeriesDocument = gql`
    query SettingsGetGroupChallengeSeries($alphaName: String!) {
  details: group_(where: {alphaName: {_eq: $alphaName}}) {
    challengeGroup {
      challenge_series(order_by: {createdAt: desc}) {
        id
        title
      }
    }
  }
}
    `;

/**
 * __useSettingsGetGroupChallengeSeriesQuery__
 *
 * To run a query within a React component, call `useSettingsGetGroupChallengeSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetGroupChallengeSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetGroupChallengeSeriesQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsGetGroupChallengeSeriesQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetGroupChallengeSeriesQuery, SettingsGetGroupChallengeSeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetGroupChallengeSeriesQuery, SettingsGetGroupChallengeSeriesQueryVariables>(SettingsGetGroupChallengeSeriesDocument, options);
      }
export function useSettingsGetGroupChallengeSeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetGroupChallengeSeriesQuery, SettingsGetGroupChallengeSeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetGroupChallengeSeriesQuery, SettingsGetGroupChallengeSeriesQueryVariables>(SettingsGetGroupChallengeSeriesDocument, options);
        }
export type SettingsGetGroupChallengeSeriesQueryHookResult = ReturnType<typeof useSettingsGetGroupChallengeSeriesQuery>;
export type SettingsGetGroupChallengeSeriesLazyQueryHookResult = ReturnType<typeof useSettingsGetGroupChallengeSeriesLazyQuery>;
export type SettingsGetGroupChallengeSeriesQueryResult = Apollo.QueryResult<SettingsGetGroupChallengeSeriesQuery, SettingsGetGroupChallengeSeriesQueryVariables>;
export const SettingsGetChallengeByIdDocument = gql`
    query SettingsGetChallengeById($uuid: uuid!) {
  challenge: challenge_by_pk(id: $uuid) {
    id
    title
    description
    prize
    createdAt
    endAt
    challenge_series_challenges {
      challengeSeriesId
    }
    files {
      file {
        id
        path
      }
    }
  }
}
    `;

/**
 * __useSettingsGetChallengeByIdQuery__
 *
 * To run a query within a React component, call `useSettingsGetChallengeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetChallengeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetChallengeByIdQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useSettingsGetChallengeByIdQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetChallengeByIdQuery, SettingsGetChallengeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetChallengeByIdQuery, SettingsGetChallengeByIdQueryVariables>(SettingsGetChallengeByIdDocument, options);
      }
export function useSettingsGetChallengeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetChallengeByIdQuery, SettingsGetChallengeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetChallengeByIdQuery, SettingsGetChallengeByIdQueryVariables>(SettingsGetChallengeByIdDocument, options);
        }
export type SettingsGetChallengeByIdQueryHookResult = ReturnType<typeof useSettingsGetChallengeByIdQuery>;
export type SettingsGetChallengeByIdLazyQueryHookResult = ReturnType<typeof useSettingsGetChallengeByIdLazyQuery>;
export type SettingsGetChallengeByIdQueryResult = Apollo.QueryResult<SettingsGetChallengeByIdQuery, SettingsGetChallengeByIdQueryVariables>;
export const SettingsChallengesGetChallengeGroupByAlphaNameDocument = gql`
    query SettingsChallengesGetChallengeGroupByAlphaName($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    challengeGroup {
      id
    }
  }
}
    `;

/**
 * __useSettingsChallengesGetChallengeGroupByAlphaNameQuery__
 *
 * To run a query within a React component, call `useSettingsChallengesGetChallengeGroupByAlphaNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsChallengesGetChallengeGroupByAlphaNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsChallengesGetChallengeGroupByAlphaNameQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsChallengesGetChallengeGroupByAlphaNameQuery(baseOptions: Apollo.QueryHookOptions<SettingsChallengesGetChallengeGroupByAlphaNameQuery, SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsChallengesGetChallengeGroupByAlphaNameQuery, SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables>(SettingsChallengesGetChallengeGroupByAlphaNameDocument, options);
      }
export function useSettingsChallengesGetChallengeGroupByAlphaNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsChallengesGetChallengeGroupByAlphaNameQuery, SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsChallengesGetChallengeGroupByAlphaNameQuery, SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables>(SettingsChallengesGetChallengeGroupByAlphaNameDocument, options);
        }
export type SettingsChallengesGetChallengeGroupByAlphaNameQueryHookResult = ReturnType<typeof useSettingsChallengesGetChallengeGroupByAlphaNameQuery>;
export type SettingsChallengesGetChallengeGroupByAlphaNameLazyQueryHookResult = ReturnType<typeof useSettingsChallengesGetChallengeGroupByAlphaNameLazyQuery>;
export type SettingsChallengesGetChallengeGroupByAlphaNameQueryResult = Apollo.QueryResult<SettingsChallengesGetChallengeGroupByAlphaNameQuery, SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables>;
export const SettingsDeleteChallengeDocument = gql`
    mutation SettingsDeleteChallenge($challengeId: uuid!) {
  delete_challenge_entry_comment(
    where: {entry: {challengeId: {_eq: $challengeId}}}
  ) {
    affected_rows
  }
  delete_challenge_entry_reaction(
    where: {entry: {challengeId: {_eq: $challengeId}}}
  ) {
    affected_rows
  }
  delete_challenge_entry_file(where: {entry: {challengeId: {_eq: $challengeId}}}) {
    affected_rows
  }
  delete_challenge_entry(where: {challengeId: {_eq: $challengeId}}) {
    affected_rows
  }
  delete_challenge_series_challenges(where: {challengeId: {_eq: $challengeId}}) {
    affected_rows
  }
  delete_challenge_file(where: {challengeId: {_eq: $challengeId}}) {
    affected_rows
  }
  delete_challenge_channel(where: {challengeId: {_eq: $challengeId}}) {
    affected_rows
  }
  delete_challenge_points(where: {challenge_id: {_eq: $challengeId}}) {
    affected_rows
  }
  challenge: delete_challenge_by_pk(id: $challengeId) {
    id
  }
}
    `;
export type SettingsDeleteChallengeMutationFn = Apollo.MutationFunction<SettingsDeleteChallengeMutation, SettingsDeleteChallengeMutationVariables>;

/**
 * __useSettingsDeleteChallengeMutation__
 *
 * To run a mutation, you first call `useSettingsDeleteChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsDeleteChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsDeleteChallengeMutation, { data, loading, error }] = useSettingsDeleteChallengeMutation({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *   },
 * });
 */
export function useSettingsDeleteChallengeMutation(baseOptions?: Apollo.MutationHookOptions<SettingsDeleteChallengeMutation, SettingsDeleteChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsDeleteChallengeMutation, SettingsDeleteChallengeMutationVariables>(SettingsDeleteChallengeDocument, options);
      }
export type SettingsDeleteChallengeMutationHookResult = ReturnType<typeof useSettingsDeleteChallengeMutation>;
export type SettingsDeleteChallengeMutationResult = Apollo.MutationResult<SettingsDeleteChallengeMutation>;
export type SettingsDeleteChallengeMutationOptions = Apollo.BaseMutationOptions<SettingsDeleteChallengeMutation, SettingsDeleteChallengeMutationVariables>;
export const SettingsCreateChallengeDocument = gql`
    mutation SettingsCreateChallenge($challengeGroupId: uuid!, $challengeSeriesId: uuid!, $description: String!, $title: String!, $prize: String!, $endAt: timestamptz!, $createChannel: Boolean = false, $fileData: file_insert_input!) {
  challenge: insert_challenge(
    objects: {challengeGroupId: $challengeGroupId, challenge_series_challenges: {data: {challengeSeriesId: $challengeSeriesId}}, endAt: $endAt, title: $title, prize: $prize, description: $description, createChannel: $createChannel, files: {data: {file: {data: $fileData}}, on_conflict: {constraint: challenge_file_challenge_id_key, update_columns: fileId}}}
    on_conflict: {constraint: challenge_pkey, update_columns: [description, title, prize, endAt]}
  ) {
    returning {
      id
    }
  }
}
    `;
export type SettingsCreateChallengeMutationFn = Apollo.MutationFunction<SettingsCreateChallengeMutation, SettingsCreateChallengeMutationVariables>;

/**
 * __useSettingsCreateChallengeMutation__
 *
 * To run a mutation, you first call `useSettingsCreateChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsCreateChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsCreateChallengeMutation, { data, loading, error }] = useSettingsCreateChallengeMutation({
 *   variables: {
 *      challengeGroupId: // value for 'challengeGroupId'
 *      challengeSeriesId: // value for 'challengeSeriesId'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      prize: // value for 'prize'
 *      endAt: // value for 'endAt'
 *      createChannel: // value for 'createChannel'
 *      fileData: // value for 'fileData'
 *   },
 * });
 */
export function useSettingsCreateChallengeMutation(baseOptions?: Apollo.MutationHookOptions<SettingsCreateChallengeMutation, SettingsCreateChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsCreateChallengeMutation, SettingsCreateChallengeMutationVariables>(SettingsCreateChallengeDocument, options);
      }
export type SettingsCreateChallengeMutationHookResult = ReturnType<typeof useSettingsCreateChallengeMutation>;
export type SettingsCreateChallengeMutationResult = Apollo.MutationResult<SettingsCreateChallengeMutation>;
export type SettingsCreateChallengeMutationOptions = Apollo.BaseMutationOptions<SettingsCreateChallengeMutation, SettingsCreateChallengeMutationVariables>;
export const SettingsCreateChallengeWithoutSeriesDocument = gql`
    mutation SettingsCreateChallengeWithoutSeries($challengeGroupId: uuid!, $description: String!, $title: String!, $prize: String!, $endAt: timestamptz!, $createChannel: Boolean = false, $fileData: file_insert_input!) {
  challenge: insert_challenge(
    objects: {challengeGroupId: $challengeGroupId, endAt: $endAt, title: $title, prize: $prize, description: $description, createChannel: $createChannel, files: {data: {file: {data: $fileData}}, on_conflict: {constraint: challenge_file_challenge_id_key, update_columns: fileId}}}
    on_conflict: {constraint: challenge_pkey, update_columns: [description, title, prize, endAt]}
  ) {
    returning {
      id
    }
  }
}
    `;
export type SettingsCreateChallengeWithoutSeriesMutationFn = Apollo.MutationFunction<SettingsCreateChallengeWithoutSeriesMutation, SettingsCreateChallengeWithoutSeriesMutationVariables>;

/**
 * __useSettingsCreateChallengeWithoutSeriesMutation__
 *
 * To run a mutation, you first call `useSettingsCreateChallengeWithoutSeriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsCreateChallengeWithoutSeriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsCreateChallengeWithoutSeriesMutation, { data, loading, error }] = useSettingsCreateChallengeWithoutSeriesMutation({
 *   variables: {
 *      challengeGroupId: // value for 'challengeGroupId'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      prize: // value for 'prize'
 *      endAt: // value for 'endAt'
 *      createChannel: // value for 'createChannel'
 *      fileData: // value for 'fileData'
 *   },
 * });
 */
export function useSettingsCreateChallengeWithoutSeriesMutation(baseOptions?: Apollo.MutationHookOptions<SettingsCreateChallengeWithoutSeriesMutation, SettingsCreateChallengeWithoutSeriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsCreateChallengeWithoutSeriesMutation, SettingsCreateChallengeWithoutSeriesMutationVariables>(SettingsCreateChallengeWithoutSeriesDocument, options);
      }
export type SettingsCreateChallengeWithoutSeriesMutationHookResult = ReturnType<typeof useSettingsCreateChallengeWithoutSeriesMutation>;
export type SettingsCreateChallengeWithoutSeriesMutationResult = Apollo.MutationResult<SettingsCreateChallengeWithoutSeriesMutation>;
export type SettingsCreateChallengeWithoutSeriesMutationOptions = Apollo.BaseMutationOptions<SettingsCreateChallengeWithoutSeriesMutation, SettingsCreateChallengeWithoutSeriesMutationVariables>;
export const SettingsUpdateChallengeDocument = gql`
    mutation SettingsUpdateChallenge($challengeId: uuid!, $title: String!, $description: String!, $prize: String!, $endAt: timestamptz!, $fileId: uuid!, $fileData: file_set_input!) {
  challengeSeries: update_challenge_by_pk(
    pk_columns: {id: $challengeId}
    _set: {title: $title, description: $description, prize: $prize, endAt: $endAt}
  ) {
    id
    description
    title
    prize
    endAt
  }
  file: update_file_by_pk(pk_columns: {id: $fileId}, _set: $fileData) {
    id
  }
}
    `;
export type SettingsUpdateChallengeMutationFn = Apollo.MutationFunction<SettingsUpdateChallengeMutation, SettingsUpdateChallengeMutationVariables>;

/**
 * __useSettingsUpdateChallengeMutation__
 *
 * To run a mutation, you first call `useSettingsUpdateChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsUpdateChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsUpdateChallengeMutation, { data, loading, error }] = useSettingsUpdateChallengeMutation({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      prize: // value for 'prize'
 *      endAt: // value for 'endAt'
 *      fileId: // value for 'fileId'
 *      fileData: // value for 'fileData'
 *   },
 * });
 */
export function useSettingsUpdateChallengeMutation(baseOptions?: Apollo.MutationHookOptions<SettingsUpdateChallengeMutation, SettingsUpdateChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsUpdateChallengeMutation, SettingsUpdateChallengeMutationVariables>(SettingsUpdateChallengeDocument, options);
      }
export type SettingsUpdateChallengeMutationHookResult = ReturnType<typeof useSettingsUpdateChallengeMutation>;
export type SettingsUpdateChallengeMutationResult = Apollo.MutationResult<SettingsUpdateChallengeMutation>;
export type SettingsUpdateChallengeMutationOptions = Apollo.BaseMutationOptions<SettingsUpdateChallengeMutation, SettingsUpdateChallengeMutationVariables>;
export const SettingsUpdateChallengeSeriesIdDocument = gql`
    mutation SettingsUpdateChallengeSeriesId($challengeId: uuid!, $challengeSeriesId: uuid!, $newChallengeSeriesId: uuid) {
  update_challenge_series_challenges(
    where: {challengeId: {_eq: $challengeId}, challengeSeriesId: {_eq: $challengeSeriesId}}
    _set: {challengeSeriesId: $newChallengeSeriesId}
  ) {
    returning {
      challenge {
        id
        challenge_series_challenges {
          challengeSeriesId
        }
      }
    }
  }
}
    `;
export type SettingsUpdateChallengeSeriesIdMutationFn = Apollo.MutationFunction<SettingsUpdateChallengeSeriesIdMutation, SettingsUpdateChallengeSeriesIdMutationVariables>;

/**
 * __useSettingsUpdateChallengeSeriesIdMutation__
 *
 * To run a mutation, you first call `useSettingsUpdateChallengeSeriesIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsUpdateChallengeSeriesIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsUpdateChallengeSeriesIdMutation, { data, loading, error }] = useSettingsUpdateChallengeSeriesIdMutation({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *      challengeSeriesId: // value for 'challengeSeriesId'
 *      newChallengeSeriesId: // value for 'newChallengeSeriesId'
 *   },
 * });
 */
export function useSettingsUpdateChallengeSeriesIdMutation(baseOptions?: Apollo.MutationHookOptions<SettingsUpdateChallengeSeriesIdMutation, SettingsUpdateChallengeSeriesIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsUpdateChallengeSeriesIdMutation, SettingsUpdateChallengeSeriesIdMutationVariables>(SettingsUpdateChallengeSeriesIdDocument, options);
      }
export type SettingsUpdateChallengeSeriesIdMutationHookResult = ReturnType<typeof useSettingsUpdateChallengeSeriesIdMutation>;
export type SettingsUpdateChallengeSeriesIdMutationResult = Apollo.MutationResult<SettingsUpdateChallengeSeriesIdMutation>;
export type SettingsUpdateChallengeSeriesIdMutationOptions = Apollo.BaseMutationOptions<SettingsUpdateChallengeSeriesIdMutation, SettingsUpdateChallengeSeriesIdMutationVariables>;
export const SettingsCreateChallengeSeriesIdDocument = gql`
    mutation SettingsCreateChallengeSeriesId($challengeId: uuid!, $newChallengeSeriesId: uuid!) {
  insert_challenge_series_challenges(
    objects: {challengeId: $challengeId, challengeSeriesId: $newChallengeSeriesId}
  ) {
    returning {
      challenge {
        id
        challenge_series_challenges {
          challengeSeriesId
        }
      }
    }
  }
}
    `;
export type SettingsCreateChallengeSeriesIdMutationFn = Apollo.MutationFunction<SettingsCreateChallengeSeriesIdMutation, SettingsCreateChallengeSeriesIdMutationVariables>;

/**
 * __useSettingsCreateChallengeSeriesIdMutation__
 *
 * To run a mutation, you first call `useSettingsCreateChallengeSeriesIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsCreateChallengeSeriesIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsCreateChallengeSeriesIdMutation, { data, loading, error }] = useSettingsCreateChallengeSeriesIdMutation({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *      newChallengeSeriesId: // value for 'newChallengeSeriesId'
 *   },
 * });
 */
export function useSettingsCreateChallengeSeriesIdMutation(baseOptions?: Apollo.MutationHookOptions<SettingsCreateChallengeSeriesIdMutation, SettingsCreateChallengeSeriesIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsCreateChallengeSeriesIdMutation, SettingsCreateChallengeSeriesIdMutationVariables>(SettingsCreateChallengeSeriesIdDocument, options);
      }
export type SettingsCreateChallengeSeriesIdMutationHookResult = ReturnType<typeof useSettingsCreateChallengeSeriesIdMutation>;
export type SettingsCreateChallengeSeriesIdMutationResult = Apollo.MutationResult<SettingsCreateChallengeSeriesIdMutation>;
export type SettingsCreateChallengeSeriesIdMutationOptions = Apollo.BaseMutationOptions<SettingsCreateChallengeSeriesIdMutation, SettingsCreateChallengeSeriesIdMutationVariables>;
export const SettingsDeleteChallengeSeriesIdDocument = gql`
    mutation SettingsDeleteChallengeSeriesId($challengeId: uuid!, $challengeSeriesId: uuid!) {
  delete_challenge_series_challenges(
    where: {challengeId: {_eq: $challengeId}, challengeSeriesId: {_eq: $challengeSeriesId}}
  ) {
    affected_rows
  }
}
    `;
export type SettingsDeleteChallengeSeriesIdMutationFn = Apollo.MutationFunction<SettingsDeleteChallengeSeriesIdMutation, SettingsDeleteChallengeSeriesIdMutationVariables>;

/**
 * __useSettingsDeleteChallengeSeriesIdMutation__
 *
 * To run a mutation, you first call `useSettingsDeleteChallengeSeriesIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsDeleteChallengeSeriesIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsDeleteChallengeSeriesIdMutation, { data, loading, error }] = useSettingsDeleteChallengeSeriesIdMutation({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *      challengeSeriesId: // value for 'challengeSeriesId'
 *   },
 * });
 */
export function useSettingsDeleteChallengeSeriesIdMutation(baseOptions?: Apollo.MutationHookOptions<SettingsDeleteChallengeSeriesIdMutation, SettingsDeleteChallengeSeriesIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsDeleteChallengeSeriesIdMutation, SettingsDeleteChallengeSeriesIdMutationVariables>(SettingsDeleteChallengeSeriesIdDocument, options);
      }
export type SettingsDeleteChallengeSeriesIdMutationHookResult = ReturnType<typeof useSettingsDeleteChallengeSeriesIdMutation>;
export type SettingsDeleteChallengeSeriesIdMutationResult = Apollo.MutationResult<SettingsDeleteChallengeSeriesIdMutation>;
export type SettingsDeleteChallengeSeriesIdMutationOptions = Apollo.BaseMutationOptions<SettingsDeleteChallengeSeriesIdMutation, SettingsDeleteChallengeSeriesIdMutationVariables>;
export const SettingsGetChallengeSeriesByIdDocument = gql`
    query SettingsGetChallengeSeriesById($uuid: uuid!) {
  challengeSeries: challenge_series_by_pk(id: $uuid) {
    id
    title
    description
  }
}
    `;

/**
 * __useSettingsGetChallengeSeriesByIdQuery__
 *
 * To run a query within a React component, call `useSettingsGetChallengeSeriesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetChallengeSeriesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetChallengeSeriesByIdQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useSettingsGetChallengeSeriesByIdQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetChallengeSeriesByIdQuery, SettingsGetChallengeSeriesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetChallengeSeriesByIdQuery, SettingsGetChallengeSeriesByIdQueryVariables>(SettingsGetChallengeSeriesByIdDocument, options);
      }
export function useSettingsGetChallengeSeriesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetChallengeSeriesByIdQuery, SettingsGetChallengeSeriesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetChallengeSeriesByIdQuery, SettingsGetChallengeSeriesByIdQueryVariables>(SettingsGetChallengeSeriesByIdDocument, options);
        }
export type SettingsGetChallengeSeriesByIdQueryHookResult = ReturnType<typeof useSettingsGetChallengeSeriesByIdQuery>;
export type SettingsGetChallengeSeriesByIdLazyQueryHookResult = ReturnType<typeof useSettingsGetChallengeSeriesByIdLazyQuery>;
export type SettingsGetChallengeSeriesByIdQueryResult = Apollo.QueryResult<SettingsGetChallengeSeriesByIdQuery, SettingsGetChallengeSeriesByIdQueryVariables>;
export const SettingsGetChallengeGroupByAlphaNameDocument = gql`
    query SettingsGetChallengeGroupByAlphaName($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    challengeGroup {
      id
    }
  }
}
    `;

/**
 * __useSettingsGetChallengeGroupByAlphaNameQuery__
 *
 * To run a query within a React component, call `useSettingsGetChallengeGroupByAlphaNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetChallengeGroupByAlphaNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetChallengeGroupByAlphaNameQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsGetChallengeGroupByAlphaNameQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetChallengeGroupByAlphaNameQuery, SettingsGetChallengeGroupByAlphaNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetChallengeGroupByAlphaNameQuery, SettingsGetChallengeGroupByAlphaNameQueryVariables>(SettingsGetChallengeGroupByAlphaNameDocument, options);
      }
export function useSettingsGetChallengeGroupByAlphaNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetChallengeGroupByAlphaNameQuery, SettingsGetChallengeGroupByAlphaNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetChallengeGroupByAlphaNameQuery, SettingsGetChallengeGroupByAlphaNameQueryVariables>(SettingsGetChallengeGroupByAlphaNameDocument, options);
        }
export type SettingsGetChallengeGroupByAlphaNameQueryHookResult = ReturnType<typeof useSettingsGetChallengeGroupByAlphaNameQuery>;
export type SettingsGetChallengeGroupByAlphaNameLazyQueryHookResult = ReturnType<typeof useSettingsGetChallengeGroupByAlphaNameLazyQuery>;
export type SettingsGetChallengeGroupByAlphaNameQueryResult = Apollo.QueryResult<SettingsGetChallengeGroupByAlphaNameQuery, SettingsGetChallengeGroupByAlphaNameQueryVariables>;
export const SettingsUpdateChallengeSeriesDocument = gql`
    mutation SettingsUpdateChallengeSeries($id: uuid!, $title: String!, $description: String!) {
  challengeSeries: update_challenge_series_by_pk(
    pk_columns: {id: $id}
    _set: {title: $title, description: $description}
  ) {
    id
    description
    title
  }
}
    `;
export type SettingsUpdateChallengeSeriesMutationFn = Apollo.MutationFunction<SettingsUpdateChallengeSeriesMutation, SettingsUpdateChallengeSeriesMutationVariables>;

/**
 * __useSettingsUpdateChallengeSeriesMutation__
 *
 * To run a mutation, you first call `useSettingsUpdateChallengeSeriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsUpdateChallengeSeriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsUpdateChallengeSeriesMutation, { data, loading, error }] = useSettingsUpdateChallengeSeriesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useSettingsUpdateChallengeSeriesMutation(baseOptions?: Apollo.MutationHookOptions<SettingsUpdateChallengeSeriesMutation, SettingsUpdateChallengeSeriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsUpdateChallengeSeriesMutation, SettingsUpdateChallengeSeriesMutationVariables>(SettingsUpdateChallengeSeriesDocument, options);
      }
export type SettingsUpdateChallengeSeriesMutationHookResult = ReturnType<typeof useSettingsUpdateChallengeSeriesMutation>;
export type SettingsUpdateChallengeSeriesMutationResult = Apollo.MutationResult<SettingsUpdateChallengeSeriesMutation>;
export type SettingsUpdateChallengeSeriesMutationOptions = Apollo.BaseMutationOptions<SettingsUpdateChallengeSeriesMutation, SettingsUpdateChallengeSeriesMutationVariables>;
export const SettingsCreateChallengeSeriesDocument = gql`
    mutation SettingsCreateChallengeSeries($challengeGroupId: uuid!, $description: String!, $title: String!) {
  challengeSeries: insert_challenge_series(
    objects: {challengeGroupId: $challengeGroupId, description: $description, title: $title}
  ) {
    returning {
      id
    }
  }
}
    `;
export type SettingsCreateChallengeSeriesMutationFn = Apollo.MutationFunction<SettingsCreateChallengeSeriesMutation, SettingsCreateChallengeSeriesMutationVariables>;

/**
 * __useSettingsCreateChallengeSeriesMutation__
 *
 * To run a mutation, you first call `useSettingsCreateChallengeSeriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsCreateChallengeSeriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsCreateChallengeSeriesMutation, { data, loading, error }] = useSettingsCreateChallengeSeriesMutation({
 *   variables: {
 *      challengeGroupId: // value for 'challengeGroupId'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSettingsCreateChallengeSeriesMutation(baseOptions?: Apollo.MutationHookOptions<SettingsCreateChallengeSeriesMutation, SettingsCreateChallengeSeriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsCreateChallengeSeriesMutation, SettingsCreateChallengeSeriesMutationVariables>(SettingsCreateChallengeSeriesDocument, options);
      }
export type SettingsCreateChallengeSeriesMutationHookResult = ReturnType<typeof useSettingsCreateChallengeSeriesMutation>;
export type SettingsCreateChallengeSeriesMutationResult = Apollo.MutationResult<SettingsCreateChallengeSeriesMutation>;
export type SettingsCreateChallengeSeriesMutationOptions = Apollo.BaseMutationOptions<SettingsCreateChallengeSeriesMutation, SettingsCreateChallengeSeriesMutationVariables>;
export const SettingsGetGroupChallengesDocument = gql`
    query SettingsGetGroupChallenges($alphaName: String!) {
  details: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    challengeGroup {
      id
      challenges(order_by: {endAt: desc}) {
        ...SettingsChallenge
      }
      challenge_series(order_by: {createdAt: desc}) {
        ...SettingsChallengeSeries
      }
    }
  }
}
    ${SettingsChallengeFragmentDoc}
${SettingsChallengeSeriesFragmentDoc}`;

/**
 * __useSettingsGetGroupChallengesQuery__
 *
 * To run a query within a React component, call `useSettingsGetGroupChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetGroupChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetGroupChallengesQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsGetGroupChallengesQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetGroupChallengesQuery, SettingsGetGroupChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetGroupChallengesQuery, SettingsGetGroupChallengesQueryVariables>(SettingsGetGroupChallengesDocument, options);
      }
export function useSettingsGetGroupChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetGroupChallengesQuery, SettingsGetGroupChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetGroupChallengesQuery, SettingsGetGroupChallengesQueryVariables>(SettingsGetGroupChallengesDocument, options);
        }
export type SettingsGetGroupChallengesQueryHookResult = ReturnType<typeof useSettingsGetGroupChallengesQuery>;
export type SettingsGetGroupChallengesLazyQueryHookResult = ReturnType<typeof useSettingsGetGroupChallengesLazyQuery>;
export type SettingsGetGroupChallengesQueryResult = Apollo.QueryResult<SettingsGetGroupChallengesQuery, SettingsGetGroupChallengesQueryVariables>;
export const SettingsGetChannelByIdDocument = gql`
    query SettingsGetChannelById($uuid: uuid!) {
  channel: channel_by_pk(id: $uuid) {
    id
    name
    description
    private
    default
    files {
      file {
        id
        path
      }
    }
  }
}
    `;

/**
 * __useSettingsGetChannelByIdQuery__
 *
 * To run a query within a React component, call `useSettingsGetChannelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetChannelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetChannelByIdQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useSettingsGetChannelByIdQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetChannelByIdQuery, SettingsGetChannelByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetChannelByIdQuery, SettingsGetChannelByIdQueryVariables>(SettingsGetChannelByIdDocument, options);
      }
export function useSettingsGetChannelByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetChannelByIdQuery, SettingsGetChannelByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetChannelByIdQuery, SettingsGetChannelByIdQueryVariables>(SettingsGetChannelByIdDocument, options);
        }
export type SettingsGetChannelByIdQueryHookResult = ReturnType<typeof useSettingsGetChannelByIdQuery>;
export type SettingsGetChannelByIdLazyQueryHookResult = ReturnType<typeof useSettingsGetChannelByIdLazyQuery>;
export type SettingsGetChannelByIdQueryResult = Apollo.QueryResult<SettingsGetChannelByIdQuery, SettingsGetChannelByIdQueryVariables>;
export const SettingsChannelGetGroupByAlphaNameDocument = gql`
    query SettingsChannelGetGroupByAlphaName($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
  }
}
    `;

/**
 * __useSettingsChannelGetGroupByAlphaNameQuery__
 *
 * To run a query within a React component, call `useSettingsChannelGetGroupByAlphaNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsChannelGetGroupByAlphaNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsChannelGetGroupByAlphaNameQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsChannelGetGroupByAlphaNameQuery(baseOptions: Apollo.QueryHookOptions<SettingsChannelGetGroupByAlphaNameQuery, SettingsChannelGetGroupByAlphaNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsChannelGetGroupByAlphaNameQuery, SettingsChannelGetGroupByAlphaNameQueryVariables>(SettingsChannelGetGroupByAlphaNameDocument, options);
      }
export function useSettingsChannelGetGroupByAlphaNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsChannelGetGroupByAlphaNameQuery, SettingsChannelGetGroupByAlphaNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsChannelGetGroupByAlphaNameQuery, SettingsChannelGetGroupByAlphaNameQueryVariables>(SettingsChannelGetGroupByAlphaNameDocument, options);
        }
export type SettingsChannelGetGroupByAlphaNameQueryHookResult = ReturnType<typeof useSettingsChannelGetGroupByAlphaNameQuery>;
export type SettingsChannelGetGroupByAlphaNameLazyQueryHookResult = ReturnType<typeof useSettingsChannelGetGroupByAlphaNameLazyQuery>;
export type SettingsChannelGetGroupByAlphaNameQueryResult = Apollo.QueryResult<SettingsChannelGetGroupByAlphaNameQuery, SettingsChannelGetGroupByAlphaNameQueryVariables>;
export const SettingsChannelCreateChannelDocument = gql`
    mutation SettingsChannelCreateChannel($data: channel_insert_input!) {
  channel: insert_channel_one(object: $data) {
    id
  }
}
    `;
export type SettingsChannelCreateChannelMutationFn = Apollo.MutationFunction<SettingsChannelCreateChannelMutation, SettingsChannelCreateChannelMutationVariables>;

/**
 * __useSettingsChannelCreateChannelMutation__
 *
 * To run a mutation, you first call `useSettingsChannelCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsChannelCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsChannelCreateChannelMutation, { data, loading, error }] = useSettingsChannelCreateChannelMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSettingsChannelCreateChannelMutation(baseOptions?: Apollo.MutationHookOptions<SettingsChannelCreateChannelMutation, SettingsChannelCreateChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsChannelCreateChannelMutation, SettingsChannelCreateChannelMutationVariables>(SettingsChannelCreateChannelDocument, options);
      }
export type SettingsChannelCreateChannelMutationHookResult = ReturnType<typeof useSettingsChannelCreateChannelMutation>;
export type SettingsChannelCreateChannelMutationResult = Apollo.MutationResult<SettingsChannelCreateChannelMutation>;
export type SettingsChannelCreateChannelMutationOptions = Apollo.BaseMutationOptions<SettingsChannelCreateChannelMutation, SettingsChannelCreateChannelMutationVariables>;
export const SettingsChannelUpdateChannelDocument = gql`
    mutation SettingsChannelUpdateChannel($channelId: uuid!, $data: channel_set_input!) {
  channel: update_channel_by_pk(pk_columns: {id: $channelId}, _set: $data) {
    id
    name
    description
    private
    default
    files {
      file {
        id
        path
      }
    }
  }
}
    `;
export type SettingsChannelUpdateChannelMutationFn = Apollo.MutationFunction<SettingsChannelUpdateChannelMutation, SettingsChannelUpdateChannelMutationVariables>;

/**
 * __useSettingsChannelUpdateChannelMutation__
 *
 * To run a mutation, you first call `useSettingsChannelUpdateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsChannelUpdateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsChannelUpdateChannelMutation, { data, loading, error }] = useSettingsChannelUpdateChannelMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSettingsChannelUpdateChannelMutation(baseOptions?: Apollo.MutationHookOptions<SettingsChannelUpdateChannelMutation, SettingsChannelUpdateChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsChannelUpdateChannelMutation, SettingsChannelUpdateChannelMutationVariables>(SettingsChannelUpdateChannelDocument, options);
      }
export type SettingsChannelUpdateChannelMutationHookResult = ReturnType<typeof useSettingsChannelUpdateChannelMutation>;
export type SettingsChannelUpdateChannelMutationResult = Apollo.MutationResult<SettingsChannelUpdateChannelMutation>;
export type SettingsChannelUpdateChannelMutationOptions = Apollo.BaseMutationOptions<SettingsChannelUpdateChannelMutation, SettingsChannelUpdateChannelMutationVariables>;
export const SettingsChannelCreateChannelFileDocument = gql`
    mutation SettingsChannelCreateChannelFile($file: file_insert_input!) {
  file: insert_file_one(object: $file) {
    id
    path
  }
}
    `;
export type SettingsChannelCreateChannelFileMutationFn = Apollo.MutationFunction<SettingsChannelCreateChannelFileMutation, SettingsChannelCreateChannelFileMutationVariables>;

/**
 * __useSettingsChannelCreateChannelFileMutation__
 *
 * To run a mutation, you first call `useSettingsChannelCreateChannelFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsChannelCreateChannelFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsChannelCreateChannelFileMutation, { data, loading, error }] = useSettingsChannelCreateChannelFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useSettingsChannelCreateChannelFileMutation(baseOptions?: Apollo.MutationHookOptions<SettingsChannelCreateChannelFileMutation, SettingsChannelCreateChannelFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsChannelCreateChannelFileMutation, SettingsChannelCreateChannelFileMutationVariables>(SettingsChannelCreateChannelFileDocument, options);
      }
export type SettingsChannelCreateChannelFileMutationHookResult = ReturnType<typeof useSettingsChannelCreateChannelFileMutation>;
export type SettingsChannelCreateChannelFileMutationResult = Apollo.MutationResult<SettingsChannelCreateChannelFileMutation>;
export type SettingsChannelCreateChannelFileMutationOptions = Apollo.BaseMutationOptions<SettingsChannelCreateChannelFileMutation, SettingsChannelCreateChannelFileMutationVariables>;
export const SettingsChannelUpdateChannelFileDocument = gql`
    mutation SettingsChannelUpdateChannelFile($fileId: uuid!, $channelId: uuid!) {
  insert_channel_file_one(
    object: {fileId: $fileId, channelId: $channelId}
    on_conflict: {constraint: channel_file_channel_id_key, update_columns: fileId}
  ) {
    fileId
    channelId
  }
}
    `;
export type SettingsChannelUpdateChannelFileMutationFn = Apollo.MutationFunction<SettingsChannelUpdateChannelFileMutation, SettingsChannelUpdateChannelFileMutationVariables>;

/**
 * __useSettingsChannelUpdateChannelFileMutation__
 *
 * To run a mutation, you first call `useSettingsChannelUpdateChannelFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsChannelUpdateChannelFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsChannelUpdateChannelFileMutation, { data, loading, error }] = useSettingsChannelUpdateChannelFileMutation({
 *   variables: {
 *      fileId: // value for 'fileId'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useSettingsChannelUpdateChannelFileMutation(baseOptions?: Apollo.MutationHookOptions<SettingsChannelUpdateChannelFileMutation, SettingsChannelUpdateChannelFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsChannelUpdateChannelFileMutation, SettingsChannelUpdateChannelFileMutationVariables>(SettingsChannelUpdateChannelFileDocument, options);
      }
export type SettingsChannelUpdateChannelFileMutationHookResult = ReturnType<typeof useSettingsChannelUpdateChannelFileMutation>;
export type SettingsChannelUpdateChannelFileMutationResult = Apollo.MutationResult<SettingsChannelUpdateChannelFileMutation>;
export type SettingsChannelUpdateChannelFileMutationOptions = Apollo.BaseMutationOptions<SettingsChannelUpdateChannelFileMutation, SettingsChannelUpdateChannelFileMutationVariables>;
export const SettingsDeleteGroupChannelDocument = gql`
    mutation SettingsDeleteGroupChannel($uuids: [uuid!]!) {
  updateReplies: update_channel_post(
    where: {channelId: {_in: $uuids}}
    _set: {parentPostId: null}
  ) {
    returning {
      id
    }
  }
  deleteReactions: delete_channel_post_reaction(
    where: {post: {channelId: {_in: $uuids}}}
  ) {
    returning {
      channelPostId
      reactionId
    }
  }
  deleteAllPosts: delete_channel_post(where: {channelId: {_in: $uuids}}) {
    returning {
      id
    }
  }
  deleteMembers: delete_channel_member(where: {channelId: {_in: $uuids}}) {
    returning {
      id
    }
  }
  deleteChannels: delete_channel(where: {id: {_in: $uuids}}) {
    returning {
      id
      name
    }
  }
}
    `;
export type SettingsDeleteGroupChannelMutationFn = Apollo.MutationFunction<SettingsDeleteGroupChannelMutation, SettingsDeleteGroupChannelMutationVariables>;

/**
 * __useSettingsDeleteGroupChannelMutation__
 *
 * To run a mutation, you first call `useSettingsDeleteGroupChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsDeleteGroupChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsDeleteGroupChannelMutation, { data, loading, error }] = useSettingsDeleteGroupChannelMutation({
 *   variables: {
 *      uuids: // value for 'uuids'
 *   },
 * });
 */
export function useSettingsDeleteGroupChannelMutation(baseOptions?: Apollo.MutationHookOptions<SettingsDeleteGroupChannelMutation, SettingsDeleteGroupChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsDeleteGroupChannelMutation, SettingsDeleteGroupChannelMutationVariables>(SettingsDeleteGroupChannelDocument, options);
      }
export type SettingsDeleteGroupChannelMutationHookResult = ReturnType<typeof useSettingsDeleteGroupChannelMutation>;
export type SettingsDeleteGroupChannelMutationResult = Apollo.MutationResult<SettingsDeleteGroupChannelMutation>;
export type SettingsDeleteGroupChannelMutationOptions = Apollo.BaseMutationOptions<SettingsDeleteGroupChannelMutation, SettingsDeleteGroupChannelMutationVariables>;
export const SettingsGetGroupChannelsDocument = gql`
    query SettingsGetGroupChannels($alphaName: String!) {
  channels: channel(
    where: {group_: {alphaName: {_eq: $alphaName}}}
    order_by: {members_aggregate: {count: desc}, createdAt: desc}
    limit: 1000
  ) {
    id
    name
    memberCount
    default
    private
    posts_aggregate {
      aggregate {
        count
      }
    }
    owner {
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useSettingsGetGroupChannelsQuery__
 *
 * To run a query within a React component, call `useSettingsGetGroupChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetGroupChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetGroupChannelsQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsGetGroupChannelsQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetGroupChannelsQuery, SettingsGetGroupChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetGroupChannelsQuery, SettingsGetGroupChannelsQueryVariables>(SettingsGetGroupChannelsDocument, options);
      }
export function useSettingsGetGroupChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetGroupChannelsQuery, SettingsGetGroupChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetGroupChannelsQuery, SettingsGetGroupChannelsQueryVariables>(SettingsGetGroupChannelsDocument, options);
        }
export type SettingsGetGroupChannelsQueryHookResult = ReturnType<typeof useSettingsGetGroupChannelsQuery>;
export type SettingsGetGroupChannelsLazyQueryHookResult = ReturnType<typeof useSettingsGetGroupChannelsLazyQuery>;
export type SettingsGetGroupChannelsQueryResult = Apollo.QueryResult<SettingsGetGroupChannelsQuery, SettingsGetGroupChannelsQueryVariables>;
export const SettingsExportGroupMembersDocument = gql`
    query SettingsExportGroupMembers($alphaName: String!, $loggedInUserId: uuid!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    users(
      order_by: {user_: {roles_aggregate: {count: desc}, firstName: asc}}
      where: {userId: {_neq: $loggedInUserId}}
    ) {
      ...SettingsExportedGroupUser
    }
  }
}
    ${SettingsExportedGroupUserFragmentDoc}`;

/**
 * __useSettingsExportGroupMembersQuery__
 *
 * To run a query within a React component, call `useSettingsExportGroupMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsExportGroupMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsExportGroupMembersQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *      loggedInUserId: // value for 'loggedInUserId'
 *   },
 * });
 */
export function useSettingsExportGroupMembersQuery(baseOptions: Apollo.QueryHookOptions<SettingsExportGroupMembersQuery, SettingsExportGroupMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsExportGroupMembersQuery, SettingsExportGroupMembersQueryVariables>(SettingsExportGroupMembersDocument, options);
      }
export function useSettingsExportGroupMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsExportGroupMembersQuery, SettingsExportGroupMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsExportGroupMembersQuery, SettingsExportGroupMembersQueryVariables>(SettingsExportGroupMembersDocument, options);
        }
export type SettingsExportGroupMembersQueryHookResult = ReturnType<typeof useSettingsExportGroupMembersQuery>;
export type SettingsExportGroupMembersLazyQueryHookResult = ReturnType<typeof useSettingsExportGroupMembersLazyQuery>;
export type SettingsExportGroupMembersQueryResult = Apollo.QueryResult<SettingsExportGroupMembersQuery, SettingsExportGroupMembersQueryVariables>;
export const SettingsGetGroupMembersDocument = gql`
    query SettingsGetGroupMembers($alphaName: String!, $loggedInUserId: uuid!, $limit: Int!, $offset: Int!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    users(
      offset: $offset
      limit: $limit
      order_by: {user_: {roles_aggregate: {count: desc}, firstName: asc}}
      where: {userId: {_neq: $loggedInUserId}}
    ) {
      ...SettingsGroupUser
    }
  }
}
    ${SettingsGroupUserFragmentDoc}`;

/**
 * __useSettingsGetGroupMembersQuery__
 *
 * To run a query within a React component, call `useSettingsGetGroupMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetGroupMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetGroupMembersQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *      loggedInUserId: // value for 'loggedInUserId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSettingsGetGroupMembersQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetGroupMembersQuery, SettingsGetGroupMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetGroupMembersQuery, SettingsGetGroupMembersQueryVariables>(SettingsGetGroupMembersDocument, options);
      }
export function useSettingsGetGroupMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetGroupMembersQuery, SettingsGetGroupMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetGroupMembersQuery, SettingsGetGroupMembersQueryVariables>(SettingsGetGroupMembersDocument, options);
        }
export type SettingsGetGroupMembersQueryHookResult = ReturnType<typeof useSettingsGetGroupMembersQuery>;
export type SettingsGetGroupMembersLazyQueryHookResult = ReturnType<typeof useSettingsGetGroupMembersLazyQuery>;
export type SettingsGetGroupMembersQueryResult = Apollo.QueryResult<SettingsGetGroupMembersQuery, SettingsGetGroupMembersQueryVariables>;
export const SettingsDeleteGroupMembersDocument = gql`
    mutation SettingsDeleteGroupMembers($groupId: uuid!, $userIds: [uuid!]!) {
  deletePosts: update_channel_post(
    where: {member: {userId: {_in: $userIds}}, channel: {groupId: {_eq: $groupId}}}
    _set: {deletedAt: "now()"}
  ) {
    affected_rows
  }
  deleteChannelMembers: update_channel_member(
    where: {_and: [{channel: {_and: [{groupId: {_eq: $groupId}}, {type: {_neq: direct}}]}}, {userId: {_in: $userIds}}]}
    _set: {deletedAt: "now()"}
  ) {
    affected_rows
  }
  deleteJoinRequests: delete_group_join_request(
    where: {groupId: {_eq: $groupId}, userId: {_in: $userIds}}
  ) {
    affected_rows
  }
  deleteRoles: delete_group_role(
    where: {groupId: {_eq: $groupId}, userId: {_in: $userIds}}
  ) {
    affected_rows
  }
  deleteUserGroup: delete_user_group(
    where: {userId: {_in: $userIds}, groupId: {_eq: $groupId}}
  ) {
    returning {
      userId
      groupId
    }
  }
}
    `;
export type SettingsDeleteGroupMembersMutationFn = Apollo.MutationFunction<SettingsDeleteGroupMembersMutation, SettingsDeleteGroupMembersMutationVariables>;

/**
 * __useSettingsDeleteGroupMembersMutation__
 *
 * To run a mutation, you first call `useSettingsDeleteGroupMembersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingsDeleteGroupMembersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingsDeleteGroupMembersMutation, { data, loading, error }] = useSettingsDeleteGroupMembersMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      userIds: // value for 'userIds'
 *   },
 * });
 */
export function useSettingsDeleteGroupMembersMutation(baseOptions?: Apollo.MutationHookOptions<SettingsDeleteGroupMembersMutation, SettingsDeleteGroupMembersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingsDeleteGroupMembersMutation, SettingsDeleteGroupMembersMutationVariables>(SettingsDeleteGroupMembersDocument, options);
      }
export type SettingsDeleteGroupMembersMutationHookResult = ReturnType<typeof useSettingsDeleteGroupMembersMutation>;
export type SettingsDeleteGroupMembersMutationResult = Apollo.MutationResult<SettingsDeleteGroupMembersMutation>;
export type SettingsDeleteGroupMembersMutationOptions = Apollo.BaseMutationOptions<SettingsDeleteGroupMembersMutation, SettingsDeleteGroupMembersMutationVariables>;
export const SettingsGetGroupLeaderDocument = gql`
    query SettingsGetGroupLeader($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    leaderUserId
  }
}
    `;

/**
 * __useSettingsGetGroupLeaderQuery__
 *
 * To run a query within a React component, call `useSettingsGetGroupLeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsGetGroupLeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsGetGroupLeaderQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useSettingsGetGroupLeaderQuery(baseOptions: Apollo.QueryHookOptions<SettingsGetGroupLeaderQuery, SettingsGetGroupLeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsGetGroupLeaderQuery, SettingsGetGroupLeaderQueryVariables>(SettingsGetGroupLeaderDocument, options);
      }
export function useSettingsGetGroupLeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsGetGroupLeaderQuery, SettingsGetGroupLeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsGetGroupLeaderQuery, SettingsGetGroupLeaderQueryVariables>(SettingsGetGroupLeaderDocument, options);
        }
export type SettingsGetGroupLeaderQueryHookResult = ReturnType<typeof useSettingsGetGroupLeaderQuery>;
export type SettingsGetGroupLeaderLazyQueryHookResult = ReturnType<typeof useSettingsGetGroupLeaderLazyQuery>;
export type SettingsGetGroupLeaderQueryResult = Apollo.QueryResult<SettingsGetGroupLeaderQuery, SettingsGetGroupLeaderQueryVariables>;
export const ModalUpdateUserDetailsDocument = gql`
    mutation ModalUpdateUserDetails($userId: uuid!, $data: user__set_input!) {
  updatedUser: update_user__by_pk(pk_columns: {id: $userId}, _set: $data) {
    id
    firstName
    lastName
    photos
  }
}
    `;
export type ModalUpdateUserDetailsMutationFn = Apollo.MutationFunction<ModalUpdateUserDetailsMutation, ModalUpdateUserDetailsMutationVariables>;

/**
 * __useModalUpdateUserDetailsMutation__
 *
 * To run a mutation, you first call `useModalUpdateUserDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModalUpdateUserDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modalUpdateUserDetailsMutation, { data, loading, error }] = useModalUpdateUserDetailsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useModalUpdateUserDetailsMutation(baseOptions?: Apollo.MutationHookOptions<ModalUpdateUserDetailsMutation, ModalUpdateUserDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModalUpdateUserDetailsMutation, ModalUpdateUserDetailsMutationVariables>(ModalUpdateUserDetailsDocument, options);
      }
export type ModalUpdateUserDetailsMutationHookResult = ReturnType<typeof useModalUpdateUserDetailsMutation>;
export type ModalUpdateUserDetailsMutationResult = Apollo.MutationResult<ModalUpdateUserDetailsMutation>;
export type ModalUpdateUserDetailsMutationOptions = Apollo.BaseMutationOptions<ModalUpdateUserDetailsMutation, ModalUpdateUserDetailsMutationVariables>;
export const NonMemberGetGroupLeaderDocument = gql`
    query NonMemberGetGroupLeader($alphaName: String!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    leader_ {
      id
      photos
    }
  }
}
    `;

/**
 * __useNonMemberGetGroupLeaderQuery__
 *
 * To run a query within a React component, call `useNonMemberGetGroupLeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonMemberGetGroupLeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonMemberGetGroupLeaderQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *   },
 * });
 */
export function useNonMemberGetGroupLeaderQuery(baseOptions: Apollo.QueryHookOptions<NonMemberGetGroupLeaderQuery, NonMemberGetGroupLeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NonMemberGetGroupLeaderQuery, NonMemberGetGroupLeaderQueryVariables>(NonMemberGetGroupLeaderDocument, options);
      }
export function useNonMemberGetGroupLeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NonMemberGetGroupLeaderQuery, NonMemberGetGroupLeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NonMemberGetGroupLeaderQuery, NonMemberGetGroupLeaderQueryVariables>(NonMemberGetGroupLeaderDocument, options);
        }
export type NonMemberGetGroupLeaderQueryHookResult = ReturnType<typeof useNonMemberGetGroupLeaderQuery>;
export type NonMemberGetGroupLeaderLazyQueryHookResult = ReturnType<typeof useNonMemberGetGroupLeaderLazyQuery>;
export type NonMemberGetGroupLeaderQueryResult = Apollo.QueryResult<NonMemberGetGroupLeaderQuery, NonMemberGetGroupLeaderQueryVariables>;
export const ContextGetUserDocument = gql`
    query ContextGetUser($id: uuid!) {
  user__by_pk(id: $id) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useContextGetUserQuery__
 *
 * To run a query within a React component, call `useContextGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useContextGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContextGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContextGetUserQuery(baseOptions: Apollo.QueryHookOptions<ContextGetUserQuery, ContextGetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContextGetUserQuery, ContextGetUserQueryVariables>(ContextGetUserDocument, options);
      }
export function useContextGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContextGetUserQuery, ContextGetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContextGetUserQuery, ContextGetUserQueryVariables>(ContextGetUserDocument, options);
        }
export type ContextGetUserQueryHookResult = ReturnType<typeof useContextGetUserQuery>;
export type ContextGetUserLazyQueryHookResult = ReturnType<typeof useContextGetUserLazyQuery>;
export type ContextGetUserQueryResult = Apollo.QueryResult<ContextGetUserQuery, ContextGetUserQueryVariables>;
export const ContextUpdateUserActiveDocument = gql`
    mutation ContextUpdateUserActive($userId: uuid!) {
  user: update_user__by_pk(pk_columns: {id: $userId}, _set: {activeAt: "now()"}) {
    id
    activeAt
  }
}
    `;
export type ContextUpdateUserActiveMutationFn = Apollo.MutationFunction<ContextUpdateUserActiveMutation, ContextUpdateUserActiveMutationVariables>;

/**
 * __useContextUpdateUserActiveMutation__
 *
 * To run a mutation, you first call `useContextUpdateUserActiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContextUpdateUserActiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contextUpdateUserActiveMutation, { data, loading, error }] = useContextUpdateUserActiveMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useContextUpdateUserActiveMutation(baseOptions?: Apollo.MutationHookOptions<ContextUpdateUserActiveMutation, ContextUpdateUserActiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContextUpdateUserActiveMutation, ContextUpdateUserActiveMutationVariables>(ContextUpdateUserActiveDocument, options);
      }
export type ContextUpdateUserActiveMutationHookResult = ReturnType<typeof useContextUpdateUserActiveMutation>;
export type ContextUpdateUserActiveMutationResult = Apollo.MutationResult<ContextUpdateUserActiveMutation>;
export type ContextUpdateUserActiveMutationOptions = Apollo.BaseMutationOptions<ContextUpdateUserActiveMutation, ContextUpdateUserActiveMutationVariables>;
export const CheckGroupMembershipDocument = gql`
    query CheckGroupMembership($alphaName: String!, $userId: uuid!) {
  group: group_(where: {alphaName: {_eq: $alphaName}}) {
    id
    leaderUserId
    users(where: {userId: {_eq: $userId}}, limit: 1) {
      userId
    }
  }
}
    `;

/**
 * __useCheckGroupMembershipQuery__
 *
 * To run a query within a React component, call `useCheckGroupMembershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckGroupMembershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckGroupMembershipQuery({
 *   variables: {
 *      alphaName: // value for 'alphaName'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCheckGroupMembershipQuery(baseOptions: Apollo.QueryHookOptions<CheckGroupMembershipQuery, CheckGroupMembershipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckGroupMembershipQuery, CheckGroupMembershipQueryVariables>(CheckGroupMembershipDocument, options);
      }
export function useCheckGroupMembershipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckGroupMembershipQuery, CheckGroupMembershipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckGroupMembershipQuery, CheckGroupMembershipQueryVariables>(CheckGroupMembershipDocument, options);
        }
export type CheckGroupMembershipQueryHookResult = ReturnType<typeof useCheckGroupMembershipQuery>;
export type CheckGroupMembershipLazyQueryHookResult = ReturnType<typeof useCheckGroupMembershipLazyQuery>;
export type CheckGroupMembershipQueryResult = Apollo.QueryResult<CheckGroupMembershipQuery, CheckGroupMembershipQueryVariables>;