exports.handler = async (event, context, callback) => {
  const { request, response } = event.Records[0].cf;
  
  const securityHeaders = {
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'no-referrer-when-downgrade',
    'Content-Security-Policy': 'default-src \'self\'; upgrade-insecure-requests;',
  };
  
  const headerCacheControl = 'Cache-Control';
  const defaultTimeToLive = 60 * 60 * 24 * 365; // 365 days
  const fileExts = [
    '.js',
    '.css',
    '.json',
    '.woff',
    '.woff2',
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.svg',
    '.glb',
    '.gltf',
    '.hdr',
    '.mp4',
    '.wasm',
  ];

  // Asset caching headers
  if (response.status === '200') {
    if (!response.headers[headerCacheControl.toLowerCase()]) {
      // Only cache above-defined list of file types
      if (fileExts.findIndex(fileExt => request.uri.endsWith(fileExt)) >= 0) {
        response.headers[headerCacheControl.toLowerCase()] = [
          {
            key: headerCacheControl,
            value: `public, max-age=${defaultTimeToLive}`,
          },
        ];
      } else {
        response.headers[headerCacheControl.toLowerCase()] = [
          {
            key: headerCacheControl,
            value: `public, max-age=0`,
          },
        ];
      }
    }
  }

  // Security headers
  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers[key.toLowerCase()] = [
      {
        key,
        value,
      },
    ];
  }

  callback(null, response);
};
