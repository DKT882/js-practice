import dns from "node:dns/promises";

try {
    const result = await dns.resolveSrv(
        "_mongodb._tcp.cluster0.dsphmrw.mongodb.net"
    );
    console.log(result);
} catch (e) {
    console.error(e);
}