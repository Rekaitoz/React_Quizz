import { gql } from "@apollo/client";

// Querry

// Mencek Username Yang sama pada REGISTER
export const GET_REGISTER_USER = gql`
  query MyQuery($username: String) {
    user(where: { username: { _eq: $username } }) {
      id
      password
      token
      username
    }
  }
`;

// Memasukkan Username,Password, dan Token ke API pada REGISTER
export const POST_REGISTER_USER = gql`
  mutation MyMutation($password: String, $token: String, $username: String) {
    insert_user(
      objects: { password: $password, token: $token, username: $username }
    ) {
      returning {
        id
        password
        token
        username
      }
    }
  }
`;

// Verifikasi Username dan Password pada LOGIN
export const GET_LOGIN_USER = gql`
  query MyQuery($username: String, $password: String) {
    user(
      where: { username: { _eq: $username }, password: { _eq: $password } }
    ) {
      id
      password
      token
      username
    }
  }
`;

// menampilkan Quiz-quiz Yang dibuat oleh user
export const GET_QUIZ = gql`
  subscription MySubscription($id: Int) {
    user(where: { id: { _eq: $id } }) {
      quizzes {
        id
        path
        quiz_name
      }
    }
  }
`;

// Menghapus Quiz Yang dimiliki Oleh user
export const DELETE_QUIZ = gql`
  mutation MyMutation($id: Int) {
    delete_quiz(where: { id: { _eq: $id } }) {
      returning {
        id
        path
        quiz_name
        user_id
      }
    }
  }
`;

// Memasukkan Quiz Baru
export const INSERT_QUIZ = gql`
  mutation MyMutation($path: String, $quiz_name: String, $user_id: Int) {
    insert_quiz(
      objects: { path: $path, quiz_name: $quiz_name, user_id: $user_id }
    ) {
      returning {
        id
        path
        quiz_name
        user_id
      }
    }
  }
`;

// Menampilkan Pertanyaan yang dibuat sesuai PATH QUIZ
export const GET_QUESTION_QUIZ = gql`
  subscription MySubscription($path: String) {
    quiz(where: { path: { _eq: $path } }) {
      user_id
      questions {
        id
        jawab_1
        jawab_2
        jawab_3
        jawab_4
        jawaban
        pertanyaan
        quiz_id
      }
    }
  }
`;

// Hapus Question sesuai ID
export const DELETE_QUESTION = gql`
  mutation MyMutation($id: Int) {
    delete_question(where: { id: { _eq: $id } }) {
      returning {
        id
        jawab_1
        jawab_2
        jawab_3
        jawab_4
        jawaban
        pertanyaan
        quiz_id
      }
    }
  }
`;

// Menambhkan Question baru
export const INSERT_QUESTION = gql`
  mutation MyMutation(
    $jawab_1: String
    $jawab_2: String
    $jawab_3: String
    $jawab_4: String
    $jawaban: String
    $pertanyaan: String
    $quiz_id: Int
  ) {
    insert_question(
      objects: {
        jawab_1: $jawab_1
        jawab_2: $jawab_2
        jawab_3: $jawab_3
        jawab_4: $jawab_4
        jawaban: $jawaban
        pertanyaan: $pertanyaan
        quiz_id: $quiz_id
      }
    ) {
      returning {
        id
        jawab_1
        jawab_2
        jawab_3
        jawab_4
        jawaban
        pertanyaan
        quiz_id
      }
    }
  }
`;

// Menampilkan Questionn Untuk diupdate dari ID
export const GET_QUESTION_BY_ID = gql`
  query MyQuery($id: Int) {
    question(where: { id: { _eq: $id } }) {
      jawab_1
      jawab_2
      jawab_3
      jawab_4
      jawaban
      pertanyaan
    }
  }
`;

// Update Pertanyaan
export const UPDATE_QUESTION_BY_ID = gql`
  mutation MyMutation(
    $id: Int
    $jawab_1: String
    $jawab_2: String
    $jawab_3: String
    $jawab_4: String
    $jawaban: String
    $pertanyaan: String
  ) {
    update_question(
      where: { id: { _eq: $id } }
      _set: {
        jawab_1: $jawab_1
        jawab_2: $jawab_2
        jawab_3: $jawab_3
        jawab_4: $jawab_4
        jawaban: $jawaban
        pertanyaan: $pertanyaan
      }
    ) {
      returning {
        id
        jawab_1
        jawab_2
        jawab_3
        jawab_4
        jawaban
        pertanyaan
        quiz_id
      }
    }
  }
`;

// Menampilkan Quiz-Quiz User
export const GET_QUIZ_PUBLIC = gql`
  subscription MySubscription {
    quiz {
      id
      path
      quiz_name
      user {
        username
      }
    }
  }
`;

// Menampilkan Pertanyaan berdasarkan Path yang diberikan
export const GET_DOQUESTION = gql`
  query MyQuery($path: String = "") {
    quiz(where: { path: { _eq: $path } }) {
      quiz_name
      questions {
        id
        jawab_1
        jawab_2
        jawab_3
        jawab_4
        jawaban
        pertanyaan
      }
    }
  }
`;
