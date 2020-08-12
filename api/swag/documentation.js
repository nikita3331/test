const doc = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "TEST",
    description: "Test app",
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
                    example: {in_frame:{active:true,ascending:true},out_frame:{active:false,ascending:true},
                    required: true,
                  }
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Data was fetched and filtered correctly",
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
                    }
                  },
                },
                example: {
                  success: true,
                  fragment:[]
                },
              },
            },
          },
          "500": {
            description: "Server failed",
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
        description: "Get the number of pages to show on website",
        operationId: "getNumOfPages",
        parameters: [
          {
            in:"header",
            type: "string",
            name:"rows",
            description: "First name of user,both",
            example: "Jan",
            required: true,
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  firstName: {
                    type: "string",
                    description: "First name of user,both",
                    example: "Jan",
                    required: true,
                  },
                  lastName: {
                    type: "string",
                    description: "Last name of user,both",
                    example: "Kowalski",
                    required: true,
                  },
                  firebaseID: {
                    type: "string",
                    description: "ID given by Firebase to user,both",
                    example: "87ab191f339fa1f8d44be1869bdfbb659c342bf9",
                    required: true,
                  },
                  isStudent: {
                    type: "boolean",
                    description: "Is the user a student,both",
                    example: true,
                    required: true,
                  },
                  phone: {
                    type: "string",
                    description: "User phone,for TEACHER",
                    example: "782828282",
                    required: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Registration was successful",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                  },
                },
                example: {
                  success: true,
                },
              },
            },
          },
          "400": {
            description: "User already exists",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                    reason: {
                      type: "number",
                    },
                  },
                },
                example: {
                  success: false,
                  reason: 1,
                },
              },
            },
          },
          "500": {
            description: "Failed to load from datebase.Reason 0-failed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                    reason: {
                      type: "number",
                    },
                    message: {
                      type: "string",
                    },
                  },
                },
                example: {
                  success: false,
                  reason: 0,
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
