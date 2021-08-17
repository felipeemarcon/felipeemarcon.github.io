import dynamic from "next/dynamic";
import config from "@admin/config";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
    }),
  // eslint-disable-next-line react/display-name
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return <CMS />;
};

export default AdminPage;
