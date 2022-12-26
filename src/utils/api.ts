import axios from "axios";
import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "lduee6rc",
  apiVersion: "2021-06-07",
  dataset: "production",
});

export const getIndexPage = async () => {
  const response = await client.fetch(`*[_type == "indexPage"]`);
  return response[0];
};

export const getServicePage = async (link: string) => {
  const response = await client.fetch(
    `*[_type == "servicePage" && link == "${link}"]{...,expert->}`
  );
  return response[0];
};

export const getTeamPage = async () => {
  const response = await client.fetch(
    `*[_type == "teamPage"]{teamMembers[]->}`
  );
  return response[0];
};

export const getPortfolio = async () => {
  const response = await client.fetch(
    `*[_type == "portfolioPage"]{...,projects[]->,designProjects[]->}`
  );
  return response[0];
};
