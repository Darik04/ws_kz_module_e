const { OutputManager } = require('./OutputManager');

describe('OutputManager', () => {
  let outputManager;
  let consoleLogSpy;

  beforeEach(() => {
    outputManager = new OutputManager();
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  describe('display', () => {
    it('should display a message in default color if no color is specified', () => {
      const message = 'Test Message';
      outputManager.display(message);

      expect(consoleLogSpy).toHaveBeenCalledWith(message);
    });

    it('should display a message in red color if color is set to "red"', () => {
      const message = 'Error Message';
      outputManager.display(message, 'red');

      expect(consoleLogSpy).toHaveBeenCalledWith('\x1b[31m%s\x1b[0m', message);
    });

    it('should display a message in green color if color is set to "green"', () => {
      const message = 'Success Message';
      outputManager.display(message, 'green');

      expect(consoleLogSpy).toHaveBeenCalledWith('\x1b[32m%s\x1b[0m', message);
    });

    it('should display a message in default color if an invalid color is specified', () => {
      const message = 'Info Message';
      outputManager.display(message, 'invalid-color');

      expect(consoleLogSpy).toHaveBeenCalledWith(message);
    });
  });
});