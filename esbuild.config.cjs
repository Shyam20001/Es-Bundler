const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outdir: './dist',
  platform: 'node',
  target: 'node14',
  format: 'cjs',
  // watch: { // Include watch option here
  //   onRebuild(error, result) {
  //     if (error) console.error('Build failed:', error);
  //     else console.log('Build succeeded:', result);
  //   },
  // },
  external: ['express'], // Specify external modules
}).catch(() => process.exit(1));
