import {
  Dimension,
  DateDimension,
  Attribute,
  createAttribute,
  createDateDimension,
  createDimension,
} from '@sisense/sdk-data';

export const DataSource = 'New Jira';

interface csm_manager_mappingDimension extends Dimension {
  CSM: Attribute;
  CSMManager: Attribute;
  Segment: Attribute;
}
export const csm_manager_mapping = createDimension({
  name: 'csm_manager_mapping',
  CSM: createAttribute({
    name: 'CSM',
    type: 'text-attribute',
    expression: '[csm_manager_mapping.CSM]',
  }),
  CSMManager: createAttribute({
    name: 'CSMManager',
    type: 'text-attribute',
    expression: '[csm_manager_mapping.CSM Manager]',
  }),
  Segment: createAttribute({
    name: 'Segment',
    type: 'text-attribute',
    expression: '[csm_manager_mapping.Segment]',
  }),
}) as csm_manager_mappingDimension;

interface JiraIssuesDimension extends Dimension {
  acv: Attribute;
  assignee: Attribute;
  category: Attribute;
  configuration: Attribute;
  customer: Attribute;
  deployment: Attribute;
  labels: Attribute;
  os: Attribute;
  region: Attribute;
  reporter: Attribute;
  sf: Attribute;
  status: Attribute;
  summary: Attribute;
  ticket_key: Attribute;
  ticket_url: Attribute;
  version: Attribute;
  created: DateDimension;
  resolution_date: DateDimension;
  updated: DateDimension;
}
export const JiraIssues = createDimension({
  name: 'Jira Issues',
  acv: createAttribute({
    name: 'acv',
    type: 'numeric-attribute',
    expression: '[Jira Issues.acv]',
  }),
  assignee: createAttribute({
    name: 'assignee',
    type: 'text-attribute',
    expression: '[Jira Issues.assignee]',
  }),
  category: createAttribute({
    name: 'category',
    type: 'text-attribute',
    expression: '[Jira Issues.category]',
  }),
  configuration: createAttribute({
    name: 'configuration',
    type: 'text-attribute',
    expression: '[Jira Issues.configuration]',
  }),
  customer: createAttribute({
    name: 'customer',
    type: 'text-attribute',
    expression: '[Jira Issues.customer]',
  }),
  deployment: createAttribute({
    name: 'deployment',
    type: 'text-attribute',
    expression: '[Jira Issues.deployment]',
  }),
  labels: createAttribute({
    name: 'labels',
    type: 'text-attribute',
    expression: '[Jira Issues.labels]',
  }),
  os: createAttribute({
    name: 'os',
    type: 'text-attribute',
    expression: '[Jira Issues.os]',
  }),
  region: createAttribute({
    name: 'region',
    type: 'text-attribute',
    expression: '[Jira Issues.region]',
  }),
  reporter: createAttribute({
    name: 'reporter',
    type: 'text-attribute',
    expression: '[Jira Issues.reporter]',
  }),
  sf: createAttribute({
    name: 'sf',
    type: 'text-attribute',
    expression: '[Jira Issues.sf]',
  }),
  status: createAttribute({
    name: 'status',
    type: 'text-attribute',
    expression: '[Jira Issues.status]',
  }),
  summary: createAttribute({
    name: 'summary',
    type: 'text-attribute',
    expression: '[Jira Issues.summary]',
  }),
  ticket_key: createAttribute({
    name: 'ticket_key',
    type: 'text-attribute',
    expression: '[Jira Issues.ticket_key]',
  }),
  ticket_url: createAttribute({
    name: 'ticket_url',
    type: 'text-attribute',
    expression: '[Jira Issues.ticket_url]',
  }),
  version: createAttribute({
    name: 'version',
    type: 'text-attribute',
    expression: '[Jira Issues.version]',
  }),
  created: createDateDimension({
    name: 'created',
    expression: '[Jira Issues.created (Calendar)]',
  }),
  resolution_date: createDateDimension({
    name: 'resolution_date',
    expression: '[Jira Issues.resolution_date (Calendar)]',
  }),
  updated: createDateDimension({
    name: 'updated',
    expression: '[Jira Issues.updated (Calendar)]',
  }),
}) as JiraIssuesDimension;
