import { Chart, SisenseContextProvider, ExecuteQuery } from '@sisense/sdk-ui';
import * as DM from '../jira';
import { measures } from '@sisense/sdk-data';
import CustomTable from './CustomTable';

const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY
const sisenseUrl = import.meta.env.VITE_SISENSE_URL

console.log(sisenseUrl)

function Analytics() {

  return (
    <div style={{height:'300px', width:'100%'}}>
      <SisenseContextProvider
        url={sisenseUrl} // replace with the URL of your Sisense instance
        token={sisenseApiKey}
      >
        <Chart
          dataSet={DM.DataSource}
          chartType={'bar'}
          dataOptions={{
            category: [DM.JiraIssues.status],
            value: [measures.countDistinct(DM.JiraIssues.ticket_key)],
            breakBy: [],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: 'bottom',
            },
          }}
          onDataPointClick={(point, nativeEvent) => {
            console.log('clicked', point, nativeEvent);
          }}
        />
        <ExecuteQuery
            dataSource={DM.DataSource}
            dimensions={[
                DM.JiraIssues.ticket_key,
                DM.JiraIssues.summary,
                DM.JiraIssues.reporter,
                DM.JiraIssues.status,
                DM.JiraIssues.deployment,
                DM.JiraIssues.assignee
            ]}
            measures={[measures.sum(DM.JiraIssues.acv)]}
            >
            {
            (data) => {
                if (data) {
                    console.log(data)
                    return <CustomTable queryData={data} />;
                }
            }
            }
        </ExecuteQuery>
      </SisenseContextProvider>
    </div>
  );
}
export default Analytics;