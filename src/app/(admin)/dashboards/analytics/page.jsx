import PageTitle from '@/components/PageTitle';
import SocialSource from './components/SocialSource';
import Statistics from './components/Statistics';
const AnalyticsPage = () => {
  return <>
      <PageTitle title="Dashboard" subName="Dashboard" />
      <Statistics />
      
      <SocialSource />
    </>;
};
export default AnalyticsPage;