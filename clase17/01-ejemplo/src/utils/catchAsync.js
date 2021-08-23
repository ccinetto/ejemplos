/**
 * Handling Async code errors in Express
 * https://www.youtube.com/watch?v=4m68G0LQsFo
 */

export const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
