import { useEffect } from "react";
import { useRouter } from "next/router";
// REDUCETS
import { useGetMemberByIdMutation } from "@/features/api/membershipApi";
// COMPONENTS
import AdminLayout from "@/layout/AdminLayout";
import Spinner from "@/layout/Loader/Spinner";
import PaymentCard from "@/components/Card/DetailsCard/PaymentCard";
import VerificationCard from "@/components/Card/DetailsCard/VerificationCard";
import InformationCard from "@/components/Card/DetailsCard/InformationCard";
import InterestCard from "@/components/Card/DetailsCard/InterestCard";
import DetailHeaderCard from "@/components/Card/DetailsCard/DetailHeaderCard";

const Member = () => {
  const router = useRouter();
  const { id } = router.query;
  const [getMemberById, { data, isLoading, isSuccess }] =
    useGetMemberByIdMutation();

  useEffect(() => {
    getMemberById({ id: id });
  }, [id]);

  return (
    <AdminLayout>
      {isLoading || !isSuccess ? (
        <Spinner />
      ) : (
        <>
          <DetailHeaderCard
            image={data.data.image}
            first_name={data.data.first_name}
            middle_name={data.data.middle_name}
            last_name={data.data.last_name}
            membership={data.data.membership}
          />
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <InformationCard
              first_name={data.data.first_name}
              middle_name={data.data.middle_name}
              last_name={data.data.last_name}
              country={data.data.country}
              city={data.data.city}
              mobile={data.data.mobile}
            />
            <InterestCard interestData={data.data.information[0]} />
            <VerificationCard
              passport_number={data.data.passport_number}
              passport_expiry_date={data.data.passport_expiry_date}
              citizenship={data.data.citizenship}
              image={data.data.image}
            />
            <PaymentCard paymentData={data.data.payment[0]} />
          </div>
        </>
      )}
    </AdminLayout>
  );
};

export default Member;
