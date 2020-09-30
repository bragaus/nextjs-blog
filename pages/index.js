import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hi, meu nome é aquele msm que ta no titulo eu acredito que a wired e o mundo físico são a mesma coisa
          e que Deus recebe nossas orações em JSON. Os sentimentos são de plastico e 
          todo feriado tem a cara de domingo, na minha cidade o céu tem cor de prata envenenado.
          O poder do ser humano é viver uma fantasia, mano quase tudo que a gente vê é uma engenharia fudida para transformar
          binario em algo que a gente consiga entender.
          A matrix é tipo o CSS de um mundo HTML, imagina entrar em uma pagina sem CSS que merda, então experimente sair da matrix, LMAOOO.
          gosto de assistir largados e pelados. 
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>      
  
    </Layout>
  )
}
