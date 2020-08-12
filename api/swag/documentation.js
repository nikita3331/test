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
                  }
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
                  },
                },
                example: {
                  success: true,
                  fragment: [],
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
    "/api/graphicsMarkupPages": {
      get: {
        tags: ["ComputerVision"],
        description: "Get the total amount of pages to display",
        operationId: "getTotalNumOfPages",
        parameters: [
          {
            in:'header',
            name:'rows',
            description:'Amount of rows per page.',
            example:20,
            type:'Number',
            required:true
          }
        ],
        responses: {
          "200": {
            description: "Calculated the amount successfuly",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                    pages: {
                      type: "Number",
                    },
                    
                  },
                },
                example: {
                  success: true,
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
