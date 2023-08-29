import React from 'react';
import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
  // Define the data for the footer
  const description = "";
  const title = "RANVI Enterprises";

  const columns = [{
    title: "Column 1",
    resources: [{
      name: "phoneno:",
      link: "/item1"
    },{
      name: "landline",
      link: "/item2"
    }
    ]
  },{
    title: "Column 2",
    resources: [{
      name: "6757679042",
      link: "/item3"
    },{
      name: "044-4545354",
      link: "/item4"
    }]
  }];

  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    linkedin="lorem_ipsum_on_linkedin"
    facebook="lorem_ipsum_on_fb"
    twitter="lorem_ipsum_on_twitter"
    instagram="lorem_ipsum_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="lorem_ipsum_collections"
    copyright="black"
    iconColor="black"
    backgroundColor="lightgrey"
    fontColor="black"
    copyrightColor="darkgrey"
  />;
}

export default Footer;