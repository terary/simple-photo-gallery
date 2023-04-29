// webpack.config.server.js
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
// import { RunScriptWebpackPlugin } from "run-script-webpack-plugin";
// import { RunScriptWebpackPlugin } from "run-script-webpack-plugin";
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin')
// RunScriptWebpackPlugin.RunScriptWebpackPlugin
module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, 'src/server/server.ts'),
  },
  devtool: 'cheap-source-map',
  watch: true,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    devtoolModuleFilenameTemplate: 'dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.server.json',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: 'src/server', from: 'views', to: 'views' }],
    }),
    new RunScriptWebpackPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect'], // allow debugging
      // args: ['scriptArgument1', 'scriptArgument2'], // pass args to script
      // autoRestart: true | false, // Should the script auto-restart after emit. Defaults to true. This should be set to false if using HMR
      // signal: false | true | 'SIGUSR2', // signal to send for HMR (defaults to `false`, uses 'SIGUSR2' if `true`)
      // keyboard: true | false, // Allow typing 'rs' to restart the server. default: only if NODE_ENV is 'development'
      // cwd: undefined | string, // set a current working directory for the child process default: current cwd
    }),
  ],
}
