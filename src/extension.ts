// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// First custom command.
	const command = 'better-ctrl-all.sayHello';

	const commandHandler = (name: string = 'testing') => {
		console.log(`Hello ${name}!!!`);
	}

	context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));


	/*

	# Features
	
	-Settings panel
	-Ctrl all selection up
	-Ctrl all selection down
	-Memory saves selected setting

	-Ctrl all selection block

	# User flow
	WHEN user selects ctrl.all.selection.up THEN
		Extension REMAPS key to select the CURRENT LINE AND UP.
		Extension SAVES preference in file.
	*/

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "better-ctrl-all" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('better-ctrl-all.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from better-ctrl-all!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
