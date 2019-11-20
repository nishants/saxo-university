var firebase = require("firebase-admin");

firebase.initializeApp({
  credential: firebase.credential.cert({
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDP/6bIF/rMAndg\nBXpHTg/7sjMnsfJ4zr7E+OqpQLkluxxTSp9irhSwxYhDQ/hKaj+hDf1he7iuxJMG\nUVU3A5kqUTI9YG6ZP4vOPkyCntTDa/JgHs/37n3KjpTu4Zqn0aROxXTLPcCxUtZo\ntBEcyvneWwLwY7ky5XkG8zI1Qrv/6IvdEnzB1EDSgKoR7stM1IjW83ft9vBp3S8O\nQ7f6LwnFXoN82ib8zwr0JXZ84u3utpg/9UahdUWV1lVZR8MqzEGGa0pctFreH6er\n6QvmO3SHOW4r8J/YZgLY8DWZ0Iu4ekm19ruqlRTXAxAfngJWLmyhwi8df7Z5PFrU\nZ7voR03bAgMBAAECggEARTG9IA+qJTgk0lLALPxxIMBVeD0gdsQAfrJ4Djoz3bNz\nZtoKT9+tjmkIPahc7xSNelyXEFkCRVGrv4xLFvQhfgxo9DYiVOTo84GSHloMWb6N\ncSCO+uHiAwKP1TBELNP3HyVdB0fR1KvEHCzbDIMRwMDyJ1plf+MK8h7xcvpyZF00\nVBgMV3I4GnTS2k3tbyIa+ySi9zZUFhxgWPJJcAEB8Y/UbAraOJZCGnh2m+m5qhh0\n7W/cg96jCDxB1+oqLCx8TdBGxbWKud6M9iongTiX4eOJTaO+tpUo+gK1KUcr5V/M\nXYH7NxpPNoDch7OyxecWeQN+k/lZK4OMF3F3jV/0EQKBgQD3R/KzkCp8/JERBZVw\n/yJTn/MZWYqrQ3sc5YSUFZW4/Cqp0G7mCL/Hln/YsiSVLT/+Y+wbVtEztldIm8pK\nXddkSTq40f2uxyQBG7DcuGUcJhGIlYmp36fOpT2NQu6bmg9sXEFKqzDy3Qm+h3TN\nhc6Vh4pBTAJ2Las467jUyu1nXQKBgQDXVSAoE1yyDOC3kHYZr7NbdKzV1W9m2Cz3\n0Wbh7Dnad2j+tZwY92+KL2xxhSH+oDtctU0h8rP1PFZT0xJoK37l5rDm9CFC6Vak\nRumcRRveX8DtuQFjVUuVUYC9eaiZesivxqW42J/fXbW+LZxp5IZ9mncnJjJ85cFH\nitKQPLVOlwKBgQCYfPe/n2F0HdPfaVAUlGC4rOQed8c5ga2Dzk2JfB4OKwKsIWqh\n1DdffwFrwb8pdvQFjdzlpw3vE7yTe+6tGV1f7ICXxHbptsgPHuJb2iIPz7H0RjLU\nXKWAmwlv+RxnPAPS0Lk6sILI4WHG6oUu0BrqvuCVD6hc9CCoQ0SBhHoNyQKBgHaB\n3uSvY0CKXdIoqxaP4AHhQI2enWTYbEcm85w6ycw2E466nGIRK029s8z2HDNqM8Fd\n9klMrUW2IzyW2XaDGZ+lSo6QpQ2SJaDbdg4O6ruDr0Yln2Hvu10+McAViHiPXot+\npA4LClF/3VoA+Cg/INVXgWQGXZrnR2v8Ns4y2wWZAoGAFI7Qai+icWpDUpDsysPr\nVCUbdELCvbzqPxXGmBMxGINgiy8D0tW5ahAdsw7bGx4z0dUozhFtv6f3/oF6iqTU\nkoc1aiwALxGlZPX5uskXAKN7lNmhz8H4JCCMbhJeQQ/jQUGJkkjlgaph1UP9+o6Y\nCAlnTv/jvJH8oRduYetA5tU=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-jjeko@azure-status-server.iam.gserviceaccount.com",
  }),
  databaseURL: "https://azure-status-server.firebaseio.com",
});

const pullRequest = (branchName, pullRequestId, createdBy) => {
  var update = {};
  update['/builds/' + 840 + '/lastNotificationTimestamp'] =
    firebase.database.ServerValue.TIMESTAMP;
  firebase.database().ref().update(update);


  const ref = `pullRequests/${pullRequestId}`;
  const value = {
    pullRequestId,
    branchName,
    createdBy
  };

  firebase.database().ref().update({
    [ref]: value
  });
};

pullRequest('my-new-branch', 420, 'nish');