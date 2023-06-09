import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>hello first post</title>
        </Head>
        <h1>First Post</h1>
        <Link href='/'>return to homepage</Link>
      </Layout>
    );
  }