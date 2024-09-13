/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Page from "../../components/page/Page";
import { getMovie } from "../../api/api";
import { FaPlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import LikeMovieButton from "../../components/LikeMovieButton/LikeMovieButton";

function MovieDetailPage(props) {
  const { data: movie } = useQuery({
    queryKey: ["movies", { id: movieId }],
    queryFn: () => getMovie(movieId),
  });

  const { checkIsLiked, toggleLikeMovie } = props;
  const { movieId } = useParams();

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  // useEffect(() => {
  //   getMovie(movieId).then((movie) => setMovie(movie));
  // }, [movieId]);

  if (!movie) return null;

  return (
    <>
      <Page>
        <img
          src={IMAGE_BASE_URL + movie.backdrop_path}
          alt=""
          className="-mx-10 w-[100vw] h-[500px] -z-10 aspect-w-16 aspect-h-9 blur-lg bg-red-500  absolute top-[-50px] "
        />

        <div className="flex z-10">
          <div>
            <h2 className="z-10 text-4xl font-bold">{movie.title}</h2>
            <p className="mt-2">{movie.tagline}</p>
            <p className="mt-10">{movie.overview}</p>
            <p className="mt-20 text-gray-400 text-sm">{movie.release_date}</p>

            {/* Button */}
            <div className="flex gap-5 items-center mt-10">
              <button className="flex text-3xl w-[200px] h-[70px]  bg-white text-black text-center items-center justify-center rounded-lg">
                재생
                <FaPlay />
              </button>

              <LikeMovieButton movieId={movieId} />
            </div>
          </div>
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            alt=""
            className="p-[20px] w-[300px]"
          />
        </div>
      </Page>
    </>
  );
}

export default MovieDetailPage;
