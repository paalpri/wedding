# Wedding

## Frontend

The website was built with **React using Gatsby**, and is hosted as a **Static Site on AWS**. For translations, **i18next** was used. **React Bootstrap** provides pre-built components, and **Jest** is used for **unit testing**.


### Deploymnet

Sync s3 bucket:

```aws s3 sync public/ s3://hedda-og-pal-wedding-website```

Invalidate cloudfront: 

```aws cloudfront create-invalidation --distribution-id EJVE8ZK52QO19 --paths "/*"```

## Backend

The RSVP and Contact Form is running on AWS, using **API Gateway**, **Lambda**, **DynamoDB**, and **Amazon SES**. Using **Serverless Framework**, the **infrastructure** is provisioned **through code** (Cloud Formation).

## Inspiration and acknowledgment

If you ever plan to build your own wedding website, please feel free to use this repository for inspiration. Just as i did, and huge thanks and acknowledgment to [manuelbrgr](https://github.com/manuelbrgr/wedding-rsvp) which have the original project i based this on
