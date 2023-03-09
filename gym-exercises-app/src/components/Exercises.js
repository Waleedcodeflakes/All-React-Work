import React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material/";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { DiffieHellmanGroup } from "crypto";

const Exercises = ({ exercise, setExercises, bodyParts }) => {
  console.log("data", exercise);

  return (
    <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {Exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

// const Exercises = ({ exercise, setExercises, bodyParts }) => {
//   console.log(exercise);

//   return (
//     <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
//       <Typography variant="h3" mb="46px">
//         Showing results
//       </Typography>
//       {exercise && exercise.length > 0 ? (
//         <Stack
//           direction="row"
//           sx={{ gap: { lg: "110px", xs: "50px" } }}
//           flexWrap="wrap"
//           justifyContent="center"
//         >
//           {exercise.map((exercise, index) => (
//             <ExerciseCard key={index} exercise={exercise} />
//           ))}
//         </Stack>
//       ) : (
//         <Typography variant="body1">
//           No exercises found for this body part
//         </Typography>
//       )}
//     </Box>
//   );
// };

// const Exercises = ({ exercise, setExercises, bodyParts }) => {
//   console.log(exercise);

//   // Check if Exercises is an array before calling map
//   if (!Array.isArray(exercise)) {
//     return <div>Exercises is not an array</div>;
//   }

//   return (
//     <div>
//       {Exercises.map((exercise, index) => (
//         <ExerciseCard key={index} exercise={exercise} />
//       ))}
//     </div>
//   );
// };

export default Exercises;
