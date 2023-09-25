// export interface Param {
//   //The status of the response. It refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results
//   status: string;
//   //The number of results available for your search overall
//   total: number;
//   //The number of items returned in this call
//   pageSize: number;
//   //The number of the page you are browsing
//   currentPage: number;
//   //The total amount of pages that are in this call
//   pages: number;
//   //The sort order used
//   orderBy: string;
//   //The path to content
//   id: string;
//   //The id of the section
//   sectionId: string;
//   //The name of the section
//   sectionName: string;
//   //The combined date and time of publication
//   // master -> webPublicationDate	:Datetime
//   webPublicationDate: number;
//   //The URL of the html content
//   webUrl: string;
//   //The URL of the raw content
//   apiUrl: string;
// }

interface NewsFields {
  thumbnail: string | null;
  headline: string;
  body: string;
  shortURL: string;
  trailText: string;
}

export interface NewsItem {
  id: string;
  fields: NewsFields;
  // type: string;
  // sectionId: string;
  // sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  // apiUrl: string;
  // isHosted: boolean;
  // pillarId: string;
  // pillarName: string;
}

export type Result = Array<NewsItem>;
