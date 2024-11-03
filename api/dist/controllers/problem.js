import prismaClient from "../lib/db.js";
async function handleListProblems(req, res) {
    const problems = await prismaClient.problem.findMany();
    return res.status(200).json({ problems });
}
async function handleCreateProblem(req, res) {
    const { title, description, difficulty, inputFormat, outputFormat, examples, } = req.body;
    // Validate input
    if (!title ||
        !description ||
        !difficulty ||
        !inputFormat ||
        !outputFormat ||
        !examples) {
        return res.status(400).json({
            error: "All fields (title, description, difficulty, inputFormat, outputFormat, examples) are required.",
        });
    }
    try {
        // Create the new contest with associated problem IDs
        const newProblem = await prismaClient.problem.create({
            data: {
                title,
                description,
                difficulty,
                inputFormat,
                outputFormat,
                examples,
            },
        });
        // Respond with the created contest
        return res.status(201).json(newProblem.id);
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ error: "An error occurred while creating the contest." });
    }
}
export { handleListProblems, handleCreateProblem };
