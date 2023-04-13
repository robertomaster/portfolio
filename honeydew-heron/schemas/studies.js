export default {
    name: "studies",
    title: "Studies",
    type: "document",
    fields: [
        {
            name: "university",
            title: "University",
            type: "string",
        },
        {
            name: "degree",
            title: "Degree",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "string",
        },
        {
            name: "web",
            title: "Web",
            type: "text",
        },
        {
            name: "location",
            title: "Location",
            type: "text",
        },
        {
            name: "paper",
            title: "Paper",
            type: "text",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },

        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }],
        },

    ],
};
