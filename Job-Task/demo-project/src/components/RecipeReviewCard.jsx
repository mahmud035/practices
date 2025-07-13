import React, { useState } from 'react';
import recipe from '../assets/images/recipe.jpg';

const RecipeReviewCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-xs overflow-hidden rounded bg-white shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 flex items-center">
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 font-bold text-white">
              R
            </div>
          </div>
          <div className="ml-2">
            <div className="text-sm font-bold">Shrimp and Chorizo Paella</div>
            <div className="text-sm">September 14, 2016</div>
          </div>
        </div>
        <img
          className="h-48 w-full object-cover"
          src={recipe}
          alt="Paella dish"
        />
        <p className="mt-4 text-base text-gray-700">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <button className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18l-8-8 1.414-1.414L10 15.172l6.586-6.586L18 10l-8 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2">Favorite</span>
          </button>
        </div>
        <div>
          <button className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2H2a2 2 0 01-2-2V7a2 2 0 012-2h2V3a2 2 0 012-2zm2 2H6v8h8V7h-2a2 2 0 01-2-2V5zm-2 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2">Share</span>
          </button>
          <button
            className={`ml-4 ${
              expanded ? 'rotate-180' : ''
            } transform transition-transform duration-200`}
            onClick={handleExpandClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18l-8-8 1.414-1.414L10 15.172l6.586-6.586L18 10l-8 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {expanded && (
        <div className="px-6 py-4">
          <h4 className="font-bold">Method:</h4>
          <p className="mb-2">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </p>
          <p className="mb-2">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </p>
          <p className="mb-2">
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </p>
          <p>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeReviewCard;
