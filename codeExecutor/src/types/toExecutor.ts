export type testCaseInput = {
  stdin: string;
  language_id: int;
  question_id: string;
  source_code: string;
  submission_id: string;
  expected_output?:string;
};
export type submitInput = {
  lang: string;
  question_id: string;
  typed_code: string;
  submission_id: string;
};
