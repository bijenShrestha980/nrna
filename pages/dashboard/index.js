import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// ASSETS
import cardData from "../../assets/data/card";
import tableData from "../../assets/data/table";
// COMPONENTS
import AdminLayout from "@/layout/AdminLayout";
const TotalTable = dynamic(() => import("@/components/Table/TotalTable"));
const BarChart = dynamic(() => import("@/components/Chart/BarChart"));
const ColoredStatsCard = dynamic(() =>
  import("@/components/Card/ColoredStatsCard")
);
const ColoredIncomeCard = dynamic(() =>
  import("@/components/Card/ColoredIncomeCard")
);
const EventsCard = dynamic(() => import("@/components/Card/EventsCard"));
const LargColorCard = dynamic(() => import("@/components/Card/LargColorCard"));

const dashboard = () => {
  return (
    <AdminLayout>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Card />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TotalTable title={"new application"} tableData={tableData} />
          <div className="overflow-x-auto rounded-xl">
            <BarChart />
          </div>
          <TotalTable title={"payment pending"} tableData={tableData} />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 place-content-start gap-8">
              <ColoredStatsCard />
              <ColoredIncomeCard />
            </div>
            <EventsCard />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

const Card = () => {
  const router = useRouter();
  return cardData.map((item, i) => (
    <LargColorCard
      key={i}
      title={item.title}
      count={item.count}
      onClick={() => router.push(`/dashboard/${item.title}`)}
    />
  ));
};
export default dashboard;
