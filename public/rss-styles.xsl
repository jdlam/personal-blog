<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <style>
          * {
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            line-height: 1.6;
            color: #e5e5e5;
            background: #1a1a1a;
            max-width: 720px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          h1 {
            font-size: 2rem;
            margin: 0 0 0.5rem;
          }
          .description {
            color: #a3a3a3;
            margin-bottom: 2rem;
          }
          .info {
            background: #262626;
            border: 1px solid #404040;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 2rem;
            font-size: 0.9rem;
          }
          .info p {
            margin: 0;
            color: #a3a3a3;
          }
          .info code {
            background: #1a1a1a;
            padding: 0.2em 0.4em;
            border-radius: 4px;
            font-size: 0.85em;
            color: #e5e5e5;
          }
          h2 {
            font-size: 1.25rem;
            margin: 2rem 0 1rem;
            color: #e5e5e5;
          }
          .post-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .post-item {
            border-bottom: 1px solid #404040;
            padding: 1rem 0;
          }
          .post-item:last-child {
            border-bottom: none;
          }
          .post-title {
            font-weight: 600;
            color: #e5e5e5;
            text-decoration: none;
            font-size: 1.1rem;
          }
          .post-title:hover {
            color: #fff;
          }
          .post-date {
            font-size: 0.85rem;
            color: #a3a3a3;
            margin-top: 0.25rem;
          }
          a {
            color: #e5e5e5;
          }
          a:hover {
            color: #fff;
          }
          @media (prefers-color-scheme: light) {
            body {
              color: #262626;
              background: #fff;
            }
            h1, h2, .post-title, code {
              color: #171717;
            }
            .post-title:hover, a:hover {
              color: #000;
            }
            a {
              color: #171717;
            }
            .description, .info p, .post-date {
              color: #525252;
            }
            .info {
              background: #f5f5f5;
              border-color: #e5e5e5;
            }
            .info code {
              background: #fff;
              color: #171717;
            }
            .post-item {
              border-color: #e5e5e5;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="description"><xsl:value-of select="/rss/channel/description"/></p>
        </header>
        <div class="info">
          <p>This is an RSS feed. Copy the URL into your feed reader to subscribe. <a href="https://aboutfeeds.com">Learn more about feeds.</a></p>
        </div>
        <h2>Recent Posts</h2>
        <ul class="post-list">
          <xsl:for-each select="/rss/channel/item">
            <li class="post-item">
              <a class="post-title" href="{link}">
                <xsl:value-of select="title"/>
              </a>
              <div class="post-date">
                <xsl:value-of select="pubDate"/>
              </div>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
