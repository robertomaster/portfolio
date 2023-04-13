export default {
    name: "otherExperiences",
    title: "Other Experiences",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "string",
        },
        {
            name: "location",
            title: "Location",
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
