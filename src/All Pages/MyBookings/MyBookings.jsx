import { useContext, useEffect, useState } from "react";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBG from "./../../assets/images/checkout/checkout.png"
import { AuthContext } from "../../Provider/AuthProvider";
import { RxCrossCircled } from "react-icons/rx";
// import {
//   MagnifyingGlassIcon,
//   ChevronUpDownIcon,
// } from "@heroicons/react/24/outline";
// import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MyBookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5001/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            // console.log(`my bookings are ${data}`)
        })
    },[url]) 
    console.log(bookings);

    // const TABS = [
    //   {
    //     label: "All",
    //     value: "all",
    //   },
    //   {
    //     label: "Monitored",
    //     value: "monitored",
    //   },
    //   {
    //     label: "Unmonitored",
    //     value: "unmonitored",
    //   },
    // ];

    // const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

    // const TABLE_ROWS = [
    //   {
    //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    //     name: "John Michael",
    //     email: "john@creative-tim.com",
    //     job: "Manager",
    //     org: "Organization",
    //     online: true,
    //     date: "23/04/18",
    //   },
    //   {
    //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    //     name: "Alexa Liras",
    //     email: "alexa@creative-tim.com",
    //     job: "Programator",
    //     org: "Developer",
    //     online: false,
    //     date: "23/04/18",
    //   },
    //   {
    //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    //     name: "Laurent Perrier",
    //     email: "laurent@creative-tim.com",
    //     job: "Executive",
    //     org: "Projects",
    //     online: false,
    //     date: "19/09/17",
    //   },
    //   {
    //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    //     name: "Michael Levi",
    //     email: "michael@creative-tim.com",
    //     job: "Programator",
    //     org: "Developer",
    //     online: true,
    //     date: "24/12/08",
    //   },
    //   {
    //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    //     name: "Richard Gran",
    //     email: "richard@creative-tim.com",
    //     job: "Manager",
    //     org: "Executive",
    //     online: false,
    //     date: "04/10/21",
    //   },
    // ];

    return (
      <div>
        <PageShortBanner
          pageTitle={"My Bookings"}
          location={"Home > My Bookings"}
          BGImg={bannerBG}
        ></PageShortBanner>

        <div className="lg:w-[85vw] mx-auto">
          {/* ( */}
          <Card className="h-full w-full shadow-none">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              {/* <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Members list
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    See information about all members
                  </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <Button variant="outlined" size="sm">
                    view all
                  </Button>
                  <Button className="flex items-center gap-3" size="sm">
                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                    member
                  </Button>
                </div>
              </div> */}
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                {/* <Tabs value="all" className="w-full md:w-max">
                  <TabsHeader>
                    {TABS.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                      </Tab>
                    ))}
                  </TabsHeader>
                </Tabs> */}
                {/* <div className="w-full md:w-72">
                  <Input
                    label="Searchhhh"
                    // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div> */}
              </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left ">
                {/* <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={head}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                        >
                          {head}{" "}
                          {index !== TABLE_HEAD.length - 1 && (
                            <ChevronUpDownIcon
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead> */}
                <tbody>
                  {bookings.map(
                    ({ img, serviceName, name, email, price, date, address, phone }, index) => {
                      const isLast = index === bookings.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name} className="border-[.09rem] border-gray-200 my-4 py-4 rounded-md flex items-center justify-between " >
                          <td className="w-[33rem] border2 ">
                            <div className="flex items-center gap-3 w-fit ">
                              <RxCrossCircled className="ml-5 mr-2 font-semibold text-2xl" ></RxCrossCircled>
                              <img
                                src={img}
                                alt={serviceName}
                                sizes="sm"
                                className="w-[8rem] rounded-md bg-red-500 "
                              />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-semibold text-lg "
                                >
                                  {serviceName}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  Location: {address}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  Call: {phone}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          {/* <td className={classes}>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {job}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {org}
                              </Typography>
                            </div>
                          </td> */}
                          {/* <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={online ? "online" : "offline"}
                                color={online ? "green" : "blue-gray"}
                              />
                            </div>
                          </td> */}
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              ${price}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className="pr-8">
                            <Link
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-white bg-[#ff3811] w-fit px-4 py-2 rounded-md  hover:text-[#ff3811] hover:bg-white border-[.09rem] border-[#ff3811] duration-500 "
                            >
                              Pending
                            </Link>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </CardBody>
            {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter> */}
          </Card>
          {/* ); */}
        </div>
      </div>
    );
};

export default MyBookings;