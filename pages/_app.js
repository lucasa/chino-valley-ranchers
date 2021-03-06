import "@fontsource/ultra"
import 'typeface-lato'
import Head from 'next/head'

import '../styles/globals.css'

import { TinaCMS, TinaProvider } from 'tinacms'
import {
  GithubClient,
  TinacmsGithubProvider
} from 'react-tinacms-github'
import { NextGithubMediaStore } from 'next-tinacms-github'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'

import { EditLink } from '../components/tinacms/EditLink'


function MyApp({ Component, pageProps }) {

  const github = new GithubClient({
    proxy: '/api/proxy-github',
    authCallbackRoute: '/api/create-github-access-token',
    clientId: process.env.GITHUB_CLIENT_ID,
    baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
    baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
  })

  const mediaStore = new NextGithubMediaStore(github)

  const cms = new TinaCMS({
    enabled: !!pageProps.preview,
    apis: {
      /**
       * 2. Register the GithubClient
       */
      github,
    },
    /**
     * 3. Register the Media Store
     */
    media: mediaStore,
    /**
     * 4. Use the Sidebar and Toolbar
     */
    sidebar: pageProps.preview,
    toolbar: pageProps.preview,
  })

  cms.plugins.add(MarkdownFieldPlugin)

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/yyq5ssh.css"></link>
      </Head>
      <TinaProvider cms={cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          {/**
            * 6. Add a button for entering Preview/Edit Mode
            */}
          <EditLink cms={cms} />
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    </>
  )
}

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export default MyApp
