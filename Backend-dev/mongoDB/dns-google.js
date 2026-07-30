import dns from "node:dns";
import { Resolver } from "node:dns/promises";

const resolver = new Resolver();

// Force Google DNS
resolver.setServers(["8.8.8.8", "8.8.4.4"]);

try {
  const records = await resolver.resolveSrv(
    "_mongodb._tcp.cluster0.dsphmrw.mongodb.net"
  );
  console.log(records);
} catch (err) {
  console.error(err);
} 