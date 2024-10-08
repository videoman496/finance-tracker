import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { useEffect, useState } from "react";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../components/Sidebar/Sidebar";

import CompanyDashboard from "../../components/CompanyDashboard/CompanyDashboard";
import Tile from "../../components/Tile/Tile";

interface Props {}
const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Industry" subTitle={company.industry} />
            <Tile title="Stock Price" subTitle={company.price} />
            <Tile title="Market Cap" subTitle={company.mktCap} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company not found.</div>
      )}
    </>
  );
};

export default CompanyPage;
