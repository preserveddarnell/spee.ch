function isValidClaimId (claimId) {
  return ((claimId.length === 40) && !/[^A-Za-z0-9]/g.test(claimId));
};

function isValidShortId (claimId) {
  return claimId.length === 1;  // it should really evaluate the short url itself
};

function isValidShortIdOrClaimId (input) {
  return (isValidClaimId(input) || isValidShortId(input));
};

const flipClaimNameAndIdForBackwardsCompatibility = (identifier, name) => {
  // this is a patch for backwards compatability with '/name/claim_id' url format
  if (isValidShortIdOrClaimId(name) && !isValidShortIdOrClaimId(identifier)) {
    const tempName = name;
    name = identifier;
    identifier = tempName;
  }
  return [identifier, name];
};

module.exports = flipClaimNameAndIdForBackwardsCompatibility;