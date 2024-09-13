import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaHeart } from "react-icons/fa";
import { checkIsLikedMovie, likeMovie, unlikeMovie } from "../../api/api";

function LikeMovieButton({ movieId }) {
    const queryClient = useQueryClient();
    const queryKey = ["isLikedMovie", { movieId }];
    const { data: isLikedMovie } = useQuery({
        queryKey: ["isLikedMovie", { movieId }],
        queryFn: () => checkIsLikedMovie(movieId),
    });

    const { mutateAsync: likeMovieMutationFn } = useMutation({
        mutationFn: (movieId) => likeMovie(movieId),
    });
    const { mutateAsync: unlikeMovieMutationFn } = useMutation({
        mutationFn: (movieId) => unlikeMovie(movieId),
    });

    const handleClickLikeButton = async () => {
        if (isLikedMovie) {
        await unlikeMovieMutationFn(movieId);
        } else {
        await likeMovieMutationFn(movieId);
        }
        queryClient.invalidateQueries({queryKey, exact: true})
    };

    return (
        <button
        className={`bg-slate-50/40 w-[70px] h-[70px] rounded-full text-center ${
            isLikedMovie ? "text-red-500" : "text-white"
        }`}
        onClick={handleClickLikeButton}
        >
        <FaHeart className="inline-block text-3xl" />
        </button>
    );
}

export default LikeMovieButton;
