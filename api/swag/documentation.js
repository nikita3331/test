const doc = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Test",
    description: "Test app ",
    termsOfService: "blank",
    contact: {
      name: "Mykyta Brazhyskyy",
      email: "mykyta.brazhynskyy@gmail.com",
      url: "blank",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "https://testwirewax.herokuapp.com/",
      description: "Test server",
    },
  ],
  paths: {
    "/api/graphicsMarkup": {
      post: {
        tags: ["ComputerVision"],
        description: "Fetch sorted and filtered data from the json file",
        operationId: "fetchSortedData",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  pageNumber: {
                    type: "Number",
                    description: "Index of page user wants to load",
                    example: 1,
                    required: true,
                  },
                  maxRowLength: {
                    type: "Number",
                    description: "Amount of rows user has in table.",
                    example: 20,
                    required: true,
                  },
                  sorting: {
                    type: "Object",
                    description: "Object with sorting parametres",
                    example: {in_frame:{active:true,ascending:true},out_frame:{active:false,ascending:true}},
                    required: true,
                  },
                  locations: {
                    type: "Array",
                    description: "Array of locations we want to filter",
                    example: ['centre'],
                    required: true,
                  },
                  
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Sorted and filtered data successfuly",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                    fragment: {
                      type: "Array",
                    },
                    totalAmount: {
                      type: "Number",
                      description:'Total amount of pages based on filtering'
                    },
                  },
                },
                example: {
                  success: true,
                  fragment: [],
                  totalAmount: 5,
                },
              },
            },
          },
          "500": {
            description: "Server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                    message: {
                      type: "string",
                    },
                  },
                },
                example: {
                  success: false,
                  message: "failed to load",
                },
              },
            },
          },
        },
      },
    },
  },

  tags: [
    {
      name: "ComputerVision",
    },
  ],
};
exports.doc = doc;
