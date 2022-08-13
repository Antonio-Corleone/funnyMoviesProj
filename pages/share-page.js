import { Fragment } from "react";
import { getSession } from 'next-auth/client';

import ShareForm from "../components/share-page/share-form";

function SharePage(props) {
  return (
    <Fragment>
      <ShareForm author={props.session} />
    </Fragment>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
export default SharePage