import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout/Layout'
import '../styles.css'
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname.startsWith('/projects/')) {
      return (
        <>
          <Head>
            <title>Silipi | Portfolio</title>
          </Head>
          <Component {...pageProps}></Component>
        </>
      )
    }
    return (
      <>
        <Head>
          <title>Silipi | Portfolio</title>
        </Head>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </>

    )
  }
}

export default MyApp