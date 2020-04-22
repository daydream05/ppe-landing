import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
        <Header
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
        />
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/woj5zqc.css" />
        </Helmet>
        <div>{children}</div>
        <footer>
          <div>
            <div>
              {companyInfo && (
                <div>
                  {companyInfo.name}
                  <br />
                  {companyInfo.address1}
                  <br />
                  {companyInfo.address2 && (
                    <span>
                      {companyInfo.address2}
                      <br />
                    </span>
                  )}
                  {companyInfo.zipCode} {companyInfo.city}
                  {companyInfo.country && <span>, {companyInfo.country}</span>}
                </div>
              )}
            </div>

            <div>
              © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
              &amp; <a href='https://www.gatsbyjs.org'>Gatsby</a>
            </div>
          </div>
        </footer>
  </>
)

export default Layout
