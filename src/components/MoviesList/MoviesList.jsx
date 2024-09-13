/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getMoviesOnCategory } from "../../api/api";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";
import { useMutation, useQuery } from "@tanstack/react-query";

// moviesOnCategory

// useQuery(); // 원하는 데이터 가져오기 (queryKey, queryFn)
// queryFn = 인자로 데이터를 가져오는 함수 함수는 promise를 return 해야함
// queryKey = 받아온 데이터를 이름붙여 저장, 반드시 배열로 작성 2번째는 값이 바뀌면 호출할 함수

// useQuery({ queryKey, queryFn: () => {
//   데이터 불러오고 있음...
//   const 데이터 = 불러온 데이터
//   return 데이터
// })});

// useMutation(); // 데이터를 수정하기


function MoviesList({ title, category }) {
  // TanStack Query
  const { data: moviesOnCategory } = useQuery({
    initialData: [],
    queryKey: ["movies", { category }],
    queryFn: () => getMoviesOnCategory(category),
  });

  return (
    <>
      <section className="mt-24">
        <h3 className="m-0 pl-10 ml-[-40px]">{title}</h3>

        <ul className="list-none pl-10 flex gap-5 w-screen overflow-x-auto ml-[-40px]">
          {/* 아래있는거 배열만큼 반복해서 그려줘 */}
          {moviesOnCategory.map((movie) => (
            <li key={movie.id} className="min-w-[calc((100vw-80px-60px)/5)]">
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default MoviesList;
