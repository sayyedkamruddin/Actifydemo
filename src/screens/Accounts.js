import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import exportToExcel from "../components/exportFunction";
import Pagination from "../components/Pagination";
function Accounts() {
  let accountsData = useSelector((state) => state.AccountData.value);
  const [pagination, setPagination] = useState(1);
  let [accountsDataPage, setAccountsDataPage] = useState(
    accountsData.slice(0, 10)
  );

  const [accounts, setAccount] = useState(accountsDataPage);

  const [filter, setFilter] = useState({
    search: "",
    accendingDecending: "nSort",
  });

  useEffect(() => {
    console.log(pagination, "pa");
    setAccountsDataPage(
      accountsData.slice(pagination * 10 - 10, pagination * 10)
    );
    setAccount(accountsData.slice(pagination * 10 - 10, pagination * 10));
    setFilter(() => ({  search: "" ,accendingDecending: "nSort"}));
  }, [pagination]);

  const tabs = ["Account", "Create"];
  const [activeTab, setActiveTab] = useState("Account");
  useEffect(() => {
    if (filter.search) {
      const filteredData = accountsData.filter((account) => {
        return (
          account.name.toLowerCase().includes(filter.search.toLowerCase()) ||
          account.email.toLowerCase().includes(filter.search.toLowerCase()) ||
          account.phone.toLowerCase().includes(filter.search.toLowerCase()) ||
          account.website.toLowerCase().includes(filter.search.toLowerCase()) ||
          account.industry
            .toLowerCase()
            .includes(filter.search.toLowerCase()) ||
          account.status.toLowerCase().includes(filter.search.toLowerCase()) ||
          account.remark.toLowerCase().includes(filter.search.toLowerCase())
        );
      });
      setAccount(filteredData);
    } else {
      setAccount(accountsDataPage);
    }
  }, [filter.search]);
  useEffect(() => {
    let ss = [...accounts];
    console.log(filter.accendingDecending);

    if (filter.accendingDecending === "asc") {
      const sortedData = ss.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setAccount(sortedData);

      console.log(sortedData);
    } else if (filter.accendingDecending === "desc") {
      const sortedData = ss.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      setAccount(sortedData);
    } else if (filter.accendingDecending === "nSort") {
      setFilter(() => ({ ...filter, search: "" }));
      setAccount(accountsDataPage);
    }
  }, [filter.accendingDecending]);

  return (
    <div className="p-6 pt-20">
      <div className="  gap-2 mb-6 bg-[#E2E0E1] p-2 inline-flex rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            // onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab
                ? "bg-white shadow-sm font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-5">
            <div>
              <h2 className="text-xl font-semibold">Account Lists</h2>
              <h2 className="text-lg  text-[#8B9296]">
                Here's a list of accounts
              </h2>
            </div>
            <div className="flex min-[500px]:space-x-4 flex-wrap-reverse gap-2">
              <button
                className={`px-1 py-1 ${
                  accounts.length > 0 ? "bg-green-600" : " bg-gray-500"
                } text-white rounded-lg `}
                onClick={() => exportToExcel(accounts, "Accounts Details")}
                disabled={!accounts.length > 0}
              >
                <PiMicrosoftExcelLogoFill size={30} />
              </button>
              <select
                className="px-2 py-2 border rounded-lg appearancenone focus:outline-none"
                onChange={(e) =>
                  setFilter((...prev) => ({
                    ...prev,
                    accendingDecending: e.target.value,
                  }))
                }
                value={filter.accendingDecending}
              >
                <option value="nSort">View</option>
                <option value="asc">A to Z</option>
                <option value="desc">Z to A</option>
              </select>

              <input
                type="search"
                placeholder="Search Here..."
                className="px-4 py-2 border rounded-lg"
                onChange={(e) =>
                  setFilter(() => ({
                    accendingDecending: "nSort",
                    search: e.target.value,
                  }))
                }
                value={filter.search}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#C1E3FA]">
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500 border2 flex items-center justify-between">
                    Account Name
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500">
                    Email
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500">
                    Phone No.
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500">
                    Website
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500">
                    Industry
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500">
                    Account Status
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500">
                    Remark
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts?.length > 0 ? (
                  accounts.map((account, index) => (
                    <tr
                      key={index}
                      className={`border-t ${
                        (index + 1) % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-3">{account.name}</td>
                      <td className="px-6 py-3">{account.email}</td>
                      <td className="px-6 py-3">{account.phone}</td>
                      <td className="px-6 py-3">{account.website}</td>
                      <td className="px-6 py-3">{account.industry}</td>
                      <td className="px-6 py-3">{account.status}</td>
                      <td className="px-6 py-3">{account.remark}</td>
                      <td className="px-6 py-3">•••</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center px-6 py-20">
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className=" pt-6 flex justify-end">
            <Pagination
              totalPages={accountsData?.length / 10}
              initialPage={pagination}
              setCurrent={setPagination}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
