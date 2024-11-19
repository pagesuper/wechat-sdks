/// <reference types="node" />
declare const requestUtil: {
    getFileBuffer: (url: string) => Promise<Buffer>;
};
export default requestUtil;
