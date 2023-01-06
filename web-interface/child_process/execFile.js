const execFile = require('child_process').execFile;

const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log('stdout: node version is', stdout);
});


/* 
child_process.execFile(file[, args][, options][, callback])

- file <String> The name or path of the executable file to run
- args <Array> List of string arguments
- options <Object>
    cwd <String> Current working directory of the child process
    env <Object> Environment key-value pairs
    encoding <String> (Default: ‘utf8’)
    timeout <Number> (Default: 0)
    maxBuffer <Number> largest amount of data (in bytes) allowed on stdout or stderr – if exceeded child process is killed (Default:200\*1024)
    killSignal <String> (Default: ‘SIGTERM’)
    uid <Number> Sets the user identity of the process. (See setuid(2).)
    gid <Number> Sets the group identity of the process. (See setgid(2).)
- callback <Function> called with the output when process terminates
  error <Error>
  stdout <String> | <Buffer>
  stderr <String> | <Buffer>
- Return: <ChildProcess>
*/
