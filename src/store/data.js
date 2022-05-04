export default {
  id: 0.6988862688788375,
  name: 'plugin-auto-0 -> fastify-overview',
  children: [
    {
      id: 0.17587210817615806,
      name: '/Users/raulsaez/dev/covid-green-backend-api/node_modules/fastify-swagger/lib/routes.js',
      children: [],
      routes: [
        {
          method: 'GET',
          url: '/docs',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        },
        {
          method: 'GET',
          url: '/docs/uiConfig',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        },
        {
          method: 'GET',
          url: '/docs/initOAuth',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        },
        {
          method: 'GET',
          url: '/docs/json',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        },
        {
          method: 'GET',
          url: '/docs/yaml',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        },
        {
          method: 'HEAD',
          url: '/docs/static/*',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        },
        {
          method: 'GET',
          url: '/docs/static/*',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        },
        {
          method: 'GET',
          url: '/docs/*',
          prefix: '/docs',
          hooks: {
            onRequest: [],
            preParsing: [],
            preValidation: [],
            preHandler: [],
            preSerialization: [],
            onError: [],
            onSend: [],
            onResponse: [],
            onTimeout: []
          }
        }
      ],
      decorators: {
        decorate: [],
        decorateRequest: [],
        decorateReply: [
          {
            name: 'sendFile'
          },
          {
            name: 'download'
          }
        ]
      },
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: [],
        onReady: [
          {
            name: 'Anonymous function',
            hash: 'c225eeb5342de89fa82c30a98afd66e4498f6bf7'
          }
        ],
        onClose: [],
        onRoute: [],
        onRegister: []
      }
    }
  ],
  routes: [
    {
      method: 'OPTIONS',
      url: '*',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      }
    },
    {
      method: 'POST',
      url: '/callback',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/callback/index.js',
        lineNumber: 101,
        columnNumber: 12,
        functionName: 'callback',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/check-in',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/check-in/index.js',
        lineNumber: 19,
        columnNumber: 12,
        functionName: 'checkIn',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/healthcheck',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/health/index.js',
        lineNumber: 8,
        columnNumber: 10,
        functionName: 'health',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/metrics',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/metrics/index.js',
        lineNumber: 44,
        columnNumber: 12,
        functionName: 'metrics',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/notices/create',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/notices/index.js',
        lineNumber: 128,
        columnNumber: 10,
        functionName: 'notices',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'PUT',
      url: '/notices/create',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/notices/index.js',
        lineNumber: 165,
        columnNumber: 10,
        functionName: 'notices',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/notices/validate',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/notices/index.js',
        lineNumber: 206,
        columnNumber: 10,
        functionName: 'notices',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/notices/send',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/notices/index.js',
        lineNumber: 239,
        columnNumber: 10,
        functionName: 'notices',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/settings',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/data/index.js',
        lineNumber: 49,
        columnNumber: 10,
        functionName: 'data',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/settings/exposures',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/data/index.js',
        lineNumber: 57,
        columnNumber: 10,
        functionName: 'data',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/settings/language',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/data/index.js',
        lineNumber: 71,
        columnNumber: 10,
        functionName: 'data',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/stats',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/data/index.js',
        lineNumber: 79,
        columnNumber: 10,
        functionName: 'data',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/data/exposures/*',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/data/index.js',
        lineNumber: 89,
        columnNumber: 10,
        functionName: 'data',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/exposures/verify',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/exposures/index.js',
        lineNumber: 222,
        columnNumber: 10,
        functionName: 'exposures',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/v',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/exposures/index.js',
        lineNumber: 246,
        columnNumber: 10,
        functionName: 'exposures',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/verify',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/exposures/index.js',
        lineNumber: 281,
        columnNumber: 10,
        functionName: 'exposures',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/certificate',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/exposures/index.js',
        lineNumber: 367,
        columnNumber: 10,
        functionName: 'exposures',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/exposures',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/exposures/index.js',
        lineNumber: 666,
        columnNumber: 10,
        functionName: 'exposures',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/publish',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/exposures/index.js',
        lineNumber: 677,
        columnNumber: 10,
        functionName: 'exposures',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/exposures',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/exposures/index.js',
        lineNumber: 714,
        columnNumber: 10,
        functionName: 'exposures',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/email',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/qr-code/index.js',
        lineNumber: 74,
        columnNumber: 10,
        functionName: 'qrCode',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'PUT',
      url: '/email',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/qr-code/index.js',
        lineNumber: 113,
        columnNumber: 10,
        functionName: 'qrCode',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/venues/types',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/qr-code/index.js',
        lineNumber: 149,
        columnNumber: 10,
        functionName: 'qrCode',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/venues',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/qr-code/index.js',
        lineNumber: 162,
        columnNumber: 10,
        functionName: 'qrCode',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'GET',
      url: '/venues/risky',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/qr-code/index.js',
        lineNumber: 221,
        columnNumber: 10,
        functionName: 'qrCode',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/venues/check-ins',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/qr-code/index.js',
        lineNumber: 234,
        columnNumber: 10,
        functionName: 'qrCode',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/register',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/register/index.js',
        lineNumber: 82,
        columnNumber: 10,
        functionName: 'register',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'PUT',
      url: '/register',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/register/index.js',
        lineNumber: 95,
        columnNumber: 10,
        functionName: 'register',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'POST',
      url: '/refresh',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/register/index.js',
        lineNumber: 158,
        columnNumber: 10,
        functionName: 'register',
        typeName: null,
        methodName: null
      }
    },
    {
      method: 'DELETE',
      url: '/register',
      prefix: '',
      hooks: {
        onRequest: [],
        preParsing: [],
        preValidation: [],
        preHandler: [],
        preSerialization: [],
        onError: [],
        onSend: [],
        onResponse: [],
        onTimeout: []
      },
      souce: {
        stackIndex: 0,
        fileName:
          '/Users/raulsaez/dev/covid-green-backend-api/lib/routes/register/index.js',
        lineNumber: 276,
        columnNumber: 10,
        functionName: 'register',
        typeName: null,
        methodName: null
      }
    }
  ],
  decorators: {
    decorate: [
      {
        name: 'jwt'
      },
      {
        name: 'pg'
      },
      {
        name: 'swagger'
      },
      {
        name: 'swaggerCSP'
      }
    ],
    decorateRequest: [
      {
        name: 'corsPreflightEnabled'
      },
      {
        name: 'authenticate',
        souce: {
          stackIndex: 0,
          fileName:
            '/Users/raulsaez/dev/covid-green-backend-api/lib/plugins/jwt/index.js',
          lineNumber: 28,
          columnNumber: 10,
          functionName: 'jwt',
          typeName: null,
          methodName: null
        }
      },
      {
        name: 'user'
      },
      {
        name: 'jwtVerify'
      },
      {
        name: 'pg'
      },
      {
        name: 'verify',
        souce: {
          stackIndex: 0,
          fileName:
            '/Users/raulsaez/dev/covid-green-backend-api/lib/plugins/verify/index.js',
          lineNumber: 22,
          columnNumber: 10,
          functionName: 'verify',
          typeName: null,
          methodName: null
        }
      }
    ],
    decorateReply: [
      {
        name: 'jwtSign'
      }
    ]
  },
  hooks: {
    onRequest: [
      {
        name: 'Anonymous function',
        hash: 'f52de1b067d560360cc4a62ad2d2b1b75030bcd6'
      },
      {
        name: 'Anonymous function',
        hash: 'c62a662aa60c62c930f3110c530e0334a2c68ecc',
        source: {
          stackIndex: 0,
          fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/server.js',
          lineNumber: 34,
          columnNumber: 10,
          functionName: 'plugin',
          typeName: null,
          methodName: null
        }
      }
    ],
    preParsing: [],
    preValidation: [],
    preHandler: [],
    preSerialization: [],
    onError: [],
    onSend: [
      {
        name: 'Anonymous function',
        hash: '70b604c0911c845879d6d955b147d4a05ca259e5',
        source: {
          stackIndex: 0,
          fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/server.js',
          lineNumber: 42,
          columnNumber: 10,
          functionName: 'plugin',
          typeName: null,
          methodName: null
        }
      }
    ],
    onResponse: [
      {
        name: 'Anonymous function',
        hash: 'e03afb50778a3463fb72e1d1d97e3b5c22c2fcea',
        source: {
          stackIndex: 0,
          fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/server.js',
          lineNumber: 38,
          columnNumber: 10,
          functionName: 'plugin',
          typeName: null,
          methodName: null
        }
      }
    ],
    onTimeout: [],
    onReady: [
      {
        name: 'showStructure',
        hash: '698dfa1d761a8d7bb8851a6b530e7ce844a45014',
        source: {
          stackIndex: 0,
          fileName: '/Users/raulsaez/dev/covid-green-backend-api/lib/server.js',
          lineNumber: 65,
          columnNumber: 10,
          functionName: 'plugin',
          typeName: null,
          methodName: null
        }
      }
    ],
    onClose: [
      {
        name: 'Anonymous function',
        hash: '5df2616270625331cd6afb10bb3d364315463091'
      },
      {
        name: 'Anonymous function',
        hash: '5df2616270625331cd6afb10bb3d364315463091'
      }
    ],
    onRoute: [
      {
        name: 'Anonymous function',
        hash: '8f762a16acb2c21965a345e2d9c807c68a2812ad'
      },
      {
        name: 'Anonymous function',
        hash: '8f762a16acb2c21965a345e2d9c807c68a2812ad'
      },
      {
        name: 'Anonymous function',
        hash: '51a83f3451bad88f04085eb89749ab9d3757aaae'
      }
    ],
    onRegister: [
      {
        name: 'Anonymous function',
        hash: '5f048db1d0a74ebd1e276157ea71ea75423a42ac'
      }
    ]
  }
}
