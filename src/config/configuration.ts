export default () => ({
  authConfigService: {
    jwtSecret: process.env.JWT_SECRET,
  },
});
