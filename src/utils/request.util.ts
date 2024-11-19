const requestUtil = {
  getFileBuffer: async (url: string): Promise<Buffer> => {
    const response = await fetch(url);
    return Buffer.from(await response.arrayBuffer());
  },
};

export default requestUtil;
