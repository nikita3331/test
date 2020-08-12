 const doc={
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'KorkiApp',
    description: 'Aplikacja do korepetycji ',
    termsOfService: 'blank',
    contact: {
      name: 'Mykyta Brazhyskyy Maksymilian Pilżys',
      email: 'mykyta.brazhynskyy@gmail.com maks@gmail.com',
      url: 'blank'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  servers: [
    {
      url: 'https://korkiapp-api.herokuapp.com/',
      description: 'Production server'
    }
  ],
  paths: {
    '/users/register': {
      post: {
        tags: ['User'],
        description: 'Register a student or teacher',
        operationId: 'registerUser',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  firstName: {
                      type: 'string',
                      description: 'First name of user,both',
                      example: 'Jan',
                      required: true
                  },
                  lastName: {
                    type: 'string',
                    description: 'Last name of user,both',
                    example: 'Kowalski',
                    required: true
                },
                firebaseID: {
                  type: 'string',
                  description: 'ID given by Firebase to user,both',
                  example: '87ab191f339fa1f8d44be1869bdfbb659c342bf9',
                  required: true
              },
            isStudent: {
              type: 'boolean',
              description: 'Is the user a student,both',
              example: true,
              required: true
          },
          phone: {
            type: 'string',
            description: 'User phone,for TEACHER',
            example: '782828282',
            required: true
        },
            
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'Registration was successful',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      }
                    }
                },
                example: {
                  success: true
                }
              }
            }
          },
          '400': {
            description: 'User already exists',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:1
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase.Reason 0-failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:0,
                  message:'failed to load'
                }
              }
            }
          },
          
          
         
        }
      }
    },

    '/users/uploadPicture': {
      post: {
        tags: ['User'],
        description: 'Upload picture in base64 string',
        operationId: 'uploadPictureBase64',
        parameters: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  base64Img: {
                    type: 'string',
                    description: 'Base 64 string ',
                    example: 'xjdhfk455xx',
                    required: true
                },
                authKey: {
                  type: 'string',
                  description: 'Authkey of user who wants to set/update his image ',
                  example: '30b5e8e453124f8bad296f88109a334d1047406b',
                  required: true
              },
                  
            
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'Upload succesful',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      }
                    }
                },
                example: {
                  success: true
                }
              }
            }
          },
          '400': {
            description: 'Auth failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      }
                    }
                },
                example: {
                  success: true,
                  reason:0
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase.Reason 0-failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:1,
                  message:'failed to load'
                }
              }
            }
          },
          
          
         
        }
      }
    },
    '/lessons/updateSchedule': {
      post: {
        tags: ['Lessons'],
        description: 'Update users schedule',
        operationId: 'updateSchedule',
        parameters: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                authKey: {
                  type: 'string',
                  description: 'Authkey of user who wants to set/update his schedule ',
                  example: '30b5e8e453124f8bad296f88109a334d1047406b',
                  required: true
              },
              schedule: {
                type: 'Object',
                description: 'Updated schedule of users.Just edit the one you get from datebase ',
                example: 'schedule.monday[0][0]={available:true,reserved:false} monday 00:00',
                required: true
            },
                  
            
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'Upload succesful',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      }
                    }
                },
                example: {
                  success: true
                }
              }
            }
          },
          '400': {
            description: 'Auth failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      }
                    }
                },
                example: {
                  success: true,
                  reason:0
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase.Reason 0-failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:1,
                  message:'failed to load'
                }
              }
            }
          },
          
          
         
        }
      }
    },
    '/lessons/getSchedule': {
      get: {
        tags: ['Lessons'],
        description: 'Get users schedule',
        operationId: 'getSchedule',
        parameters: {
              
        },
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  authKey: {
                    type: 'string',
                    description: 'Authkey of user who wants to set/update his schedule ',
                    example: '30b5e8e453124f8bad296f88109a334d1047406b',
                    in:'header',
                    required: true
                },
                useruuid: {
                  type: 'String',
                  description: 'ID of user we want to get schedule from',
                  example: 'dont have id yet',
                  in:'header',
                  required: true
              },
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'Fetched succesful',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      schedule: {
                        type: 'Object'
                      }
                    }
                },
                example: {
                  success: true,
                  schedule:{}
                }
              }
            }
          },
          '400': {
            description: 'Auth failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      }
                    }
                },
                example: {
                  success: true,
                  reason:0
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase.Reason 0-failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:1,
                  message:'failed to load'
                }
              }
            }
          },
          
          
         
        }
      }
    },
    '/lessons/addLesson': {
      post: {
        tags: ['Lessons'],
        description: 'Add lesson by teacher',
        operationId: 'addlesson',
        parameters: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                authKey: {
                  type: 'string',
                  description: 'Authkey of user who wants to set/update his schedule ',
                  example: '30b5e8e453124f8bad296f88109a334d1047406b',
                  required: true
              },
              price: {
                type: 'Number',
                description: 'Price of lesson ',
                example: '20',
                required: true
            },
            lat: {
              type: 'Number',
              description: 'Latitude of user ',
              example: '52.11222',
              required: true
                },
                lon: {
                  type: 'Number',
                  description: 'Longitude of user ',
                  example: '55.3232332',
                  required: true
              },
                description: {
                  type: 'String',
                  description: 'Description of subject ',
                  example: 'I really like math',
                  required: true
            },
                level: {
                  type: 'Number',
                  description: 'Level of lesson',
                  example: '2',
                  required: true
                },
                subjectID: {
                  type: 'String',
                  description: 'iD of the subject we want to add ',
                  example: 'x8ddc822',
                  required: true
                },
                level: {
                  type: 'Number',
                  description: 'Level of lesson',
                  example: '2',
                  required: true
              },
              subjectID: {
                type: 'String',
                description: 'iD of the subject we want to add ',
                example: 'x8ddc822',
                required: true
              },
              car: {
                type: 'Boolean',
                description: 'Do we offer lessons in someones home',
                example: 'True',
                required: true
              },
              online: {
                type: 'Boolean',
                description: 'Do we offer lessons online',
                example: 'True',
                required: true
              },
      
                  
            
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'Added lesson succesful',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      }
                    }
                },
                example: {
                  success: true
                }
              }
            }
          },
          '300': {
            description: 'A Subject with given subjectID does not exist',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      }
                    }
                },
                example: {
                  success: false,
                  success: 2
                }
              }
            }
          },
          '400': {
            description: 'Auth failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      }
                    }
                },
                example: {
                  success: true,
                  reason:0
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase.Reason 0-failed',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:1,
                  message:'failed to load'
                }
              }
            }
          },
          
          
         
        }
      }
    },
    '/users/login': {
      post: {
        tags: ['User'],
        description: 'Check if user has already registered and if yes,return user.Reason 0-not registered ,1-no such user exist,2-error fetching from DB',
        operationId: 'loginUser',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                
                firebaseID: {
                  type: 'string',
                  description: 'ID given by Firebase to user',
                  example: '87ab191f339fa1f8d44be1869bdfbb659c342bf9',
                  required: true
              }
            
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'User exists and he was registered',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      user: {
                        type: 'Object'
                      },
                      image:{
                        type:'Object',
                      }
                      
                      
                      
                    }
                },
                example: {
                  success: true,
                  user:{firstName:'Nikita'},
                  image:{
                    data:'Binary xxx',
                    contentType:'image/png',
                    uuID:'Id of user'
                    }
                }
              }
            }
          },
          '300': {
            description: 'User is not registered .User went through screen ,but did not fill forms.',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      },
                    }
                },
                example: {
                  success: true,
                  reason:0
                }
              }
            }
          },
          '400': {
            description: 'No such user in datebase (First opening of app) ',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      },
                    }
                },
                example: {
                  success: false,
                  reason:1
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:2,
                  message:'failed to load'
                }
              }
            }
          },
        }
      }
    },
    '/admin/login': {
      post: {
        tags: ['Admin'],
        description: 'Login for admin account',
        operationId: 'loginAdmin',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                
                login: {
                  type: 'string',
                  description: 'Login of admin',
                  example: 'tester',
                  required: true
              },
              password: {
                type: 'string',
                description: 'password of admin',
                example: 'tester',
                required: true
            }
            
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'Login successful',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      autkKey: {
                        type: 'string'
                      },

                      
                                        
                    }
                },
                example: {
                  success: true,
                  autkKey:'dadaxxdfdd'

                }
              }
            }
          },
          '400': {
            description: 'No such user in datebase  ',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      },
                    }
                },
                example: {
                  success: false,
                  reason:1
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:2,
                  message:'failed to load'
                }
              }
            }
          },
        }
      }
    },
    '/admin/addsubject': {
      post: {
        tags: ['Admin'],
        description: 'Add subject',
        operationId: 'addSubject',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                
                autkKey: {
                  type: 'string',
                  description: 'Autkkey of user',
                  example: 'xd88ddd',
                  required: true
              },
              schoolsubject: {
                type: 'boolean',
                description: 'Is the subject a school subject',
                example: '1',
                required: true
            },
            name: {
              type: 'String',
              description: 'Name of the subject in Polish',
              example: 'Fizyka',
              required: true
          },
          iconname: {
            type: 'String',
            description: 'Name of the icon',
            example: 'account',
            required: true
        },iconfamily: {
          type: 'String',
          description: 'Name of the icon family',
          example: 'MaterialCommunityIcons',
          required: true
      }

            
                }
              }
            }
          },
          
        },
        responses: {
          '200': {
            description: 'Added successful',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },


                                                      
                    }
                },
                example: {
                  success: true,

                }
              }
            }
          },
          '400': {
            description: 'No such user in datebase  ',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },
                      reason: {
                        type: 'number'
                      },
                    }
                },
                example: {
                  success: false,
                  reason:1
                }
              }
            }
          },
          '500': {
            description: 'Failed to load from datebase',
            content: {
              'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean'
                      },reason: {
                        type: 'number'
                      },message: {
                        type: 'string'
                      }
                    }
                },
                example: {
                  success: false,
                  reason:2,
                  message:'failed to load'
                }
              }
            }
          },
        }
      }
    },
  
  },


     
tags: [
  {
    name: 'User'
  },
  {
    name: 'Lessons'
  },
  {
    name: 'Admin'
  },
  

],
  

};
exports.doc=doc;