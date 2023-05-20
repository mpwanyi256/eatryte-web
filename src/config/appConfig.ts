const getCurrentUrl = (): string => {
  // We can return prod base URL here
  const { protocol, hostname, port } = window.location;
  return `${protocol}//${hostname}`;
};

export default {
  api: {
    baseURL:
      process.env.VUE_APP_NODE_ENV == "dev"
        ? "http://localhost"
        : getCurrentUrl(),
    port: 3020,
  },
  app: {
    name: "Kanban",
    baseUrl: "/",
    version: "1.0.0",
  },
};
