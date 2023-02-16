// export interface BaseErrorModel extends Error {
//   success: boolean;
// }

// export type ValidationError = BaseErrorModel & {
//   missingFields: string[];
// };

export type CustomErrorContent = {
  message: string;
  stack?: string;
};
